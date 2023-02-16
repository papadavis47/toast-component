import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  const { toastList } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper} role='region' aria-live='assertive' aria-label='Notification'>
      {toastList?.length > 0 &&
        toastList.map(({ color, message, id }) => {
          return (
            <li className={styles.toastWrapper} key={id}>
              <Toast color={color} id={id}>
                {message}
              </Toast>
            </li>
          );
        })}
    </ol>
  );
}

export default ToastShelf;
