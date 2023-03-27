import 'bootstrap/dist/css/bootstrap.min.css';
import './../i18n'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
