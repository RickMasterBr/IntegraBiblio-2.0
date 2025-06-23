
import React from 'react';
import Logo from './shared/Logo';
import { GithubIcon } from './icons/GithubIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { ShareIcon } from './icons/ShareIcon'; // Using ShareIcon as G+ placeholder

const Footer: React.FC = () => {
  const navItems = [
    { name: 'Página Inicial', href: '#hero' }, // Updated to #hero for consistency with header
    { name: 'Sobre', href: '#how-it-works' }, // Updated to #how-it-works
    { name: 'Contato', href: '#footer' },    // Points to itself, can be a specific contact section if added
    { name: 'Membros', href: '#book-club' },  // Updated to #book-club
  ];

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const id = targetId.substring(1); // Remove '#' from href
    const targetElement = document.getElementById(id);
    if (targetElement) {
      // For #footer, ensure it scrolls to the top of the footer if footer itself is the target
      if (id === 'footer') {
         targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
         targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (targetId === '#root') { // Special case for "VOLTAR AO TOPO"
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };


  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleNavClick(e, '#root'); // Use the same handler logic for consistency
  };

  return (
    <footer id="footer" className="bg-brand-gray-darker text-gray-300 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Left: Back to Top */}
          <div className="text-center md:text-left">
            <a 
              href="#root" 
              onClick={scrollToTop} 
              className="text-sm font-medium hover:text-white transition-colors cursor-pointer"
            >
              VOLTAR AO TOPO
            </a>
          </div>

          {/* Center: Sponsor Logos */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
            <span className="text-lg font-semibold">IBMR</span>
            <Logo iconColor="fill-brand-purple" textColor="text-white" className="h-10"/>
            <span className="text-lg font-semibold">Ânima Educação</span>
          </div>
          
          {/* Right: Nav Links & Social Icons */}
          <div className="flex flex-col items-center md:items-end">
            <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 mb-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-medium hover:text-white transition-colors cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="flex space-x-5">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors">
                <GithubIcon className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Share/More Info" className="text-gray-400 hover:text-white transition-colors">
                <ShareIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Integra Biblio. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
