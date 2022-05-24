import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../OtherPages/PageNotFound/Loading';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    let errorMessage;
    if(error){
        errorMessage = <h5>{error?.message}</h5>
    }
    if(loading){
        return <Loading></Loading>
    }

    if(user){
        navigate(from , {replace: true});
    }

    return (
        <div>
{
  <h5 className='text-danger'>{errorMessage}</h5>
}

 <button className='btn btn-success font-title' onClick={() => signInWithGoogle()}>Google Log In</button>
        </div>
    );
};

export default SocialLogin;