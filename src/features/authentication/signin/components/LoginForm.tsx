<<<<<<< HEAD:src/features/authentication/signin/components/LoginForm.tsx
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import { zodResolver } from '@hookform/resolvers/zod';
import { logUser } from '../../services/api/user';
import { useAuth } from '../../services/contexts/Auth';
=======
import { useForm } from "react-hook-form";


import { ErrorMessage } from '@hookform/error-message';

import './index.css'


>>>>>>> 24f2810c8c2cd1a80c266d64286fcb945f6e0be1:src/features/signin/components/LoginForm.tsx
import {

  CustomErrors,
  CustomInput,
  LinkedinBtn,
  GoogleBtn,
} from './index';


export default function FormSignIn() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const onSubmit = (data:unknown) => console.log(data);
   

  return (
    
    <div className="login-form-wrapper">
    <div className="login-form-content">
                <h1 className="sign-in-header">Sign In</h1>
           
            <div className="buttons-wrapper">
        <GoogleBtn/>
        <LinkedinBtn/>
        
      </div>
      <div className="separator">
            <hr className="line" />
            <span>Or</span>
            <hr className="line" />
      </div>
       
       
             

<<<<<<< HEAD:src/features/authentication/signin/components/LoginForm.tsx
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
=======

  
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      
    <div className="Group">
      <input className ='input'type="email" placeholder="Email" 
        {...register("singleErrorInput", {
          required: "Please enter email"
        })}
      />
      <ErrorMessage className="CustomError"errors={errors} name="singleErrorInput" as="p" />

      
      
        
        <input className="input" type="password"   placeholder="Password" {...register("singleErrorInput2", {
          required: "Please enter password"
        })}/>
          <ErrorMessage className="err"errors={errors} name="singleErrorInput2" as="p" />
    
      
      
      </div> 
      <a href="#" className="btn-link">Forgot your password?</a>
      <button type="submit" className='btn'>Sign In</button>
      <p className='shaper'>Not a shaper yet? <a href ="#" className='btn-link2'>Create your account</a></p>
      
      
>>>>>>> 24f2810c8c2cd1a80c266d64286fcb945f6e0be1:src/features/signin/components/LoginForm.tsx
        </form>
      </div>
  
   </div>
      
  
    


  )
}