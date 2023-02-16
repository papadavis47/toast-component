import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
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
