import React from 'react';
import Button from './shared/Button';

const PodcastSection: React.FC = () => {
  const handleListenPodcastClick = () => {
    window.open('https://example.com/pod-integrar', '_blank');
  };

  const featuredTopics = [
    "Entrevistas com autores locais e nacionais.",
    "Discussões aprofundadas sobre clássicos da literatura.",
    "Dicas de leitura e novidades do mercado editorial.",
    "O papel da leitura na formação crítica e cultural.",
    "Projetos de incentivo à leitura e democratização do acesso ao livro."
  ];

  return (
    <section id="podcast" className="bg-white min-h-screen flex flex-col justify-center items-center py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-10 -left-20 w-72 h-72 bg-brand-purple-light opacity-30 rounded-full filter blur-2xl"></div>
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-brand-purple opacity-20 rounded-lg transform rotate-45 filter blur-xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="text-brand-gray-dark mb-12 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-purple tracking-tight">
              POD INTEGRAR
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Conheça nosso podcast Pod Integrar, comandado pelos alunos de audiovisual. Através do podcast é possível acompanhar as entrevistas que acontecem na IBMR. Sempre trazendo conteúdo literário e suas interpretações, com professores, alunos e convidados especiais, deixando todos cada vez mais integrados no mundo dos livros.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-brand-purple mb-3">Tópicos em Destaque:</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {featuredTopics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>
            <div className="mt-10">
              <Button variant="primary" className="text-lg" onClick={handleListenPodcastClick}>
                OUVIR AGORA
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img 
              src="https://images.pexels.com/photos/2228580/pexels-photo-2228580.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Livros e conhecimento, temas do Pod Integrar" 
              className="rounded-xl shadow-2xl w-full max-w-2xl h-auto object-contain" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
