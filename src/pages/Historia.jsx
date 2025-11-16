import Markdown from 'react-markdown'

const conteudo = `OLA`

export function Historia() {

  return (
    <div className="p-8 max-w-4xl mx-auto text-justify wrap-break-word">

      <h1 className="text-2xl font-bold mb-6 text-center">História da CORE</h1>
      <Markdown>
        {conteudo}
      </Markdown>
    </div>
  );
}