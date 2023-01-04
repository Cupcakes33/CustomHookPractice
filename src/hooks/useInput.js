import { useState } from "react";

/**
 *
 * @param { any } initailValue : useInput 의 초기값을 설정합니다.
 * @param { function } validator : input의 value를 검증할 함수를 설정합니다.
 * ex) const maxlen = value => value.length > 10
 * @returns {Object}
 * value : useInput Hook을 통해 validator가 적용된 value 입니다.
 * onChange : value를 change 할 수 있는 함수를 제공합니다.
 */

const useInput = (initailValue, validator) => {
  const [value, setValue] = useState(initailValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

export default useInput;
