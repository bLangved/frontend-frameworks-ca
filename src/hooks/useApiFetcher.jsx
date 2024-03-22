import useApi from "./useApi";

function useApiFetcher(
  url,
  loadingComponent = <div className="loader"></div>,
  errorComponent = <div>Error...</div>
) {
  const { data, isLoading, isError } = useApi(url);

  if (isLoading) {
    return { customComponent: loadingComponent };
  }
  if (isError) {
    return { customComponent: errorComponent };
  }

  return { data, customComponent: null };
}
export default useApiFetcher;
