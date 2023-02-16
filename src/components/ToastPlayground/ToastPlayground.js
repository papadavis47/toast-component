import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf';
import { ToastContext } from '../ToastProvider';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const {
    deleteToast,
    message,
    toastList,
    createToast,
    setToastList,
    setMessage,
    setVariant,
    variant,
  } = React.useContext(ToastContext);

  function handleSubmit(event) {
    event.preventDefault();
    const newToast = createToast();
    setToastList([...toastList, newToast]);
    setMessage('');
    setVariant('notice');
  }

  // const textAreaRef = React.useRef();

  // Will come back to this
  // React.useEffect(() => {
  //   function handleEnterKey(event) {
  //     if (event.code === 'Enter') {
  //       handleSubmit();
  //     }
  //   }
  //   textAreaRef.current.addEventListener('onKeyDown', handleEnterKey);
  // });

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
