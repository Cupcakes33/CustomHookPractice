/**
 *
 * @param {string} message : confirm messege 를 선업합니다.
 * @param {funtion} onConfirm : confirm 이 true 일 경우 실행할 함수를 할당합니다.
 * @param {funtion} onReject : confirm 이 false 일 경우 실행할 함수를 할당합니다.
 * @returns
 */

const useConfirm = (message = "", onConfirm, onReject) => {
  if (!onConfirm && typeof callback !== "function") {
    return;
  }
  if (!onReject && typeof onReject !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onReject();
    }
  };
  return confirmAction;
};

export default useConfirm;
