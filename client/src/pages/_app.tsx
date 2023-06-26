import React, { useCallback, useEffect } from 'react';
import store from '@/redux/store';
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { useIdleTimer } from 'react-idle-timer';
import Cookies from 'js-cookie';
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.css';

const reloadSession = (e: any) => {
  if (e.key === 'sessionUuid') {
    window.location.reload();
  }
};

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    window.addEventListener('storage', reloadSession);
    return function cleanup() {
      window.addEventListener('storage', reloadSession);
    };
  });

  const handleOnIdle = useCallback(() => {
    const tokenLogin = Cookies.get("TOKEN_KEY");
    if (tokenLogin) {
      Cookies.remove("TOKEN_KEY");
      window.location.reload();
    }
  }, []);

  useIdleTimer({
    timeout: 20000,
    onIdle: handleOnIdle
  });

  return (
    <Provider store={store}>
      <>
        <Component {...pageProps} />
      </>
    </Provider>
  );
}