import React from 'react';
import Head from '../head-tags/home';
import PaymentPage from '../components/payment-page';
import LatestOffer from '../components/latest-offer';

function CheckOut(){
    return(

        <div>
            <Head />
            <PaymentPage />
            <LatestOffer/>
        </div>
    )    
}


export default CheckOut;