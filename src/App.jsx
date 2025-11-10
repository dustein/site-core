import React, { useState } from 'react';
import logoImage from './assets/images/core-logo-cinza-semfundo-icone.jpg';
import { Hero } from './components/Hero';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const primaryColorDark = '#000000';
  const primaryColorLightAccent = '#D0D0CE'; // Light Gray
  const primaryColorWhite = '#FAFAFA'; // White

  const navItems = [
    { name: 'História', href: '#historia' },
    { name: 'Setores Especializados', href: '#setores' },
    { name: 'Notícias', href: '#noticias' },
    { name: 'Estatísticas', href: '#estatisticas' },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col antialiased">
      
      <header className="bg-black p-2 flex justify-between items-center">
        
        <img src={logoImage} alt="CORE - Coordenadoria de Recursos Especiais" id='icone-navbar'/>

        <h1 className="text-2xl font-extrabold tracking-widest text-core-cinza font-core">
          CORE
        </h1>

        {/* Botão de Menu (Hamburger/Close) */}
        <button
          className="p-2 rounded-md transition duration-300 border-2 bg-core-cinza/20 text-core-cinza"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
        >
          {/* Ícone do menu ou fechar */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </svg>

        </button>

      </header>

      {/* 2. Menu Overlay (Navegação Mobile) */}
      <nav 
        className={`fixed top-0 left-0 h-full w-full z-10 p-10 flex flex-col justify-center transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ backgroundColor: primaryColorDark }}
        role="navigation"
      >
        <button 
            className="absolute top-4 right-4 p-2 text-3xl font-light" 
            style={{ color: primaryColorLightAccent }} 
            onClick={() => setIsMenuOpen(false)}
            aria-label="Fechar Menu de Navegação"
        >
            &times;
        </button>
        <ul className="space-y-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href}
                className="block text-4xl font-bold uppercase tracking-wider transition-colors duration-300 hover:opacity-80"
                style={{ color: primaryColorLightAccent }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* 3. Hero Section - Com Imagem de Fundo Dinâmica */}
      <Hero />

      {/* 4. Footer simples (Mobile) */}
      <footer className="p-4 text-center text-xs" style={{ color: primaryColorDark, backgroundColor: primaryColorLightAccent }}>
        &copy; 2024 CORE. Todos os Direitos Reservados.
      </footer>
    </div>
  );
};

export default App;
