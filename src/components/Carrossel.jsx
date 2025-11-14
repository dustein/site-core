import React, { useState, useEffect, useRef, useCallback } from 'react';

export function Carrossel({ className = "" }) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  
  const AUTOPLAY_DELAY = 3000; // 3 segundos
  const PAUSE_ON_HOVER = true;
  const PAUSE_ON_INTERACTION = true;
  
  const items = [
    {
      title: "SAER",
      description: "Serviço Aeropolicial",
      logo: "/images/logo-core-preto-cinza.gif"
    },
    {
      title: "EAB", 
      description: "Esquadráo Anti-bombas",
      logo: "/images/logo-core-preto-cinza.gif"
    },
    {
      title: "SOTE",
      description: "Seção de Operações Táticas Especiais",
      logo: "/images/logo-core-preto-cinza.gif"
    },
    {
      title: "SAP",
      description: "Seção de Apoio Policial",
      logo: "/images/logo-core-preto-cinza.gif"
    }
  ];

  // Função para parar o autoplay - Memoizada com useCallback
  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Função para iniciar o autoplay - Memoizada com useCallback
  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, AUTOPLAY_DELAY);
  }, [items.length, AUTOPLAY_DELAY]);

  // Função para avançar para o próximo slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  // // Função para voltar ao slide anterior
  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  }, [items.length]);

  // Função para ir para um slide específico
  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  // Effect para gerenciar o autoplay - Agora com dependências corretas
  useEffect(() => {
    if (isAutoPlaying && !isPaused) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    // Cleanup function
    return () => {
      stopAutoPlay();
    };
  }, [isAutoPlaying, isPaused, startAutoPlay, stopAutoPlay]);

  // Função para lidar com interações do usuário
  const handleUserInteraction = useCallback((callback) => {
    if (PAUSE_ON_INTERACTION) {
      setIsAutoPlaying(false);
      // Reativa autoplay após 5 segundos de inatividade
      setTimeout(() => {
        setIsAutoPlaying(true);
      }, 5000);
    }
    callback();
  }, [PAUSE_ON_INTERACTION]);

  // Função para pausar ao passar o mouse (hover)
  const handleMouseEnter = useCallback(() => {
    if (PAUSE_ON_HOVER) {
      setIsPaused(true);
    }
  }, [PAUSE_ON_HOVER]);

  // Função para retomar quando o mouse sair
  const handleMouseLeave = useCallback(() => {
    if (PAUSE_ON_HOVER) {
      setIsPaused(false);
    }
  }, [PAUSE_ON_HOVER]);

  return (
    <div 
      className={`relative w-full max-w-[500px] mx-auto wrap-break-word border border-gray-800 rounded-lg m-2 pb-2 ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      <div className="bg-black p-2 rounded-lg shadow-md hover:shadow-xl transition-shadow">

        <h2 className="font-bold text-center text-xl mb-2 text-white tracking-widest">
          {items[currentIndex].title}
        </h2>
        
        <img className='h-24 w-auto mx-auto' src={items[currentIndex].logo} alt={items[currentIndex].description} />

        <p className="text-core-cinza text-center wrap-break-word">
          {items[currentIndex].description}
        </p>

      </div>

      {/* Botões de navegação */}
      <button 
        onClick={() => handleUserInteraction(prevSlide)}
        className="hidden xs:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-gray-600 text-blue-950 px-1 rounded-full hover:bg-gray-300 transition-colors shadow-lg hover:shadow-xl"
        aria-label="Slide anterior"
      >
        ←
      </button>
      
      <button 
        onClick={() => handleUserInteraction(nextSlide)}
        className="hidden xs:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-gray-600 text-blue-950 px-1 rounded-full hover:bg-gray-300 transition-colors shadow-lg hover:shadow-xl"
        aria-label="Próximo slide"
      >
        →
      </button>

            {/* Indicadores */}
      <div className="flex justify-center items-center mt-4 space-x-2">
  <button
    onClick={() => handleUserInteraction(prevSlide)}
    className="bg-gray-600 text-black px-1 rounded-full hover:bg-amber-600 transition-colors shadow-lg hover:shadow-xl xs:hidden"
    aria-label="Slide anterior"
  >
    ←
  </button>
  {items.map((_, index) => (
    <button
      key={index}
      onClick={() => handleUserInteraction(() => goToSlide(index))}
      className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
        index === currentIndex 
          ? 'bg-white ring-2' 
          : 'bg-gray-400 hover:bg-gray-600'
      }`}
      aria-label={`Ir para slide ${index + 1}`}
    />
  ))}
  <button
    onClick={() => handleUserInteraction(nextSlide)}
    className="bg-gray-600 text-black px-1 rounded-full hover:bg-amber-600 transition-colors shadow-lg hover:shadow-xl xs:hidden"
    aria-label="Próximo slide"
  >
    →
  </button>
</div>

    </div>
  );
}