import { useEffect, useState } from "react";

export const useDebouncedValue = <T>(value: T, timeout: number = 0) => {
  const [debounced, setDebounced] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value);
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [value, timeout]);

  return debounced;
};
