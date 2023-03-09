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
  Goooglebtn,
} from './index';
import { SignInSchema, ValidationSchema } from '../models/signinschema';

export default function LoginForm() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ValidationSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'all',
    resolver: zodResolver(SignInSchema),
  });

  const { handleLogin } = useAuth();

  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    const loginToken = await logUser(state);
    if (loginToken.status === 'user_not_logged') {
      toast.error(loginToken.msg, { position: 'top-right' });
      console.log(data);
      return;
    }
    handleLogin(loginToken.accessToken);
    console.log(data);
  };
  // const onSubmit: SubmitHandler<ValidationSchema> = (data) => console.log(data);

  return (
    <div className="login-form-wrapper">
      <div className="login-form-content">
        <h1 className="sign-in-header">Sign In</h1>

        <div className="buttons-wrapper">
          <Goooglebtn />
          <LinkedinBtn />
        </div>
        <div className="separator">
          <hr className="line" />
          <span>Or</span>
          <hr className="line" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
          <CustomInput
            type="string"
            placeholder="Email"
            {...register('email')}
          />
          {errors.email && (
            <CustomErrors> {errors?.email.message} </CustomErrors>
          )}
          <CustomInput
            type="string"
            placeholder="Password"
            {...register('password')}
          />
          {errors.password && (
            <CustomErrors> {errors?.password.message} </CustomErrors>
          )}
          <div className="w-full pt-[8px] flex flex-col ">
            <a href="#" className="btn-link">
              Forgot your password?
            </a>
            <Button type="submit">
              <span>login</span>
            </Button>
            <p className="shaper">
              Not a shaper yet?{' '}
              <a href="#" className="btn-link2 ">
                Create your account
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
