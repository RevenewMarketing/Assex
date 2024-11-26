import React from 'react';
import styles from './GlobalComponentStyles.module.css';

type Props = {
  registerLink: string;
  signInLink: string;
  text: string;
};

export default function RegisterLoginBtns({ registerLink, signInLink, text }: Props) {
  return (
    <div className={styles.authButtons}>
      <button
        className={styles.registerButton}
        onClick={() => window.open(registerLink, '_blank')}
      >{text}
      </button>
   
    </div>
  );
}
