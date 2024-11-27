import React from 'react';
import Head from '../head-tags/home';
import LifeGraphic from '../components/life-graphic';
import Reviews from '../components/reviews';
import HappyCustomers from '../components/happy-customers-p';
import AlsoLike from '../components/also-like';
import LatestOffer from '../components/latest-offer';

function ProductDetails(){
    return(

        <div>
            <Head />
            <LifeGraphic/>
            <Reviews/>
            <HappyCustomers/>
            <AlsoLike/>
            <LatestOffer/>
        </div>
    )    
}


export default ProductDetails;