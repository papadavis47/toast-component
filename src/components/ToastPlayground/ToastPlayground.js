import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from '../Toast';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variantOption, setVariantOption] = React.useState('notice');
  const [showToast, setShowToast] = React.useState(false);

  function toggleToast() {
    setShowToast(!showToast);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>
      {showToast && (
        <Toast toggleToast={toggleToast} variantOption={variantOption} showToast={showToast}>
          {message}
        </Toast>
      )}

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
                    checked={variantOption === option}
                    onChange={(event) => setVariantOption(event.target.value)}
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
            <Button onClick={toggleToast}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
