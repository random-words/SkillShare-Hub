import { useState, useEffect } from "react";

const MOCK_USERS = [
  { id: 1, name: "Ethan Carter", subtitle: "Photography, Editing", rating: "4.8", lessons: 12 },
  {
    id: 2,
    name: "Sophia Bennett",
    subtitle: "Graphic Design, Illustration",
    rating: "4.9",
    lessons: 15,
  },
  { id: 3, name: "Liam Harper", subtitle: "Coding, Web Development", rating: "4.7", lessons: 10 },
  { id: 4, name: "Olivia Hayes", subtitle: "Writing, Content Creation", rating: "4.6", lessons: 8 },
];

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

/**
 * @param {string} url
 * @returns {{ data: any, loading: boolean, error: Error | null }}
 */
export const useApi = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      setError(null);

      try {
        await sleep(1500);

        let payload;
        if (url === "/users") {
          payload = MOCK_USERS;
        } else {
          payload = [];
        }

        const encoded = encodeURIComponent(JSON.stringify(payload));
        const res = await fetch(`data:application/json,${encoded}`);

        if (!res.ok) {
          throw new Error(`Failed to fetch ${url}: ${res.status}`);
        }

        const json = await res.json();

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
  }, [url]);

  return { data, loading, error };
};
