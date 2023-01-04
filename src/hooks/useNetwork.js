import { useState, useEffect } from "react";

/**
 * 
 * @param {function} onChange : online 혹은 offline 됐을 시 실행할 함수를 할당합니다.
 * @returns 
 */
const useNetWork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);

  return status;
};

export default useNetWork;
