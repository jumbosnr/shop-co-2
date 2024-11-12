import React from 'react';
import Head from '../head-tags/home';
import LoginC from '../components/login';
import Header from '../components/header';
import LatestOffer from '../components/latest-offer';
import Footer from '../components/footer';
// import { AuthContext } from '..components/AuthContext';

function Login(){
    return(

        <div>
            <Head />
            <Header />
            <LoginC />
            {/* <AuthContext /> */}
            <LatestOffer/>
            <Footer />
        </div>
    )    
}


export default Login;