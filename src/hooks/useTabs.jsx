import { useState } from "react";

/**
 *
 * @param {Number} initialTab : 최초에 보여줄 탭의 인덱스를 설정합니다.
 * @param {Object} allTabs : 인덱스에 따라 달라질 객체 데이터를 설정합니다.
 * @returns {Object}
 * currentItem : 현재 선택된 index에 해당하는 item의 값을 가져옵니다.
 * changeItem : index를 setState 할 수 있는 함수를 제공합니다.
 */

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

export default useTabs;
