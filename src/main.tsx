import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import i18next from './config/language/18nApi';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GoogleOAuthProvider clientId="310175608975-sdq2rr4vqmpi6ttlvhh8257uu7h5stgj.apps.googleusercontent.com">
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </GoogleOAuthProvider>
);
