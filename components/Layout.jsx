import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import logo from "../public/icono-portf.png"
import nextIcon from "../public/nextjs-icon.svg"
import reactIcon from "../public/react-icon.svg"
import reactQueryIcon from "../public/react-query-icon.svg"
import tailwindIcon from "../public/tailwind-icon.svg"
import React, { useContext, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"

const Layout = ({ title, children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [ menu, setMenu ] = useState('inline')
  const showMenu = () => {
    setMenu(menu === 'inline' ? 'hidden' : 'inline')
  }

  return(
    <div>
      <Head>
        <title>{ title } - Camilo S</title>
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
        <nav className="w-full relative flex flex-wrap items-center justify-between px-2 py-3 mb-10 ls:pb-0 ls:px-0">
          <div className="container px-12 mx-auto flex items-center justify-between sm:flex-col sm:justify-center ls:px-0">
            <div className="flex relative px-4 sm:w-auto sm:static sm:justify-center">
              <a href="/" className="flex items-center text-sm font-bold leading-relaxed cursor-pointer inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-800 sm:mr-0">
                <Image className="image" src={logo} alt="Page's logo" width={40} height={40} />
              </a>
            </div>
            
            <button onClick={showMenu} className="hidden ls:inline burger" type="button">
              <span className="block relative w-6 h-px rounded-sm bg-white"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            </button>

            <div className="flex flex-grow items-center sm:justify-center sm:text-center ls:w-full ls:absolute ls:-bottom-52 z-50 ls:m-auto" id="example-navbar-warning">
              <ul className={ menu === 'inline' ? 'ls:hidden flex list-none ml-auto transition--all duration-300' : 'menu-burger flex list-none ml-auto transition--all duration-300 ls:flex-col sm:justify-start ls:w-full ls:m-auto ls:items-center' }>
                <li className="w-full">
                  <Link href="/" title="Home">
                    <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-gray-800 hover:text-blue-500 ls:w-full ls:py-5 ls:justify-center">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="w-full">
                  <Link href="/portfolio" title="Portfolio">
                    <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-gray-800 hover:opacity-75 ls:w-full ls:py-5 ls:justify-center">
                      Portfolio
                    </a>
                  </Link>
                </li>
                <li className="w-full">
                  <Link href="https://docs.google.com/document/d/1pCMX9uTb3b7oc-cO1TdAweR5nXJfAmJK/edit">
                    <a target="_blank" className="border-resume px-3 py-2 border-2 sm:border-4 flex items-center text-sm uppercase font-bold leading-snug text-gray-800 hover:opacity-75 ls:w-full ls:py-5 ls:justify-center">
                      Resume
                    </a>
                  </Link>
                </li>
                <li className="w-full px-3 py-2 flex justify-center items-center">
                  <button onClick={toggleTheme}>
                    { theme === 'light' ? '🌝' : '🌚' }
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="w-3/4 m-auto h-full mt-12 ls:mt-0 flex flex-col justify-evenly">
          {children}
        </div>

        <div className="mb-12">
          <div className="w-3/4 m-auto mb-10 text-center">
            <h2 className="text-xl">This page was created with</h2>
          </div>
          <div className="w-3/4 m-auto grid grid-cols-5 ls:grid-cols-3 sm:grid-cols-2">
            <div className="flex flex-col items-center justify-center ls:py-4 transition-all duration-300 hover:-translate-y-3">
              <Image src={reactIcon} width={50} height={50} />
              <h3>ReactJS</h3>
            </div>
            <div className="flex flex-col items-center justify-center ls:py-4 transition-all duration-300 hover:-translate-y-3">
              <Image src={nextIcon} width={50} height={50} />
              <h3>NextJS</h3>
            </div>
            <div className="flex flex-col items-center justify-center ls:py-4 transition-all duration-300 hover:-translate-y-3">
              <Image src={reactQueryIcon} width={50} height={50} />
              <h3>React Query</h3>
            </div>
            <div className="flex flex-col items-center justify-center ls:py-4 transition-all duration-300 hover:-translate-y-3">
              <Image src={tailwindIcon} width={50} height={50} />
              <h3>Tailwind CSS</h3>
            </div>
            <div className="flex flex-col items-center justify-center ls:py-4 transition-all duration-300 hover:-translate-y-3">
              <i className="fab fa-github fa-3x icon h-12"></i>
              <h3>GitHub API</h3>
            </div>
          </div>
        </div>

        <div className="w-3/4 m-auto">
          <h1 className="text-center">If you want to write me, send a message to <a href="mailto: camilo.suarez85@gmail.com" className="hover:opacity-70">camilo.suarez85@gmail.com</a></h1>
        </div>

        <footer className="w-3/4 m-auto pt-4">
          <p className="text-center">©2023 Powered by <a className="font-black" href="https://github.com/Camilo-Suarez98" target="_blank">Camilo-Suarez98</a></p>
        </footer>
      </div>     
    </div>
  )
}

export default Layout
