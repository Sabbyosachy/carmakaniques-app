import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const{signInUsingGoogle}=useAuth();
    return (
        <div className="py-5">
            <h3 className="pt-5">Please Login</h3>
            <button onClick={signInUsingGoogle} className="btn_regular">Login With Google</button>
        </div>
    );
};

export default Login;