import React from 'react';
import styles from './GlobalComponentStyles.module.css';

type Props = {
  registerLink: string;
  signInLink: string;
};

export default function RegisterLogin({ registerLink, signInLink }: Props) {
  return (
    <div>
      <button
        className={styles.registerButton}
        onClick={() => window.open(registerLink, '_blank')}
      >
        Register
      </button>
      <button
        className={styles.signInButton}
        onClick={() => window.open(signInLink, '_blank')}
      >
        Sign In
      </button>
    </div>
  );
}
