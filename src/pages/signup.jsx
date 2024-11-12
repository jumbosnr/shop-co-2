import React from 'react';
import Head from '../head-tags/home';
import Header from '../components/header';
import SignUpC from '../components/sign-up';
import LatestOffer from '../components/latest-offer';
import Footer from '../components/footer';

function SignUp(){
    return(

        <div>
            <Head />
            <Header />
            <SignUpC/>
            <LatestOffer/>
            <Footer />
        </div>
    )    
}


export default SignUp;