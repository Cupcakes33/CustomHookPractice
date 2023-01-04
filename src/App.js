import { useRef, useEffect, useState } from "react";

function App() {
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
  const sayHello = () => {
    console.log("say hello");
  };
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <h2>useState</h2>
      <input ref={title}></input>
    </div>
  );
}

export default App;
