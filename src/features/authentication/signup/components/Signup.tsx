import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register } from '../../services/api/user';
import Button from './Button';
import CustomInput from './CustomInput';

export default function SignupPage() {
  const navigate = useNavigate();
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      fullName: '',
      password: '',
      email: '',
    },
    onSubmit: async (state) => {
      const createUserResponse = await register(state);
      if (createUserResponse.status === 'user_not_created') {
        console.log(createUserResponse.msg);
        toast.error(createUserResponse.msg, { position: 'top-right' });
        return;
      }
      navigate('/login');
    },
  });

  return (
    <div className="mt-10 flex w-full justify-center">
      <div className="flex w-full max-w-2xl flex-col items-center gap-4 border border-gray-50 bg-gray-50 py-5 px-7">
        <h1 className="w-full max-w-xs text-center text-lg font-bold capitalize text-gray-900">
          create an account to get started
        </h1>
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-2">
          <CustomInput
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Your email address"
            name="email"
          />
          <CustomInput
            type="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Your password"
            name="password"
          />
          <CustomInput
            type="text"
            value={values.fullName}
            onChange={handleChange}
            placeholder="Your full name"
            name="fullName"
          />
          <Button type="submit">
            <span className="text-sm font-bold capitalize text-purple-100">
              create and account
            </span>
          </Button>
        </form>
      </div>
    </div>
  );
}
