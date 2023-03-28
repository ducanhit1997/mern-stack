import store from '@/redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <>
        <Component {...pageProps} />
        <ToastContainer 
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick 
        />
      </>
    </Provider>
  );
}