import { useState } from 'react';

import reactLogo from '../../../assets/react.svg';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1>Counter Feature</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>count is {count}</button>
    </>
  );
}
