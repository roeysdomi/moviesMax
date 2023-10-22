import { useState, useEffect } from "react";

export function useAsyncFunction(asyncFunction) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [results, setResults] = useState(null);

  useEffect(() => {
    const executeAsyncFunction = async () => {
      try {
        if (asyncFunction) {
          const response = await asyncFunction();
          setResults(response);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    executeAsyncFunction();
  }, [asyncFunction]);

  return { error, loading, results,setResults };
}

export default useAsyncFunction;
