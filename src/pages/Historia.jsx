import Markdown from 'react-markdown'

// const conteudo = `A Coordenadoria de Recursos Especiais (CORE) é a unidade de elite e de operações táticas da Polícia Civil do Estado do Rio de Janeiro (PCERJ). Considerada uma das forças especiais mais bem treinadas e equipadas do Brasil, a CORE é acionada em situações de altíssima complexidade e risco, funcionando como o braço tático da Polícia Judiciária fluminense.O símbolo da unidade é o Falcão, e seus policiais são carinhosamente chamados de "Falcões da Polícia Civil".📜 História e Evolução (1969 - 2002)A origem da CORE remonta ao período do antigo Estado da Guanabara, com o objetivo inicial de combate a ameaças terroristas.1969: Criação do Grupo de Operações Especiais (GOE), a célula inicial da unidade.Nomenclaturas Históricas: A unidade operou sob diversas denominações antes de se consolidar, incluindo: SOE, SERESP, DIRESP, CAO, e CINAP.2002: A unidade consolida-se oficialmente com a designação de Coordenadoria de Recursos Especiais (CORE).⚙️ Estrutura e Especialidades OperacionaisA CORE se destaca por ser uma multi-unidade com diferentes seções especializadas, permitindo uma atuação completa e integrada em campo:SeçãoFunção PrimáriaDetalhes da AtuaçãoSeção de Apoio Policial (SAP)"Infantaria" e Operação de BlindadosResponsável pelos veículos blindados ("Caveirões") e seu efetivo. Atua em conjunto com a SOTE, garantindo a progressão e segurança das equipes em áreas de confronto de alto risco.Serviço de Operações Táticas Especiais (SOTE)Força Tática de IntervençãoAbriga a Seção de Snipers (atiradores de precisão), atuando em resgate de reféns, incursões táticas e retomada de edificações.Serviço de Operações Aéreas (SAER)Resgate e Transporte AéreoPioneira no resgate aéreo policial no Brasil, realizando patrulhamento, apoio tático e infiltração de equipes.Esquadrão Antibombas (EAB)Desativação de ExplosivosSeção de Desativação de Artefatos Explosivos (DAE), lidando com artefatos improvisados (IEDs), bombas e granadas.Serviço de Cães de OperaçõesDetecção e IntervençãoUtiliza cães altamente treinados para detecção de drogas, armas, munições e explosivos, além de apoio em incursões táticas.Seção de Gerenciamento de CrisesNegociação e ResoluçãoGerencia ocorrências como sequestros e tomadas de reféns, buscando soluções negociadas.🛡️ Recursos TáticosVeículos Blindados ("Caveirões"): Operados pela SAP, são cruciais para a progressão e segurança das equipes em áreas de confronto, resistindo a disparos de grosso calibre.Armamento de Ponta: Utiliza equipamentos táticos modernos e de alto poder de fogo.🎓 Treinamento de EliteO acesso à CORE é feito através de um rigoroso curso de formação que exige excelência física e psicológica. É considerado um dos treinamentos mais exigentes do país, preparando o policial para atuar sob pressão extrema em qualquer ambiente.`

