import React, { useState, useRef } from 'react';
import './style.css';

export default function App() {
  const [sum, setsum] = useState(0);
  const r1 = useRef();
  const r2 = useRef();
  const hc1 = () => {
    const x = +r1.current.value;
    const y = +r2.current.value;
    setsum(x + y);
  };
  const hc2 = () => {
    const x = +r1.current.value;
    const y = +r2.current.value;
    setsum(x - y);
  };
  const hc3 = () => {
    const x = +r1.current.value;
    const y = +r2.current.value;
    setsum(x * y);
  };
  const hc4 = () => {
    const x = +r1.current.value;
    const y = +r2.current.value;
    setsum(x / y);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <input placeholder="number" min={1} max={10000} type="number" ref={r1} />
      <input placeholder="number" min={1} max={10000} type="number" ref={r2} />

      <button onClick={hc1}>+</button>
      <button onClick={hc2}>-</button>
      <button onClick={hc3}>*</button>
      <button onClick={hc4}>/</button>
      <h2>result: {sum}</h2>
    </div>
  );
}
