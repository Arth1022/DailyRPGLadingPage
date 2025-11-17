import React from 'react';

function Header() {
  const navLinks = [
    { text: 'PREVIEW', url: '/preview' },
    { text: 'AUTHOR', url: 'https://www.linkedin.com/in/arthuralexteixeira/' },
    { text: 'GITHUB', url: 'https://github.com/Arth1022/DailyRPG' }
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-10 p-6 flex justify-between items-center text-white">

      <div className="text-2xl font-bold">
        <h1 className="tracking-wide">DailyRPG</h1>
        <p className="text-sm font-light tracking-tight">YOUR ADVENTURE BEGINS</p>
      </div>

      <nav>
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.text}>
           
              <a 
                href={link.url} 
                className="text-amber-300 underline-offset-5 border-b-2 font-semibold text-sm hover:text-gray-300 transition-colors"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;