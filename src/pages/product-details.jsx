import React from 'react';
import Head from '../head-tags/home';

import Header from '../components/header';
import Footer from '../components/footer';
import LifeGraphic from '../components/life-graphic';
import Reviews from '../components/reviews';
import HappyCustomers from '../components/happy-customers-p';
import AlsoLike from '../components/also-like';
import LatestOffer from '../components/latest-offer';

function ProductDetails(){
    return(

        <div>
            <Head />
            <Header />
            <LifeGraphic/>
            <Reviews/>
            <HappyCustomers/>
            <AlsoLike/>
            <LatestOffer/>
            <Footer />
        </div>
    )    
}


export default ProductDetails;