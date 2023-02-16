import React from 'react';

export const ToastContext = React.createContext();

export const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');
  const [toastList, setToastList] = React.useState([]);

  React.useEffect(() => {
    function dismissAllToasts(event) {
      if (event.code === 'Escape') {
        setToastList([]);
      }
    }

    window.addEventListener('keydown', dismissAllToasts);
    return () => {
      window.removeEventListener('keydown', dismissAllToasts);
    };
  }, []);

  function createToast() {
    return { id: Math.random(), color: variant, message };
  }

  function deleteToast(id) {
    const filteredToasts = toastList.filter((item) => id !== item.id);
    setToastList([...filteredToasts]);
  }

  return (
    <ToastContext.Provider
      value={{
        toastList,
        message,
        setMessage,
        variant,
        setVariant,
        createToast,
        deleteToast,
        setToastList,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
