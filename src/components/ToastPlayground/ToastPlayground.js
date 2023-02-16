import React from 'react';

import Button from '../Button';
import { VARIANT_OPTIONS } from '../ToastProvider';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf';
import { ToastContext } from '../ToastProvider';

function ToastPlayground() {
  const { message, toastList, setMessage, setVariant, variant, createToast, setToastList } =
    React.useContext(ToastContext);

  function handleSubmit(event) {
    event.preventDefault();
    const newToast = createToast();
    setToastList([...toastList, newToast]);
    setMessage('');
    setVariant('notice');
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf />
      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label htmlFor='message' className={styles.label} style={{ alignSelf: 'baseline' }}>
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                // ref={textAreaRef}
                onChange={(event) => setMessage(event.target.value)}
                id='message'
                className={styles.messageInput}
                value={message}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((option, index) => {
                return (
                  <label htmlFor={`variant-${option}`} key={index}>
                    <input
                      id={`variant-${option}`}
                      type='radio'
                      name={option}
                      value={option}
                      checked={variant === option}
                      onChange={(event) => setVariant(event.target.value)}
                    />
                    {option}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
