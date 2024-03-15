import { useState, useEffect } from "react";

function useApiSearch(baseApiUrl, searchQuery) {
  const [data, setData] = useState({ data: [], meta: {} });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      if (!isMounted) return;

      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetch(`${baseApiUrl}&search=${searchQuery}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (isMounted) {
          const items = Array.isArray(result.data)
            ? result.data
            : [result.data];
          const filteredData = items.filter((item) =>
            item.title.toLowerCase().startsWith(searchQuery.toLowerCase())
          );
          setData({ ...result, data: filteredData });
        }
      } catch (error) {
        if (isMounted) {
          console.error("Fetching error:", error);
          setIsError(true);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    if (searchQuery) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [baseApiUrl, searchQuery]);

  return { data: data.data, isLoading, isError };
}

export default useApiSearch;
