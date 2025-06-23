
import React from 'react';
import Button from './shared/Button';
import Logo from './shared/Logo';

const HeroSection: React.FC = () => {
  const handleBeIntegratedClick = () => {
    window.open('https://example.com/integra-app-signup', '_blank');
  };

  return (
    <section id="hero" className="bg-white min-h-screen flex flex-col justify-center items-center py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-6 text-brand-gray-dark">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Olá! Nós Somos o <span className="text-brand-purple">Integra Biblio!</span>
            </h1>
            <h2 className="mt-4 text-xl sm:text-2xl text-gray-500">
              Sua comunidade de leitura e troca de livros.
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-gray-600">
              Deseja se tornar um leitor mas não sabe como? Busca pessoas para conversar sobre livros? Ou gosta de criar suas histórias?
            </p>
            <p className="mt-4 text-lg sm:text-xl text-gray-600">
              Então o Integra é o <span className="font-bold text-brand-purple">lugar certo para você!</span>
            </p>
            <p className="mt-4 text-lg sm:text-xl text-gray-600">
              Baixe o aplicativo e venha <span className="font-bold text-brand-purple">ser um integrado!</span>
            </p>
            <div className="mt-10">
              <Button variant="primary" className="text-lg" onClick={handleBeIntegratedClick}>
                SER UM INTEGRADO!
              </Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6 flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-8">
            {/* Main App Mockup */}
            <div className="text-center">
              <div className="bg-brand-purple-dark p-4 rounded-3xl shadow-2xl w-72 h-[540px] flex flex-col justify-start items-center transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300">
                  <Logo iconColor="fill-white" textColor="text-white" className="mt-2 mb-3"/>
                  <img 
                    src="https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=600&h=900&fit=crop&crop=entropy" 
                    alt="Livros e leitura no aplicativo Integra Biblio" 
                    className="rounded-lg w-full h-[420px] object-cover"
                  />
              </div>
              <p className="mt-3 text-sm text-gray-500">Conecte-se e troque livros.</p>
            </div>
            {/* Secondary App Mockup (Feed style) */}
            <div className="text-center">
              <div className="bg-gray-100 p-3 rounded-2xl shadow-xl w-64 h-[460px] overflow-y-auto transform rotate-[2deg] hover:rotate-0 transition-transform duration-300">
                <div className="space-y-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="bg-white p-3 rounded-lg shadow">
                      <div className="flex items-center space-x-2 mb-1">
                        <img src={`https://picsum.photos/seed/avatar${i}/32/32`} alt="User avatar" className="w-8 h-8 rounded-full" />
                        <div>
                          <p className="text-xs font-semibold text-brand-gray-dark">usuário_{i+1}</p>
                          <p className="text-xs text-gray-500">há {10 + i*5} minutos</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-700">Realizou empréstimo da obra: <span className="font-bold">Livro Exemplo {i+1}</span></p>
                      <img src={`https://picsum.photos/seed/book${i}/150/80`} alt="Book cover" className="mt-2 rounded w-full h-auto object-cover"/>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-500">Acompanhe a atividade da comunidade.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
