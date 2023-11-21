import { InputHTMLAttributes } from 'react';

import { clsx } from 'clsx';

import styles from './TextField.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
}

// TODO error等のcolorは別でやる
export function TextField({ label, helperText, error = false, ...props }: Props) {
  return (
    <div className={clsx(styles.textField)}>
      <label className={clsx(styles.label)}>{label}</label>
      <input className={clsx(props.className, styles.input)} {...props} />
      {error && <p className={styles.helperText}>{helperText}</p>}
    </div>
  );
}
