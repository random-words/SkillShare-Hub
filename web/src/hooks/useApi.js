import { useState, useEffect } from "react";

const MOCK_DATA = [
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

/**
 * @param {string} url - URL (ми його не використовуємо, але лишаємо для інтерфейсу)
 * @returns {{ data: any, loading: boolean, error: Error | null }}
 */
export const useApi = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const timer = setTimeout(() => {
      setData(MOCK_DATA);
      setLoading(false);

      // setError(new Error("Failed to fetch data from " + url));
      // setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [url]);

  return { data, loading, error };
};
