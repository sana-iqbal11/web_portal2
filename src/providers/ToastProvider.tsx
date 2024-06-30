'use client';
import { ToastContainer } from 'react-toastify';

const ToastProvider = () => {
  return (
    <ToastContainer
    position="top-right"
    autoClose={5000} 
    hideProgressBar
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
      theme="dark"
    />
  );
};

export default ToastProvider;