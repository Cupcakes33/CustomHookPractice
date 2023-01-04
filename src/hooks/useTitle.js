import { useEffect, useState } from "react";

/**
 *
 * @param {String} initialTitle : 변경할 타이틀을 입력합니다.
 * @returns {funtion} title의 set 함수를 리턴합니다.
 * 
 */

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

export default useTitle;
