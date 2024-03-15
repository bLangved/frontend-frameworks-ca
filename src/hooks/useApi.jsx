import { useState, useEffect } from "react";

/**
 * @description API hook
 */
function useApi(url) {
  const [data, setData] = useState({ data: [], meta: {} });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function getData() {
      if (!isMounted) return;

      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        if (isMounted) {
          setData(json);
        }
      } catch (error) {
        if (isMounted) {
          console.error("Fetching error:", error);
          setIsError(true);
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    getData();

    return () => {
      isMounted = false; // Cleanup function to set isMounted false when the component unmounts
    };
  }, [url]); // Depend on url, re-run getData when url changes

  return { data, isLoading, isError };
}

export default useApi;
