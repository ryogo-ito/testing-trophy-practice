import { ButtonHTMLAttributes } from 'react';

import { clsx } from 'clsx';

import styles from './Button.module.css';

const sizes = {
  sm: styles.small,
  md: styles.medium,
  lg: styles.large,
};

const variants = {
  primary: styles.primary,
  secondary: styles.secondary,
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
  className?: string;
}

export function Button({ children, size = 'md', variant = 'primary', className, ...props }: Props) {
  return (
    <button
      {...props}
      className={clsx(styles.btn, styles.ripple, sizes[size], variants[variant], className)}
    >
      {children}
    </button>
  );
}
