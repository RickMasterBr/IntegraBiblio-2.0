
import React from 'react';
import Button from './shared/Button';
import { MegaphoneIcon } from './icons/MegaphoneIcon';
import { HandshakeIcon } from './icons/HandshakeIcon';
import { BooksIcon } from './icons/BooksIcon';

const HowItWorksSection: React.FC = () => {
  const iconBaseStyle = "w-12 h-12 text-brand-purple";

  const handleDownloadAppClick = () => {
    window.open('https://example.com/integra-app-info', '_blank');
  };

  const steps = [
    {
      icon: <MegaphoneIcon className="w-10 h-10 text-brand-purple mb-3" />,
      title: "Compartilhe e Descubra",
      description: "Poste sobre os livros que você está lendo ou aqueles que gostaria de trocar. Explore o feed para encontrar leituras interessantes de outros usuários."
    },
    {
      icon: <HandshakeIcon className="w-10 h-10 text-brand-purple mb-3" />,
      title: "Conecte-se e Combine",
      description: "Interessado em um livro? Entre em contato com o usuário através do perfil e combinem os detalhes da troca ou empréstimo."
    },
    {
      icon: <BooksIcon className="w-10 h-10 text-brand-purple mb-3" />,
      title: "Troque e Desfrute",
      description: "Encontrem-se em um ponto seguro e realize a troca. Aproveite sua nova leitura e continue fomentando a comunidade!"
    }
  ];

  return (
    <section id="how-it-works" className="bg-brand-gray-darker min-h-screen flex flex-col justify-center items-center py-16 sm:py-24 relative">
      <div className="absolute left-0 top-0 bottom-0 w-full md:w-1/12 lg:w-2/12" style={{
        background: 'linear-gradient(to right, rgba(106, 13, 173, 0.7) 0%, rgba(106, 13, 173, 0) 100%)',
        clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0% 100%)'
        }}></div>
      <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-brand-purple opacity-30 md:opacity-100 md:w-1/12 lg:w-2/12" style={{clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0% 100%)'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex justify-center items-center relative mb-12 lg:mb-0">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white p-4 rounded-full shadow-xl">
                    <MegaphoneIcon className={iconBaseStyle} />
                </div>
                <div className="absolute bottom-0 left-0 bg-white p-4 rounded-full shadow-xl transform translate-x-4 sm:translate-x-8">
                    <BooksIcon className={iconBaseStyle} />
                </div>
                <div className="absolute bottom-0 right-0 bg-white p-4 rounded-full shadow-xl transform -translate-x-4 sm:-translate-x-8">
                    <HandshakeIcon className={iconBaseStyle} />
                </div>
                <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 15 Q 70 20, 80 42 T 75 68" stroke="white" strokeWidth="1.5" strokeDasharray="4,4" />
                    <path d="M73 70 Q 50 85, 27 70 T 20 42" stroke="white" strokeWidth="1.5" strokeDasharray="4,4" />
                    <path d="M22 40 Q 30 20, 50 15" stroke="white" strokeWidth="1.5" strokeDasharray="4,4" />
                </svg>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              COMO O APP FUNCIONA?
            </h2>
            <p className="mt-6 text-lg text-gray-300">
              O aplicativo Integra Biblio facilita a conexão entre leitores, permitindo a troca e o empréstimo de livros de forma simples e comunitária. Veja como é fácil:
            </p>
            <div className="mt-8 space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center lg:items-start">
                   <div className="flex items-center">
                    {/* {step.icon}  Icons already present in the cycle diagram, so using text headers here */}
                     <h3 className="text-xl font-semibold text-brand-purple-light ml-0">{step.title}</h3>
                   </div>
                  <p className="text-gray-400 mt-1 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg text-gray-300">
              Saiba mais sobre o app e todas as suas funcionalidades clicando no botão abaixo.
            </p>
            <div className="mt-10">
              <Button variant="secondary" className="text-lg" onClick={handleDownloadAppClick}>
                BAIXAR APP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
