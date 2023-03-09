import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { I18nextProvider } from 'react-i18next';
import { SignIn, PageNotFound } from './pages/index';
import i18next from './config/language/18nApi';
import { NotLoggedUserRoute, LoggedUserRoute } from './routes/index';
import SignupPage from './features/authentication/signup/components/Signup';
import ProfilePage from './features/authentication/profile/Profile';

export default function App() {
  return (
    // <GoogleOAuthProvider clientId="310175608975-sdq2rr4vqmpi6ttlvhh8257uu7h5stgj.apps.googleusercontent.com">
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <Routes>
          <Route element={<NotLoggedUserRoute />}>
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignupPage />} />
          </Route>
          <Route element={<LoggedUserRoute />}>
            <Route path="/" element={<ProfilePage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
    // </GoogleOAuthProvider>
  );
}
