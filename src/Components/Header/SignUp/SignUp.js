import React, { useRef } from 'react';
import { Nav } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../OtherPages/PageNotFound/Loading';
import SocialLogin from '../SocialLogin';

const SignUp = () => {
  //input data value receive from user
  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPassworRef = useRef('');

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
    //email and password firebase hooks -- new user create
 
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
     
  
    
    let errorAce;
      if(error || updateError ){
          errorAce = error?.message || updateError?.message;
      }
      // console.log(errorAce)

    if(loading || updating){
        return <Loading></Loading>
    }

    if(user){
     //navigate korte hobe
     navigate(from, { replace: true });
    }


    const handleFormSubmit = async e =>{
        e.preventDefault();  
        const displayName = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const surePass = confirmPassworRef.current.value;
        
        if(password === surePass) {

          if(!error){
           if(!updateError){
            await  createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName});
            alert('Your Profile Created');
            window.location.reload();
           }
           else{
            
            alert(`${errorAce}`);
            window.location.reload();
           }
         
          }
         else{
          alert(`You have already signup, Please Login`);
          window.location.reload();

         }
       
        }
        else{
          alert(`Password does not match`);
          window.location.reload();

        }
      }

    return (
        <div className='container'>

<p className='font-body text-danger text-center pt-2'>   {
                    errorAce
                }</p>

   <div className='bg-light text-center py-3 font-title rounded'>
   <span className='text-white bg-danger fw-bold rounded-pill px-2 py-1'>Sign Up Here</span> <hr />
   <form onSubmit={handleFormSubmit}>
  

  <div className='mb-2'>
      <label htmlFor="displayName">Your Full Name</label> <br />
      <input ref={nameRef} required type="text" name="displayName" id="" placeholder='Your Name' autoComplete='off'/>
  </div>  

  <div className='mb-2'>
      <label htmlFor="email">Email</label> <br />
      <input ref={emailRef} required type="email" name="email" id="" placeholder='Email' autoComplete='off'/>
  </div>  
       
    <div className='mb-2'>
      <label htmlFor="password">Password</label> <br />
      <input ref={passwordRef} required type="password" name="password" id="" placeholder='Password' autoComplete='off'/>
  </div> 

    <div className='mb-2'>
      <label htmlFor="confirm-password">Confirm Your Password</label> <br />
      <input ref={confirmPassworRef} required type="password" name="confirm-password" id="" placeholder='Password' autoComplete='off'/>
  </div>  

  <input className='mb-2 btn btn-primary' type="submit" value="Sign Up" />  
       
  </form>       
 
 {/* in the below the component for social LogIn */}
 <span className='d-flex align-items-center justify-content-center'>Have You already an Account? <Nav.Link className='text-danger bg-warning fw-bold rounded-pill ms-1'  as={Link} to="/login">Log In</Nav.Link></span>
 <hr />
<div>
    <h6>Login By using Socail Account</h6>
    <SocialLogin></SocialLogin>
</div>
   </div>
        </div>
    );
};


export default SignUp;