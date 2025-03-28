import { useContext } from "react";
import Head from "next/head";

import Header from "./Header";
import { ThemeContext } from "/context/ThemeContext";

const Layout = ({ title, children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Head>
        <title>{title} - Camilo S</title>
        <meta name="description" content="Explore my project portfolio to discover my experience and skills in software development. Find examples of web sites i have created." />
        <link rel="icon" href="/icon-portfolio.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="description" content="Explore my project portfolio to discover my experience and skills in software development. Find examples of web sites i have created." />
        <meta property="og:url" content="https://camilo-suarez-dev.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title - `Camilo S`} />
        <meta property="og:description" content="Explore my project portfolio to discover my experience and skills in software development. Find examples of web sites i have created." />
        <meta property="og:image" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="camilo-suarez-dev.vercel.app" />
        <meta property="twitter:url" content="https://camilo-suarez-dev.vercel.app/" />
        <meta name="twitter:title" content={title - `Camilo S`} />
        <meta name="twitter:description" content="Explore my project portfolio to discover my experience and skills in software development. Find examples of web sites i have created." />
        <meta name="twitter:image" content="" />
      </Head>
      <div className={theme === 'light' ? 'dark' : 'light'}>
        <Header />

        <div className="w-3/4 m-auto h-full ls:mt-0 flex flex-col justify-evenly flex-wrap">
          {children}
        </div>
      </div>
    </div >
  );
};

export default Layout;
