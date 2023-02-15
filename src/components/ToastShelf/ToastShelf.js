import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ deleteToast, toastList }) {
  return (
    <ol className={styles.wrapper}>
      {toastList.length > 0 &&
        toastList.map(({ variant, message, id }) => {
          return (
            <li className={styles.toastWrapper} key={id}>
              <Toast variant={variant} deleteToast={deleteToast}>
                {message}
              </Toast>
            </li>
          );
        })}
    </ol>
  );
}

export default ToastShelf;
