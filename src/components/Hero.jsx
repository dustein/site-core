import hero_img from '/images/ia_core_cover-hero-2.png'

// export function Hero({ className = "" }) {
//   return (
//     // 1. Container Principal:
//     // - `relative`: cria o contexto de posicionamento para o overlay.
//     // - `h-[60vh]`: define uma altura para a seção. Ajuste conforme necessário.
//     // - `flex items-center justify-center`: centraliza o conteúdo verticalmente e horizontalmente.
//     <div className={`relative flex min-h-fit items-center justify-center text-center ${className}`}>
      
//       {/* 2. Camada da Imagem de Fundo */}
//       <div className="h-full absolute inset-0 bg-auto sm:bg-cover" style={{ backgroundImage: `url(${hero_img})` }}></div>

//       {/* 3. Camada do Overlay */}
//       {/* - `bg-black/60` cria um fundo preto com 60% de opacidade. Mude a cor e o valor (ex: bg-blue-900/75) como preferir. */}
//       <div className="absolute inset-0 bg-black/70"></div>

//       {/* 4. Container do Conteúdo */}
//       {/* - `relative z-10`: coloca este container acima das camadas de imagem e overlay. */}
//       <div className="relative z-10 px-4">

//         <h1 className="mb-4 text-6xl  md:text-9xl font-core text-core-cinza tracking-widest">
//           CORE
//         </h1>
        
//         <p className="text-xl md:text-4xl font-core-apoio text-gray-200">
//           <span className='block md:inline'>Coordenadoria</span>
//           <span className='block md:inline'> de </span>
//           <span className='block md:inline'>Recursos Especiais</span>          
//         </p>

//       </div>
//     </div>
//   );
// }


export function Hero() {
  return (
    
    <div className="relative flex h-[60vh] min-h-[400px] items-center justify-center text-center">
      
      <div className="absolute inset-0 bg-cover xs:bg-contain bg-center" style={{ backgroundImage: `url(${hero_img})` }}></div>

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 px-4">

        <h1 className="mb-4 text-6xl  md:text-9xl font-core text-core-cinza tracking-widest">
           CORE
        </h1>
        
        <p className="text-xl md:text-4xl font-core-apoio text-gray-200">
           <span className='block md:inline'>Coordenadoria</span>
           <span className='block md:inline'> de </span>
           <span className='block md:inline'>Recursos Especiais</span>          
        </p>

      </div>
    </div>
  );
}