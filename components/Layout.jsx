import Head from "next/head";
import Image from "next/image";
import nextIcon from "/public/nextjs-icon.svg";
import reactIcon from "/public/react-icon.svg";
import tailwindIcon from "/public/tailwind-icon.svg";
import React, { useContext, useState } from "react";
import { ThemeContext } from "/context/ThemeContext";
import Header from "./Header";
import Footer from "./Footer";
import TechnologieUsed from "./TechnologieUsed";

const Layout = ({ title, children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menu, setMenu] = useState('inline');
  const showMenu = () => {
    setMenu(menu === 'inline' ? 'hidden' : 'inline');
  };

  return (
    <div>
      <Head>
        <title>{title} - Camilo S</title>
        <link rel="icon" href="/icono-portf.png" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="style.css" />
      </Head>
      <div className={theme === 'light' ? 'dark' : 'light'}>
        <Header
          showMenu={showMenu}
          menu={menu}
          toggleTheme={toggleTheme}
          theme={theme}
        />

        <div className="w-3/4 m-auto h-full ls:mt-0 flex flex-col justify-evenly flex-wrap">
          {children}
        </div>

        <div className="mb-6">
          <div className="w-3/4 m-auto mb-10 text-center">
            <h2 className="text-xl">This page was created with</h2>
          </div>
          <div className="w-3/4 m-auto grid grid-cols-3 sm:grid-cols-2">
            <TechnologieUsed icon={reactIcon} technologyName="ReactJS" />
            <TechnologieUsed icon={nextIcon} technologyName="NextJS" />
            <TechnologieUsed icon={tailwindIcon} technologyName="TailwindCSS" />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
