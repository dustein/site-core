import { Carrossel } from './components/Carrossel';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

const App = () => {
  
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col antialiased">

      <Header />

      <Hero />

      <Carrossel />

      <Footer />

    </div>
  );
};

export default App;
