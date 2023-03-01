import { Routes, Route } from 'react-router-dom';
import { Homepage, SignIn, SignUp, PageNotFound } from './pages/index';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
