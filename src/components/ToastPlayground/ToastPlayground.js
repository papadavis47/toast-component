import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');
  const [toastList, setToastList] = React.useState([]);

  function createToast() {
    return { id: Math.random(), variant, message };
  }

  function deleteToast(id) {
    const filteredToasts = toastList.filter((item) => id !== item.id);
    setToastList([...filteredToasts]);
  }

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
      <ToastShelf toastList={toastList} deleteToast={deleteToast} />
      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label htmlFor='message' className={styles.label} style={{ alignSelf: 'baseline' }}>
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
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
