import React from 'react';

import Header from '../../components/Header';
import InfoSection from '../../components/InfoSection';
import Stores from '../../components/Stores';
import Solutions from '../../components/Solutions';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <InfoSection />
      <Stores />
      <Solutions />
      <About />
      <Contact />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home;