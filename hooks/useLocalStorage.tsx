import { useState, useEffect } from "react";
import localforage from "localforage";

const useLocalForage = (key: string, initialValue: string) => {
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    const loadStoredValue = async () => {
      try {
        const value = await localforage.getItem(key);
        if (value !== null) {
          setStoredValue(value as string);
        }
      } catch (error) {
        console.error("Error loading data from localForage:", error);
      }
    };

    loadStoredValue();
  }, [key]);

  const setValue = async (value: string) => {
    try {
      setStoredValue(value);
      await localforage.setItem(key, value);
    } catch (error) {
      console.error("Error saving data to localForage:", error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalForage;