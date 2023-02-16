import React from 'react';
import { AlertOctagon, AlertTriangle, CheckCircle, Info, X } from 'react-feather';

import { ToastContext } from '../ToastProvider';
import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ color, children, id }) {
  const { deleteToast } = React.useContext(ToastContext);
  const IconComponent = ICONS_BY_VARIANT[color];
  return (
    <div className={`${styles.toast} ${styles[color]}`}>
      <div className={styles.iconContainer}>
        <IconComponent size={24} />
      </div>
      <VisuallyHidden>{`${color} message`}</VisuallyHidden>
      <p className={styles.content}>{children}</p>
      <button
        aria-label='Dismiss message'
        aria-live='off'
        className={styles.closeButton}
        onClick={() => deleteToast(id)}
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
