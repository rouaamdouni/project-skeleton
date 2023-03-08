import { useForm } from "react-hook-form";


import { ErrorMessage } from '@hookform/error-message';

import './index.css'


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
      
      
        </form>
      </div>
  
   </div>
      
  
    


  )
}