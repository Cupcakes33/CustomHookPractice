import { useRef, useEffect } from "react";

/**
 *
 * @param {function} onClick : ref로 참조한 요소에게 클릭했을 시 실행시킬 함수를 정의합니다.
 * @returns {ref} 참조할 대상을 지정합니다.
 */

const useEventRef = (fucntion, event) => {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (typeof fucntion !== "function") {
      return;
    }

    if (element) {
      element.addEventListener(event, fucntion);
    }
    return () => {
      if (element) {
        element.removeEventListener(event, fucntion);
      }
    };
  }, [fucntion, event]);
  return ref;
};

export default useEventRef;