export function Historia() {

  return (
    <div className="p-8 max-w-4xl mx-auto">

      <h1 className="text-2xl font-bold mb-6 text-center">História da CORE</h1>
      <div className='text-sm space-y-3 text-justify leading-relaxed indent-5'>

        <p>A Coordenadoria de Recursos Especiais (CORE) é a unidade de elite e de operações táticas da Polícia Civil do Estado do Rio de Janeiro (PCERJ).</p>
        <p>Considerada uma das forças especiais mais bem treinadas e equipadas do Brasil, a CORE é acionada em situações de altíssima complexidade e risco, funcionando como o braço tático da Polícia Judiciária fluminense.</p>
        <p>A origem da CORE remonta ao período do antigo Estado da Guanabara e ao contexto inicial de combate a ameaças terroristas e tentativas de bomba.</p>

        <figure>
          <img className='h-26 m-auto mt-4 mb-2' src="/images/logo-core-GOE.png" alt="Grupo de Operações Especiais - GOE" />
          <figcaption className='text-center text-xs text-gray-400 mb-6'>Grupo de Operações Especiais - GOE</figcaption>
        </figure>
        
        <p>Em 1969 houve então a criação do <strong>Grupo de Operações Especiais (GOE)</strong>, a célula inicial da unidade, ligada à Secretaria de Segurança Pública.</p>
        
        <p>Até que, em 1975, a partir da fusão do Estado da Guanabara com o Estado do Rio de Janeiro, a unidade passou por diversas denominações ao longo dos anos, buscando adequar sua estrutura e funções.</p>

        <figure>
          <img className='h-26 m-auto mt-4 mb-2' src="/images/logo-core-SOE.png" alt="Serviço de Operações Especiais - SOE" />
          <figcaption className='text-center text-xs text-gray-400 mb-6'>Serviço de Operações Especiais - SOE</figcaption>
        </figure>

        <figure>
          <img className='h-26 m-auto mt-4 mb-2' src="/images/logo-core-CAO.png" alt="Coordenadoria de Apoio Operacional - CAO" />
          <figcaption className='text-center text-xs text-gray-400 mb-6'>Coordenadoria de Apoio Operacional - CAO</figcaption>
        </figure>

        <figure>
          <img className='h-26 m-auto mt-4 mb-2' src="/images/logo-core-CAVEIRA.png" alt="Coordenadoria de Recursos Especiais antigo" />
          <figcaption className='text-center text-xs text-gray-400 mb-6'>Coordenadoria de Recursos Especiais</figcaption>
        </figure>

        <p>A unidade operou sob os seguintes nomes:</p>

        <ul >
          <li>Serviço de Operações Especiais (SOE)</li>
          <li>Serviço de Recursos Especiais (SERESP)</li>
          <li>Divisão de Recursos Especiais (DIRESP)</li>
          <li>Coordenadoria de Apoio Operacional (CAO)</li>
          <li>Coordenadoria de Inteligência e Apoio Policial (CINAP)</li>
        </ul>
        <p>Em 2002 a unidade consolida-se oficialmente com a designação de Coordenadoria de Recursos Especiais (CORE), nome que utiliza até hoje.</p>

        <figure>
          <img className='h-26 m-auto mt-4 mb-2' src="/images/logo-core-preto-cinza.gif" alt="Coordenadoria de Recursos Especiais - CORE" />
          <figcaption className='text-center text-xs text-gray-400 mb-6'>Coordenadoria de Recursos Especiais - CORE</figcaption>
        </figure>
        
        <p>A CORE se destaca por ser uma multi-unidade com diferentes seções especializadas, permitindo uma atuação completa e integrada em campo:</p>
        
        <p>Serviço de Apoio Policial: através do SAP (Seção de Apoio Policial), é responsável pela operação dos veículos blindados e missões de apoio a outras delegacias da Polícia Civil, realizando operações policiais em áreas de risco.</p>
        <p>Serviço de Recursos Especiais: através do SOTE (Setor de Operações Táticas Especiais), atua nas operações policiais em áreas de risco. Seu efetivo opera garantindo a progressão e segurança das equipes em áreas de confronto de alto risco. Abriga a Seção de Snipers (atiradores de precisão), atuando em resgate de reféns, incursões táticas e retomada de edificações.</p>
        <p>Serviço de Operações Aéreas (SAER): pioneira no resgate aéreo policial no Brasil, realizando patrulhamento, apoio tático e infiltração de equipes.</p>
        <p>Esquadrão Antibombas (EAB): desativação de Artefatos Explosivos, lidando com artefatos improvisados, bombas e granadas.</p>
        <p>Serviço Operações com Cães: utiliza cães altamente treinados para detecção de drogas, armas, munições e explosivos, além de apoio em incursões táticas.</p>

        <figure>
          <img className='h-26 m-auto mt-4 mb-2' src="/images/logo-core-marrom-tan.gif" alt="Coordenadoria de Recursos Especiais - CORE" />
          <figcaption className='text-center text-xs text-gray-400 mb-6'>Coordenadoria de Recursos Especiais - CORE</figcaption>
        </figure>

      </div>
      


    </div>
  );
}