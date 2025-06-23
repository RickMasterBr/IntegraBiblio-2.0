
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import PodcastSection from './components/PodcastSection';
import LiteraryEventSection from './components/LiteraryEventSection';
import BookClubSection from './components/BookClubSection';
import Footer from './components/Footer';
import { AccessibilityIcon } from './components/icons/AccessibilityIcon';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorksSection />
        <PodcastSection />
        <LiteraryEventSection />
        <BookClubSection />
      </main>
      <Footer />
      <button
        aria-label="Accessibility options"
        className="fixed bottom-6 right-6 bg-brand-purple rounded-full p-3 shadow-lg z-50 cursor-pointer hover:bg-brand-purple-light transition-colors focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2"
        onClick={() => alert('Funcionalidades de acessibilidade serão implementadas aqui.')}
      >
        <AccessibilityIcon className="w-8 h-8 text-white" />
      </button>
    </div>
  );
};

export default App;
