import React, { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = slowFunction(number);
  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black"
  };

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <div>
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          テーマの変更
        </button>
        <div style={themeStyles}>{doubleNumber}</div>
      </div>
    </>
  );
}

function slowFunction(num) {
  console.log("calling slow Function");
  setTimeout(console.log("wait test1"), 10000);
  setTimeout(console.log("wait test2"), 10000);
  setTimeout(console.log("wait test3"), 10000);
  //本当は 10000000000
  for (let i = 0; i <= 10000; i++) {}
  return num * 2;
}
