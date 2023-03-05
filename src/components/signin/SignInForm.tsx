import { SignInButtonGoogle, SignUpButtonLinkedin } from './index';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

type Inputs = {
  email: string;
  password: string;
};

const SignInSchema = z.object({
  email: z
    .string()
    .regex(/^[a-zA-Z]+\s+[a-zA-Z]+$/, 'Please enter your email address')
    .regex(
      /^[a-zA-Z]+[-'s]?[a-zA-Z0-9 ]+$/,
      'email should contain only alphabets and numbers'
    ),
  // .email()
  // .preprocess()
  // .trim()
  // .refine(
  //   (value) => /^[a-zA-Z]+\s+[a-zA-Z]+$/.test(value),
  //   'Please enter your email address'
  // )
  // .refine(
  //   (value) => /^[a-zA-Z]+[-'s]?[a-zA-Z0-9 ]+$/.test(value),
  //   'email should contain only alphabets and numbers'
  // )

  password: z
    .string()
    .trim()
    .min(8, 'Must be at least 8 characters in length')
    .refine((value) => /.*[A-Z]./.test(value), 'One uppercase character')
    .refine((value) => /.*[a-z].*/.test(value), 'One lowercase character')
    .refine((value) => /.*\\d.*/.test(value), 'One number')
    .refine(
      (value) => /.*[`~<>?,./!@#$%^&*()\\-_+="'|{}\\[\\];:\\\\]*/.test(value),
      'One special character'
    ),
});
function SignInForm() {
  const navigate = useNavigate();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'all',
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div
      className="shadow-lg bg-white rounded-md  hover:shadow-xl transition duration-300"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        height: '600px',
        width: '650px',
        position: 'absolute',
        left: '55%',
        top: '10%',
      }}
    >
      <div className="pt-[50px]">
        <h3 className=" font-bold text-darkBlue text-[28px] text-center ">
          {' '}
          Sign In{' '}
        </h3>
      </div>

      <div className="flex flex-row justify-between items-center py-[25px]">
        <SignInButtonGoogle />
        <SignUpButtonLinkedin />
      </div>
      <div className="flex items-center">
        <div className="border-t-2 border-b-1 border-[#D3D3D3] w-[220px] mx-[8px] ">
          {' '}
          {''}{' '}
        </div>
        <span className="text-[#D3D3D3]">Or</span>
        <div className="border-t-2 border-b-1 border-[#D3D3D3] w-[220px] mx-[8px] ">
          {' '}
          {''}{' '}
        </div>
      </div>
      {/* <div className="border-b-2 border-gray-500 w-full">{''}</div>; */}
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-between items-center  flex-col py-[55px]  "
        >
          <div className="flex flex-col  justify-between h-[60px]">
            <input
              type="text"
              className="w-[450px] border-[#D3D3D3] text-[13px] pl-[5px]	h-[38px] border-[1px] rounded-[3px]"
              placeholder="email"
              {...register('email')}
            />
            <div>
              {errors.email && (
                <p className=" text-fancyBlue text-left">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col  justify-between h-[60px]">
            <input
              type="text"
              className="w-[450px] border-[#D3D3D3] text-[13px] pl-[5px]	h-[38px] border-[1px] rounded-[3px] m-[5px]"
              placeholder="password"
              {...register('password')}
            />
            <div>
              {errors.password && (
                <p className="text-fancyBlue pl-[5px] text-left">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <p
              className=" text-right cursor-pointer text-darkBlue font-fontBold hover:border-darkBlue hover:border-b-2 hover:w-fit  "
              onClick={() => navigate('/forgotpassword')}
            >
              Forgot password ?
            </p>
          </div>
          <button
            type="submit"
            className="bg-yellow w-[130px] h-[40px]  text-darkBlue font-semibold rounded-[3px] mt-[20px] shadow-[-5px_11px_11px_4px_rgba(213,213,213,0.75)]"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
export default SignInForm;
