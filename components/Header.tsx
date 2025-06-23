import React from 'react';
import Logo from './shared/Logo';

const Header: React.FC = () => {
  const navItems = [
    { name: 'Página Inicial', href: '#hero', current: false },
    { name: 'Sobre', href: '#how-it-works', current: false },
    { name: 'Podcast', href: '#podcast', current: false },
    { name: 'Sarau Literário', href: '#literary-event', current: false },
    { name: 'Clube do Livro', href: '#book-club', current: false },
    { name: 'Contatos', href: '#footer', current: false },
  ];

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const id = targetId.substring(1); // Remove '#' from href
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-brand-gray-darker sticky top-0 z-40 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo iconColor="fill-brand-purple" textColor="text-white"/>
          <nav className="hidden md:flex space-x-4 lg:space-x-6 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm lg:text-base font-medium transition-colors hover:text-brand-purple-light cursor-pointer
                  ${item.current ? 'bg-brand-purple text-white px-3 py-1.5 rounded-full' : 'text-gray-300'}`}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button could go here */}
            <button className="text-gray-300 hover:text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
