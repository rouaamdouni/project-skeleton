import background from '../assets/images/bg/background.png';
import {
  ContentContainer,
  LoginForm,
} from '../features/signin/components/index';

export default function SignIn() {
  return (
    <div
      className="bg-fixed bg-no-repeat bg-cover bg-center relative h-screen flex flex-col"
      style={{ backgroundImage: `url(${background})` }}
    >
      <ContentContainer />
      <LoginForm />
    </div>
  );
}
