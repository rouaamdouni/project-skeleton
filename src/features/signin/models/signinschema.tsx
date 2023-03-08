import { z } from 'zod';

type LoginArgs = {
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

export { SignInSchema };
export type { LoginArgs };
