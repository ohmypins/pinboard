import './styles/globals.css';
import type { AppProps } from 'next/app';

function Pinboard({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default Pinboard;
