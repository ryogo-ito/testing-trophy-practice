import { useState } from 'react';

import reactLogo from '../../../assets/react.svg';

import styles from './Counter.module.css';

export function Counter() {
  // TODO リフトアップするか考える
  const [count, setCount] = useState(0);

  return (
    <div className={styles.module}>
      <a href="https://react.dev" target="_blank" className={styles.link}>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1>Counter Feature</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)} className={styles.button}>
        count is {count}
      </button>
    </div>
  );
}
