import { useState, useCallback } from "react";

export default function useFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async (options) => {
    const { url, method = "GET", body, headers = {}, queryParams } = options;
    
    setLoading(true);
    setError(null);
    
    try {
      // Construct URL with query parameters
      const urlObj = new URL(url);
      if (queryParams) {
        Object.entries(queryParams).forEach(([key, value]) => {
          urlObj.searchParams.append(key, value);
        });
      }

      const config = {
        method,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body: method !== "GET" && body ? JSON.stringify(body) : undefined,
      };

      const response = await fetch(urlObj.toString(), config);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message || "An unknown error occurred");
      setData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return {
    data,
    loading,
    error,
    fetchData,
    reset,
  };
}