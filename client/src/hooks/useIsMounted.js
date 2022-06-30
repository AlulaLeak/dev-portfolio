import { useRef, useEffect } from "react";

const useIsMounted = (time) => {
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    setTimeout(() => {
      return () => (isMounted.current = false);
    }, 2000);
  }, []);
  return isMounted;
};

export default useIsMounted;
