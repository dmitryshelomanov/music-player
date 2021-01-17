import { useEffect, useRef } from "react";

export function useResize(callback) {
  const callbackRef = useRef(callback);

  callbackRef.current = callback;

  useEffect(() => {
    function handler() {
      callbackRef.current({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);
}
