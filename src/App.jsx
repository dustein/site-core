import React, { useState } from 'react';

// --- Configuração das Cores (Apenas Primárias) ---
// Black: #000000 (usado como primaryColorDark)
// Light Gray: #D0D0CE (usado como primaryColorLightAccent)
// White: #FAFAFA (usado como primaryColorWhite)

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
      
      {/* 1. Header (Fixo) */}
      <header className="fixed top-0 left-0 right-0 z-20 p-4 flex justify-between items-center" style={{ backgroundColor: primaryColorDark }}>
        <h1 className="text-2xl font-extrabold tracking-widest" style={{ color: primaryColorLightAccent }}>
          CORE
        </h1>
        {/* Botão de Menu (Hamburger/Close) */}
        <button
          className="p-2 rounded-md transition duration-300 border-2"
          style={{ 
              backgroundColor: primaryColorDark, 
              borderColor: primaryColorLightAccent,
              color: primaryColorLightAccent 
          }}
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
      <main 
        className="relative flex-grow flex items-center justify-center p-4 pt-20 overflow-hidden bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://i.imgur.com/gOq7zX5.png')`, // NOVA URL da imagem de fundo com o cenário de favela
          minHeight: 'calc(100vh - 64px)', // Ajusta para a altura da tela menos o header
          backgroundColor: primaryColorDark, // Fallback caso a imagem não carregue
        }}
      >
        {/* Overlay para melhorar a legibilidade do texto */}
        <div className="absolute inset-0 bg-black opacity-60"></div> 

        <div className="relative text-center w-full max-w-sm z-10"> {/* z-10 para ficar acima do overlay */}
          {/* Título Principal */}
          <p className="text-5xl font-black mb-2" style={{ color: primaryColorWhite }}>
            CORE
          </p>
          
          {/* Subtítulo Tático */}
          <h2 className="text-xl font-light tracking-wider uppercase mb-8" style={{ color: primaryColorLightAccent }}>
            Expertise Militar Urbana
          </h2>

          {/* Slogan com destaque visual */}
          <div 
            className="p-4 mx-auto mb-10 rounded-lg shadow-2xl transform hover:scale-[1.02] transition duration-500 ease-in-out border-2"
            style={{ 
              backgroundColor: 'rgba(208, 208, 206, 0.2)', // Levemente transparente para manter o background visível
              borderColor: primaryColorWhite, // White border
            }}
          >
            <p className="text-lg font-semibold tracking-wide" style={{ color: primaryColorWhite }}>
              UNIDADE DE OPERAÇÕES TÁTICAS ESPECIAIS
            </p>
          </div>

          {/* Call to Action - Botão de Alto Contraste */}
          <button 
            className="w-full py-4 text-lg font-bold uppercase rounded-xl transition duration-300 transform hover:opacity-90 active:scale-[0.98]"
            style={{ 
              backgroundColor: primaryColorLightAccent, // Light Gray
              color: primaryColorDark, // Black text
              boxShadow: '0 8px 15px rgba(0, 0, 0, 0.6)'
            }}
          >
            Conheça a Missão
          </button>
          
          {/* Separador e Aviso de Autoridade */}
          <p className="mt-8 text-xs font-light tracking-wider" style={{ color: primaryColorLightAccent }}>
            <span className="font-bold">AUTORIDADE.</span> <span className="opacity-75">FORÇA.</span> <span className="font-bold">COMPROMISSO.</span>
          </p>

        </div>
      </main>

      {/* 4. Footer simples (Mobile) */}
      <footer className="p-4 text-center text-xs" style={{ color: primaryColorDark, backgroundColor: primaryColorLightAccent }}>
        &copy; 2024 CORE. Todos os Direitos Reservados.
      </footer>
    </div>
  );
};

export default App;