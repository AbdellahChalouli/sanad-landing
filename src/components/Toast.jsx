import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const Toast = forwardRef((_, ref) => {
  const [state, setState] = useState({ visible: false, msg: '', error: false });

  useImperativeHandle(ref, () => ({
    show(msg, isError = false) {
      setState({ visible: true, msg, error: isError });
      setTimeout(() => setState(s => ({ ...s, visible: false })), 3500);
    },
  }));

  return (
    <div className={`toast${state.visible ? ' toast-show' : ''}${state.error ? ' toast-error' : ''}`} role="alert">
      {state.error ? <FiAlertCircle /> : <FiCheckCircle />}
      {state.msg}
    </div>
  );
});

export default Toast;
