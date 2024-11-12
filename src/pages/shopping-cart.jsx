import React from 'react';
import Head from '../head-tags/home';

import Header from '../components/header';
import ShoppingCart from '../components/shopping-cart';
import LatestOffer from '../components/latest-offer';
import Footer from '../components/footer';

function Cart(){
    return(

        <div>
            <Head />
            <Header />
            <ShoppingCart/>
            <LatestOffer/>
            <Footer />
        </div>
    )    
}


export default Cart;
