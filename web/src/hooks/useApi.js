import { useEffect, useState } from "react";
import { useAuth } from "../app/authContext";

const API_URL = "http://localhost:4000/api";

/**
 * @param {string | null} path  - наприклад "/users" або "/schedule/me"
 * @param {RequestInit & { auth?: boolean }} options
 */
export const useApi = (path, { auth = false, ...options } = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(Boolean(path));
  const [error, setError] = useState(null);
  const { token } = useAuth();

  useEffect(() => {
    if (!path) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    const load = async () => {
      setLoading(true);
      setError(null);

      try {
        const headers = new Headers(options.headers || {});
        headers.set("Content-Type", "application/json");

        if (auth && token) {
          headers.set("Authorization", `Bearer ${token}`);
        }

        const res = await fetch(`${API_URL}${path}`, {
          ...options,
          headers,
        });

        if (!res.ok) {
          const body = await res.json().catch(() => null);
          const msg =
            body?.message || `Request failed with status ${res.status}`;
          throw new Error(msg);
        }

        const json = await res.json().catch(() => null);

        if (!cancelled) {
          setData(json);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err : new Error("Unknown error"));
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [path, auth, token]);

  return { data, loading, error };
};
