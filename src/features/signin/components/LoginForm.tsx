import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import { logUser } from '../../services/api/user';
import { useAuth } from '../../services/contexts/Auth';
import {
  Button,
  CustomErrors,
  CustomInput,
  LinkedinBtn,
  GoogleBtn,
} from './index';
import { SignInSchema, LoginArgs } from '../models/signinschema';

export default function LoginForm() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<LoginArgs>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'all',
    resolver: zodResolver(SignInSchema),
  });

  const { handleLogin } = useAuth();

  const onSubmit: SubmitHandler<LoginArgs> = async (state) => {
    const loginToken = await logUser(state);
    if (loginToken.status === 'user_not_logged') {
      toast.error(loginToken.msg, { position: 'top-right' });
      return;
    }
    handleLogin(loginToken.accessToken);
    console.log(state);
  };

  return (
    <div className="login-form-wrapper">
      <div className="login-form-content">
        <h1 className="sign-in-header">Sign In</h1>

        <div className="buttons-wrapper">
          <LinkedinBtn />
          <LinkedinBtn />
        </div>
        <div className="separator">
          <hr className="line" />
          <span>Or</span>
          <hr className="line" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
          <CustomInput
            type="email"
            placeholder="Your email address"
            {...register('email')}
          />
          {errors.email && (
            <CustomErrors> {errors.email.message} </CustomErrors>
          )}
          <CustomInput
            type="password"
            placeholder="Your password"
            {...register('password')}
          />
          {errors.password && (
            <CustomErrors> {errors.password.message} </CustomErrors>
          )}
          <div className='w-full pt-[8px] pl-[30%] flex flex-col '>
            <a href="#" className="btn-link">
              Forgot your password?
            </a>
            <Button type="submit">
              <span>login</span>
            </Button>
            <p className="shaper">
              Not a shaper yet?{' '}
              <a href="#" className="btn-link2">
                Create your account
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
