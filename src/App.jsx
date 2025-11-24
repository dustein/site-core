import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Historia } from './pages/Historia';
import { Galeria } from './pages/Galeria';
  
const App = () => {
  
  return (
    <Router>
      <div className="flex flex-col min-h-dvh w-full bg-black text-white font-sans antialiased">
        <Header />
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/galeria" element={<Galeria />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
