import React from 'react';
import styles from './GlobalComponentStyles.module.css';

type Props = {
  link?: string;
  text: string;
  type: 'register' | 'login' | 'logout' | 'profile' | 'settings' | 'help' | 'free-trial' | 'learn-more';
};

export default function ReusableButton({ link, text }: Props) {
  return (
    <div className={styles.authButtons}>
      <button
        className={styles.registerButton}
        onClick={() => window.open(link, '_blank')}
      >{text}
      </button>
    </div>
  );
}
