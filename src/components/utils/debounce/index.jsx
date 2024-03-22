import { useCallback } from "react";
import { debounce } from "lodash";

/**
 * Creates a debounced function that updates state (using debounce from lodash library).
 * @param {Function} setStateFunction The state setter function from useState.
 * @param {number} delay The debounce delay in milliseconds.
 * @returns {Function} A debounced function that can be used to update state.
 */
function useDebouncedState(setStateFunction, delay) {
  return useCallback(
    debounce((value) => {
      setStateFunction(value);
    }, delay),
    [setStateFunction, delay]
  );
}

export default useDebouncedState;
