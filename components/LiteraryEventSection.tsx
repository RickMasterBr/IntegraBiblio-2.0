import React from 'react';

const LiteraryEventSection: React.FC = () => {
  return (
    <section id="literary-event" className="bg-brand-gray-darker min-h-screen flex flex-col justify-center items-center py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-brand-purple opacity-50 rounded-full transform -translate-x-1/2 -translate-y-1/2 filter blur-xl animate-pulse"></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-brand-purple-light opacity-40 rounded-lg transform translate-x-1/2 translate-y-1/2 rotate-12 filter blur-lg animate-pulse"
        style={{ animationDelay: '2000ms' }}
      ></div>
       <div className="absolute top-1/2 right-1/5 w-40 h-96 bg-brand-purple opacity-30 rounded-2xl transform -translate-y-1/2 rotate-[30deg] filter blur-md"></div>
      <div className="absolute bottom-1/3 left-1/5 w-96 h-32 bg-brand-purple-light opacity-30 rounded-2xl transform -translate-x-1/2 rotate-[-20deg] filter blur-md"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="text-sm font-medium text-brand-purple-light tracking-wider uppercase">
          em breve
        </p>
        <h2 className="mt-2 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight uppercase">
          SARAU LITERÁRIO
        </h2>
        <p className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
          Prepare-se para um evento vibrante de celebração da palavra! O Sarau Literário Integra Biblio é um espaço aberto para compartilhar poesias, contos, crônicas, músicas e outras performances artísticas. Conecte-se com outros amantes da literatura, expresse sua criatividade e inspire-se.
        </p>
        <p className="mt-6 max-w-xl mx-auto text-md text-gray-400">
          Fique de olho em nossas redes sociais para mais informações sobre datas, temas e como você pode participar, seja apresentando seu trabalho ou prestigiando os talentos da nossa comunidade.
        </p>
      </div>
    </section>
  );
};

export default LiteraryEventSection;
