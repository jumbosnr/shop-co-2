import React from 'react';
import Head from '../head-tags/home';
import LoginC from '../components/login';
import LatestOffer from '../components/latest-offer';
// import { AuthContext } from '..components/AuthContext';

function Login(){
    return(

        <div>
            <Head />
            <LoginC />
            {/* <AuthContext /> */}
            <LatestOffer/>
        </div>
    )    
}


export default Login;