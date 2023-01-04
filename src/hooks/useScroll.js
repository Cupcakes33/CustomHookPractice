import { useState, useEffect } from "react";

/**
 * 
 * @returns {object} state : window를 기준으로 scroll X, Y를 계산하여 보여주는 객체를 리턴합니다.
 */

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });

  const onScroll = () => {
    setState({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return state;
};

export default useScroll;
