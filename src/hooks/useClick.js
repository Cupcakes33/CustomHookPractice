import { useRef, useEffect } from "react";

/**
 * 
 * @param {function} onClick : ref로 참조한 요소에게 클릭했을 시 실행시킬 함수를 정의합니다.
 * @returns {ref} 참조할 대상을 지정합니다.
 */

const useClick = (onClick) => {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (typeof onClick !== "function") {
      return;
    }

    if (element) {
      element.addEventListener("click", onClick);
    }
    return () => {
      if (element) {
        element.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);
  return ref.current;
};

export default useClick;
