import '../styles/global.css'
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store';
import { ContactProvider } from '@/modules/contacts/context/contactsContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ContactProvider>
        <Component {...pageProps} />
      </ContactProvider>
    </Provider>
  );
}

export default MyApp;
