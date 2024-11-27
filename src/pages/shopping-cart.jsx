import React from 'react';
import Head from '../head-tags/home';
import ShoppingCart from '../components/shopping-cart';
import LatestOffer from '../components/latest-offer';

function Cart(){
    return(

        <div>
            <Head />
            <ShoppingCart/>
            <LatestOffer/>
        </div>
    )    
}


export default Cart;
