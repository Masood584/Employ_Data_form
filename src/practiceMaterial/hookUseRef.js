import React, { useEffect, useRef, useState } from "react";

function HookUseRef() {
  const storeH1Property = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const countRef = useRef(0);
  const buttonCount = useRef(0);
  console.log("buttonCount", buttonCount);
  const [inputValue, setInputValue] = useState("");
  console.log("storeHiProperty", storeH1Property);
  console.log("firstref", firstNameRef);
  console.log("lastref", lastNameRef);
  console.log("countRef", countRef.current);

  useEffect(() => {
    countRef.current = countRef.current + 1;
  });

  const handleHanding = () => {
    storeH1Property.current.style.color = "blue";
    storeH1Property.current.style.fontSize = "30px";
    storeH1Property.current.hidden = true;
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(firstNameRef.current.value + " " + lastNameRef.current.value);
    // console.log(firstNameRef.current, lastNameRef);
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
  };

  const handleIncrement = () => {
    console.log(buttonCount.current + 1, "jheyyyyyyyyyyyyyyyyyyyyyyyyyyy");
    buttonCount.current = buttonCount.current + 1;
  };

  return (
    <div>
      <h1 ref={storeH1Property}>Changing implement usinf useref</h1>
      <button onClick={handleHanding}>Click</button>
      <form onSubmit={handleForm}>
        <input ref={firstNameRef} placeholder="first name"></input>
        <br />
        <input ref={lastNameRef} placeholder="last name "></input>
        <br />
        <button>Submit Form</button>
      </form>
      <h2>Checking rendering</h2>
      <input
        placeholder="enter anything"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        // ref={countRef}
      />
      <h2>Render Counter:{countRef.current}</h2>
      <h3>Increment</h3>
      <button onClick={handleIncrement}>+</button>
      {buttonCount.current}
    </div>
  );
}

export default HookUseRef;
