import React, { useState } from "react"; // <--- VERIFIQUE SE ESTA LINHA ESTÁ ASSIM
import { useLocation } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const downloadPath = "/";
  const isDownloadPage = currentPath === downloadPath;

  const navLinks = [
    {
      text: isDownloadPage ? "PREVIEW" : "DOWNLOAD",
      url: isDownloadPage ? "/preview" : "/",
    },
    { text: "AUTHOR", url: "https://www.linkedin.com/in/arthuralexteixeira/" },
    { text: "GITHUB", url: "https://github.com/Arth1022/DailyRPG" },
  ];

  return (
    // MUDANÇA 1: Adicionei 'bg-black/50' para garantir que você veja o menu contra o fundo
    // MUDANÇA 2: 'z-50' alto para ficar na frente de tudo
    <header className="absolute top-0 left-0 right-0 z-50 w-full bg-black/80 md:bg-transparent">
      {/* Container Principal */}
      <div className="flex justify-between items-center p-6 w-full text-white">
        {/* LOGO */}
        <div className="text-2xl font-bold z-50">
          <h1 className="tracking-wide pixel-font">DailyRPG</h1>
          <hr className="w-20 lg:w-[200px] border-amber-300 my-1 fade-divider" />
          <p className="pixel-font text-sm font-light tracking-tight">
            YOUR ADVENTURE BEGINS
          </p>
        </div>

        {/* DESKTOP NAV (Sobe no mobile) */}
        <nav className="hidden md:block">
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

        {/* BOTÃO HAMBURGER (Só aparece no mobile) */}
        {/* MUDANÇA 3: Adicionei 'block' explícito e z-index para garantir que seja clicável */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden block text-amber-300 focus:outline-none z-50 p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // Ícone X (Fechar)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Ícone Sanduíche (Abrir)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* MENU MOBILE (DROPDOWN) */}
      {/* MUDANÇA 4: Lógica de visualização mais robusta */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black border-b border-amber-300 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 visible py-8 translate-y-0"
            : "opacity-0 invisible h-0 -translate-y-5"
        }`}
      >
        <ul className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <li key={link.text}>
              <a
                href={link.url}
                onClick={() => setIsOpen(false)}
                className="text-amber-300 text-xl font-bold tracking-widest pixel-font hover:text-white transition-colors"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
