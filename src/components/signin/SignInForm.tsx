import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const SignInSchema = z.object({
  email: z
    .string()
    // .email()
    .trim()
    // .refine(
    //   (value) => /^[a-zA-Z]+\s+[a-zA-Z]+$/.test(value),
    //   'Please enter your email address'
    // )
    .refine(
      (value) => /^[a-zA-Z]+[-'s]?[a-zA-Z0-9 ]+$/.test(value),
      'email should contain only alphabets and numbers'
    ),
  password: z
    .string()
    .trim()
    // .min(8, 'Must be at least 8 characters in length')
    .refine((value) => /.*[A-Z]./.test(value), 'One uppercase character')
    .refine((value) => /.*[a-z].*/.test(value), 'One lowercase character')
    .refine((value) => /.*\\d.*/.test(value), 'One number')
    .refine(
      (value) => /.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*/.test(value),
      'One special character'
    ),
});
function SignInForm() {
  const {
    formState: { errors },
    register,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'all',
    resolver: zodResolver(SignInSchema),
  });

  return (
    <div className="bg-fancyBlue flex ">
      <div className="flex flex-col items-center">
        <input
          type="text"
          className="min-w-full"
          placeholder="email"
          {...register('email')}
        />
        {errors.email && (
          <p className="text-red-500 inline-flex">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col items-center">
        <input
          type="text"
          className="min-w-full"
          placeholder="password"
          {...register('password')}
        />
        {errors.password && (
          <p className="text-red-500 inline-flex">{errors.password.message}</p>
        )}
      </div>
    </div>
  );
}
export default SignInForm;
