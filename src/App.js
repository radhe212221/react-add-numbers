import React, { useState, useRef } from 'react';
import './style.css';

export default function App() {
  const [key, setkey] = useState('');
  const a = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const op = ['+', '-', '*', '/', '=', ','];
  const maths = ['sqrt', 'square', 'sin', 'cos', 'random', 'min', 'max', 'tan'];
  const ref = useRef();
  const hc1 = (e) => {
    const text = e.target.innerHTML.trim();
    if (text === 'Delete') {
      ref.current.value = '';
    } else {
      if (text === '=') {
        try {
          ref.current.value = eval(ref.current.value);
        } catch (e) {
          ref.current.value = 'invalid';
        }
      } else {
        ref.current.value += text;
      }
    }
  };
  const hc2 = (e) => {
    const text = e;
    if (text === 'Delete') {
      ref.current.value = '';
    } else {
      if (text === '=') {
        try {
          ref.current.value = eval(ref.current.value);
        } catch (e) {
          ref.current.value = 'invalid';
        }
      } else {
        ref.current.value += text;
      }
    }
  };

  const p1 = (e) => {
    // console.log(e.key);
    if ([...a, ...op, 'Delete'].includes(e.key)) {
      setkey(e.key);
      hc2(e.key);
    }
  };
  const hc3 = (e) => {
    ref.current.value = eval(e);
  };

  const boot = () => {
    window.addEventListener('keyup', p1);
  };
  React.useEffect(boot, []);

  return (
    <div>
      <h1>calculator</h1>
      <div className="top">
        <input ref={ref} readOnly placeholder="result" type="text" />
        <button className={key === 'Delete' ? 'a' : ''} onClick={hc1}>
          Delete
        </button>
      </div>
      <div className="calc">
        {a.map((x) => (
          <button className={key === x ? 'a' : ''} onClick={hc1}>
            {x}
          </button>
        ))}
        {op.map((x) => (
          <button className={key === x ? 'a' : ''} onClick={hc1}>
            {x}
          </button>
        ))}
        {maths.map((x) => (
          <button
            className={key === x ? 'a' : ''}
            onClick={() => hc3(`Math.${x}(${ref?.current?.value})`)}
          >
            {x}
          </button>
        ))}
      </div>
    </div>
  );
}
