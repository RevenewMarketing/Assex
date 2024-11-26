import React from 'react';
import styles from './GlobalComponentStyles.module.css';

type Props = {
  link?: string;
  text: string;
  type: 'register' | 'sign-in' | 'logout' | 'profile' | 'settings' | 'help' | 'free-trial' | 'learn-more';
};

export default function ReusableButton({ link, text, type }: Props) {
  return (
      <button
      style={{
        backgroundColor: type === 'register' ? '#19BC9C' : 
        type === 'sign-in' ? '#F4F6F7' :
        type === 'logout' ? '#FF6347' :
        type === 'profile' ? '#FFA07A' :
        type === 'settings' ? '#FF7F50' :
        type === 'help' ? '#FFA500' :
        type === 'free-trial' ? '#FFD700' :
        type === 'learn-more' ? '#FF4500' : '#FF6347',
        color: '#000'
      }}
        className={styles.registerButton}
        onClick={() => window.open(link, '_blank')}
      >{text}
      </button>
   
  );
}
