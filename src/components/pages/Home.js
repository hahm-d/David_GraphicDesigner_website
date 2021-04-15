import React from 'react';
import '../../App.css';
import Brands from '../Brands';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Brands />
      <Footer />
    </>
  );
}

export default Home;