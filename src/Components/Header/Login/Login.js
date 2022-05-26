import React, { useRef } from 'react';
import { Nav } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../OtherPages/PageNotFound/Loading';
import SocialLogin from '../SocialLogin';

const Login = () => {
  //input data value receive from user
  const emailRef = useRef('');
  const passwordRef = useRef('');
   const [sendPasswordResetEmail, sendingRest, errorRest] = useSendPasswordResetEmail(
       auth
     );
   const navigate = useNavigate();
   const location = useLocation();
   let from = location.state?.from?.pathname || "/";
  //email and password firebase hooks -- new user create
    const [
           signInWithEmailAndPassword,
           user,
           loading,
           error,
         ] = useSignInWithEmailAndPassword(auth);
     
     
      
   
       let errorAce;
         if(error || errorRest ){
             errorAce = error?.message || errorRest?.message;
         }
   
       if(loading || sendingRest){
  return <Loading></Loading>
       }
   
   
       if(user){
             navigate(from, { replace: true });
       }
   
       const handleFormSubmit = async e =>{
           e.preventDefault();  
           const email = emailRef.current.value;
           const password = passwordRef.current.value;

           if(!error || !errorRest ){
             signInWithEmailAndPassword(email, password);
       
           }
           
    else{
       toast.warning(`You have some error like ${errorAce}`)
    }
         }
   
       return (
           <div className='container'>
   
            <p className='font-body text-danger text-center pt-2'>   {
                   errorAce
               }</p>
   
       <div className='bg-light font-title text-center py-3 rounded'>
         <span className='bg-danger text-white fw-bold rounded-pill px-2 py-1'>Log In Here</span> <hr />
       <form onSubmit={handleFormSubmit}>
     
   
     <div className='mb-2'>
         <label htmlFor="email">Email</label> <br />
         <input ref={emailRef} required type="email" name="email" id="" placeholder='Email'/>
     </div>  
          
       <div className='mb-2'>
         <label htmlFor="password">Password</label> <br />
         <input ref={passwordRef} required type="password" name="password" id="" placeholder='Password'/>
     </div> 
 
 
     <input className='mb-2 btn btn-primary' type="submit" value="Login" />  
          
     </form>  

     <div>
       <span className='d-flex align-items-center justify-content-center'>Have You need a New Account? <Nav.Link className='text-danger bg-warning rounded-pill ms-1' as={Link} to="/signup">Sign Up</Nav.Link></span>
     <h5 className='fs-6 my-2'> Do you forget Your password?   <button className='ms-3 p-2 btn btn-danger'
     onClick={async () => {
         const email = emailRef.current.value;
       await sendPasswordResetEmail(email);
        toast.warning('Sent email for Reset Password');
     }}
   >
     Forget password
   </button></h5>
     
     </div>     
     <hr />
<div>
    <h6>Login By using Socail Account</h6>
    <SocialLogin></SocialLogin>
</div>
       </div>
           </div>
       );
};

export default Login;