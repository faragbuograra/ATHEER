import { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Routes = lazy(() => import('./components/Routes'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const BunkerPricesButton = lazy(() => import('./components/BunkerPricesButton'));

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Suspense fallback={null}>
        <About />
        <Services />
        <Routes />
        <Contact />
        <Footer />
        <BunkerPricesButton />
      </Suspense>
    </div>
  );
}

export default App;
