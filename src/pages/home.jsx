import React from 'react';
import Head from '../head-tags/home';
import Header from '../components/header';
import Hero from '../components/hero';
import TopBanner from '../components/top-banner';
import { Products, NewArrivals } from '../components/new-arrivals';
import TopSelling from '../components/top-selling';
import DressStyles from '../components/dress-styles';
import HappyCustomers from '../components/happy-customers';
import LatestOffer from '../components/latest-offer';
import Footer from '../components/footer';

function Home() {
  return (
    <div>
      <Head />
      {/* <Header /> */}
      <Hero />
      <TopBanner />
      <NewArrivals />
      <TopSelling />
      <DressStyles />
      <HappyCustomers />
      <LatestOffer />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;