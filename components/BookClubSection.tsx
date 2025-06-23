import React from 'react';
import Logo from './shared/Logo';

const BookClubSection: React.FC = () => {
  const handleSignUpClick = () => {
    window.open('https://example.com/integra-bookclub-signup', '_blank');
  };

  return (
    <section id="book-club" className="bg-white min-h-screen flex flex-col py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center items-center">
        <div className="text-center mb-12">
            <div className="inline-block">
                <Logo iconColor="fill-brand-purple" textColor="text-brand-purple" />
            </div>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-purple leading-tight">
                CLUBE DO LIVRO
            </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full max-w-4xl mx-auto">
            <div className="text-brand-gray-dark text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-4 text-brand-purple">Nossa Missão Literária</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                Junte-se ao nosso Clube do Livro mensal! A cada encontro, uma nova jornada através das páginas de obras cuidadosamente selecionadas. Nosso objetivo é fomentar a paixão pela leitura, promover discussões enriquecedoras e construir uma comunidade vibrante de leitores. Descubra novas perspectivas, compartilhe suas impressões e conecte-se com outros apaixonados por histórias.
                </p>
            </div>
            <div className="flex justify-center md:justify-end">
                <img 
                src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Coleção de livros inspiradores para o Clube do Livro" 
                className="rounded-lg shadow-xl w-56 h-70 sm:w-64 sm:h-80 object-cover transform md:rotate-3"
                />
            </div>
        </div>
      </div>
      
      <div className="mt-12 sm:mt-16 bg-brand-purple py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
            CONHEÇA NOSSO CLUBE DO LIVRO E SAIBA O LIVRO DO MÊS
          </h3>
          <p className="mt-4 text-lg sm:text-xl">
            SE INSCREVA NO LINK ABAIXO:
          </p>
          <button
            onClick={handleSignUpClick}
            className="mt-6 inline-block text-brand-purple bg-white px-8 py-3 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-purple text-lg"
            aria-label="Inscreva-se no clube do livro"
          >
            INSCREVA-SE AGORA
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookClubSection;
