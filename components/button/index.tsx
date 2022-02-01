import React from "react";
import styles from './Button.module.css'

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {
  href?: string;
}

export const ButtonPrimary: React.FC<ButtonProps> = props => {
  const { children, href, ...rest } = props;

  return (
    <div className={styles.container}>
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