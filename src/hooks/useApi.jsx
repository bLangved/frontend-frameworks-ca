import { useState, useEffect } from "react";

/**
 * @description API hook
 */
function useApi(url) {
  const [data, setData] = useState({ data: [], meta: {} });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let isMounted = true; // To prevent state update if the component is unmounted

    async function getData() {
      if (!isMounted) return;

      try {
        setIsLoading(true);
        setIsError(false);
        const fetchedData = await fetch(url);
        const json = await fetchedData.json();
        if (isMounted) {
          setData(json);
          // console.log(json);
        }
      } catch (error) {
        if (isMounted) {
          console.log(error);
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
