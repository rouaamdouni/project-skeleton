import { SignInContent, SignInForm } from '../components/signin/index';
import background from '../assets/images/bg/background.png';

export default function SignIn() {
  return (
    <div
      className="bg-fixed bg-no-repeat bg-cover bg-center relative h-screen flex flex-col"
      style={{ backgroundImage: `url(${background})` }}
    >
      <SignInContent />
      <SignInForm />
    </div>
  );
}
