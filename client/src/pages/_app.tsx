import 'bootstrap/dist/css/bootstrap.min.css'
import { I18nextProvider } from "react-i18next"
import i18n from './../i18n'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  );

}
