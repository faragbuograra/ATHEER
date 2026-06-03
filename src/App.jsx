import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Routes from './components/Routes';
import BunkerPricesButton from './components/BunkerPricesButton';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Services />
      <Routes />
 
      <Contact />
      <Footer />
      <BunkerPricesButton />
    </div>
  );
}

export default App;
