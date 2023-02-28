import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './language/18nApi'
import { I18nextProvider } from 'react-i18next';
import i18next from './language/18nApi';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <I18nextProvider i18n={i18next}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </I18nextProvider>
)
