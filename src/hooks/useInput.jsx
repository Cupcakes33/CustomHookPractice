import { useState } from "react";

/**
 * 
 * @param { any } initailValue : useInput 의 초기값을 설정합니다.
 * @param { function } validator : input의 value를 검증할 함수를 설정합니다.
 * ex) const maxlen = value => value.length > 10
 * @returns {}
 *  
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
