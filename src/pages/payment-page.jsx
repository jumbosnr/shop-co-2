import React from 'react';
import Head from '../head-tags/home';
import PaymentPage from '../components/payment-page';
import Header from '../components/header';
import LatestOffer from '../components/latest-offer';
import Footer from '../components/footer';

function CheckOut(){
    return(

        <div>
            <Head />
            <Header />
            <PaymentPage />
            <LatestOffer/>
            <Footer />
        </div>
    )    
}


export default CheckOut;