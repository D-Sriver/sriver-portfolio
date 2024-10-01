import type { AppProps } from 'next/app';
import '../src/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window !== 'undefined') {
    const originalError = console.error;
    console.error = (...args) => {
      if (args[0].includes('Extra attributes from the server')) {
        return;
      }
      originalError.call(console, ...args);
    };
  }

  return (
    <Component {...pageProps} />
  );
}

export default MyApp;