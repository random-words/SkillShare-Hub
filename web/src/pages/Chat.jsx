import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import styles from "./Chat.module.css";
import { useApi } from "../hooks/useApi";
import { useEffect, useState, useRef } from "react";
import { useAuth } from "../app/authContext";
import { io } from "socket.io-client";

const API_URL = "http://localhost:4000/api";
const WS_URL = "http://localhost:4000";

export default function Chat() {
  const { matchId } = useParams();
  const { token, user, isAuthenticated } = useAuth();
  const messagesEndRef = useRef(null);

  const { data: matchesData } = useApi(isAuthenticated ? "/matches" : null, {
    auth: true,
  });

  const matches = matchesData?.items ?? [];

  const {
    data: messagesData,
    loading,
    error,
  } = useApi(
    matchId && isAuthenticated ? `/chat/matches/${matchId}/messages` : null,
    { auth: true }
  );

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (messagesData?.items) {
      setMessages(messagesData.items);
    } else if (Array.isArray(messagesData)) {
      setMessages(messagesData);
    }
  }, [messagesData]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!matchId || !token) return;

    const socket = io(WS_URL, {
      auth: { token },
    });

    socket.emit("chat:join", { matchId: Number(matchId) });

    socket.on("chat:message", (msg) => {
      if (msg.sender_id !== user?.id) {
        setMessages((prev) => [...prev, msg]);
      }
    });

    return () => socket.disconnect();
  }, [matchId, token, user?.id]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || !matchId || !token) return;

    const res = await fetch(`${API_URL}/chat/matches/${matchId}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ body: input }),
    });

    if (res.ok) {
      const msg = await res.json();
      setMessages((prev) => [...prev, msg]);
      setInput("");
    } else {
      console.error("Failed to send message");
    }
  };

  return (
    <>
      <Header title="Chat" back />
      <main className={styles.main}>
        {!isAuthenticated && (
          <p style={{ padding: "20px" }}>Please log in to use chat.</p>
        )}
        {isAuthenticated && (
          <>
            <aside className={styles.sidebar}>
              {matches.map((m) => (
                <Link
                  key={m.id}
                  to={`/chat/${m.id}`}
                  className={`${styles.match} ${
                    Number(matchId) === m.id ? styles.active : ""
                  }`}
                >
                  <div className={styles.avatar}>{m.name[0]}</div>
                  <div className={styles.info}>
                    <div className={styles.name}>{m.name}</div>
                    <div className={styles.sub}>{m.subtitle}</div>
                  </div>
                </Link>
              ))}
            </aside>

            <section className={styles.chat}>
              {!matchId && (
                <p style={{ textAlign: "center", marginTop: "20px" }}>
                  Select a match to start chatting.
                </p>
              )}
              {matchId && (
                <>
                  {loading && <p>Loading messages...</p>}
                  {error && <p className={styles.error}>{error.message}</p>}

                  <div className={styles.messages}>
                    {messages.map((m) => (
                      <div
                        key={m.id}
                        className={`${styles.message} ${
                          m.sender_id === user?.id ? styles.mine : ""
                        }`}
                      >
                        {m.body}
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>

                  <form onSubmit={sendMessage} className={styles.form}>
                    <input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Type a message..."
                    />
                    <button type="submit">Send</button>
                  </form>
                </>
              )}
            </section>
          </>
        )}
      </main>
    </>
  );
}
