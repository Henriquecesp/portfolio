import React from "react";
import styles from './Button.module.css'

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {
  href?: string;
  className?: string;
}

export const ButtonPrimary: React.FC<ButtonProps> = props => {
  const { children, href, className, ...rest } = props;

  return (
    <div className={`${styles.container} ${className}`}>
      <button {...rest} className={styles.white}>
        <p>
          <span className={styles.bg} />
          <span className={styles.base} />
          <span className={styles.text}>
            {children}
          </span>
        </p>
      </button>
    </div>
  )
}