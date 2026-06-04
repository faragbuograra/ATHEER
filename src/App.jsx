import { Suspense, lazy, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LoadingScreen from './components/LoadingScreen';

const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Routes = lazy(() => import('./components/Routes'));
const Partners = lazy(() => import('./components/Partners'));
const BunkerPrices = lazy(() => import('./components/BunkerPrices'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [ready, setReady] = useState(false);

  return (
    <>
      {!ready && <LoadingScreen onComplete={() => setReady(true)} />}
      <div
        className="font-sans"
        style={{
          opacity: ready ? 1 : 0,
          transition: ready ? 'opacity 0.6s ease' : 'none',
        }}
      >
        <Header />
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Services />
          <Routes />
          <Partners />
          <BunkerPrices />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;
