import { useEffect } from "react";

/**
 *
 * @param {function} onBefore : event가 감지되었을 때 실행할 함수를 할당합니다.
 * @param {string} event : 감지할 event를 할당합니다. 기본값은 "mouseleave" 입니다.
 */

const useBeforeLeave = (onBefore, event = "mouseleave") => {
  const handle = () => {
    onBefore();
  };
  useEffect(() => {
    if (typeof event !== "string") {
      return;
    }
    if (typeof onBefore !== "function") {
      return;
    }
    document.addEventListener(event, handle);
    return () => document.removeEventListener(event, handle);
  });
};

export default useBeforeLeave;
