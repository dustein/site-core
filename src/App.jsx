import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Historia } from './pages/Historia';

const App = () => {
  
  return (
    <Router>
      <div className="min-h-screen w-full bg-black text-white font-sans flex flex-col antialiased">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
