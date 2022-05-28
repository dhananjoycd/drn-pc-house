import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Hooks/Loading';
import useMongoDB from '../../Hooks/useMongoDB';

const RequireAdmin =({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const {dbUser } = useMongoDB();
    

    if(loading || !dbUser){
        return <Loading></Loading>
    }
    const admin = dbUser?.role;
    console.log(dbUser, 'ffff')
    if(!admin){
        signOut(auth);
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAdmin;