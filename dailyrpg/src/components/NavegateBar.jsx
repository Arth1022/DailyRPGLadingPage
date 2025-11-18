import React from "react";
import { useLocation } from "react-router-dom";

function Header() {
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
    <header className="absolute top-0 left-0 right-0 z-10 p-6 flex justify-between items-center text-white">
      <div className="text-2xl font-bold">
        <h1 className="tracking-wide pixel-font">DailyRPG</h1>
        <hr className="lg:w-200 mx-auto border-amber-300 my-1 fade-divider" />

        <p className=" pixel-font text-sm font-light tracking-tight">
          YOUR ADVENTURE BEGINS
        </p>
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
