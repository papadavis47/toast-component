import React from 'react';
import { AlertOctagon, AlertTriangle, CheckCircle, Info, X } from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ toggleToast, variantOption, children }) {
  const IconComponent = ICONS_BY_VARIANT[variantOption];
  return (
    <div className={`${styles.toast} ${styles[variantOption]}`}>
      <div className={styles.iconContainer}>
        <IconComponent size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button className={styles.closeButton}>
        <X size={24} onClick={toggleToast} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
