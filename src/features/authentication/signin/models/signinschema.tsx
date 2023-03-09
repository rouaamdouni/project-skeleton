import { z } from 'zod';

type LoginArgs = {
  email: string;
  password: string;
};

const SignInSchema = z.object({
  // email: z
  //   .string()
  //   .refine(
  //     (value) => /.^[a-zA-Z]+\s+[a-zA-Z]+$./.test(value),
  //     'Please enter your email address'
  //   )
  //   .refine(
  //     (value) => /.^[a-zA-Z]+[-'s]?[a-zA-Z0-9 ]+$./.test(value),
  //     'email should contain only alphabets and numbers'
  //   ),
  // password: z
  //   .string()
  //   .trim()
  //   .min(8, 'Must be at least 8 characters in length')
  //   .refine((value) => /.*[A-Z]./.test(value), 'One uppercase character')
  //   .refine((value) => /.*[a-z].*/.test(value), 'One lowercase character')
  //   .refine((value) => /.*\\d.*/.test(value), 'One number')
  //   .refine(
  //     (value) => /.*[`~<>?,./!@#$%^&*()\\-_+="'|{}\\[\\];:\\\\]*/.test(value),
  //     'One special character'
  //   ),
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Must be a valid email',
  }),
  password: z
    .string()
    .min(6, { message: 'Password must be atleast 8 characters' }),
});

export { SignInSchema };
export type { LoginArgs };
export type ValidationSchema = z.infer<typeof SignInSchema>;
