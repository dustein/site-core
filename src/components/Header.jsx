import { useState } from "react";
import logoImage from '../assets/images/core-logo-cinza-semfundo-icone.jpg';
import { Link } from 'react-router-dom';

export function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Historia', href: '/historia' },
    { name: 'Inicio', href: '/' },
  ];

  return (
    <>
    
    <header className="bg-black p-4 pb-6 flex justify-between items-center">
        
        <img src={logoImage} className="h-10 w-auto block" alt="CORE - Coordenadoria de Recursos Especiais" />

        <h1 className="text-4xl font-extrabold tracking-widest text-core-cinza font-core">
          CORE
        </h1>

        <button
          className="p-0.5 rounded-md transition duration-300 border-2 bg-core-cinza/20 text-core-cinza"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </svg>
        </button>

      </header>

      <nav 
        className={`fixed top-0 right-0 h-full w-full md:w-96 z-50 p-10 flex flex-col items-center justify-center transform transition-transform duration-500 ease-in-out bg-gray-950/95 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="navigation"
      >
        <div>
        <button 
            className="absolute top-4 right-4 p-2 text-3xl font-light text-core-cinza hover:text-amber-500 transition-colors" 
            onClick={() => setIsMenuOpen(false)}
            aria-label="Fechar Menu de Navegação"
        >
            &times;
        </button>

        </div>
        <ul className="space-y-6 text-center xs:m-6 mx-auto">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link 
                to={item.href}
                className="block text-xl text-core-cinza font-bold uppercase tracking-wider transition-colors duration-300 hover:opacity-80 hover:underline hover:underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}