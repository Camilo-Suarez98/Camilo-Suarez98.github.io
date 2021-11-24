import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import logo from "../public/letterc.jpg"

const Layout = ({ title, children }) => {
  return(
    <div>
      <Head>
        <title>{title} - Camilo S</title>
        <link rel="icon" href="/letterc.jpg" />
        <link 
          rel="stylesheet" 
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" 
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" 
          crossorigin="anonymous" />
          <link rel="stylesheet" href="style.css" />
      </Head>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-indigo-500 mb-10">
        <div className="container px-4 mx-auto flex items-center justify-between sm:flex-col sm:justify-center">
            <div className="flex justify-start item-center w-full relative px-4 sm:w-auto sm:static sm:justify-center">
              <Image className="image" src={logo} alt="Page's logo" width={30} height={20} />
              <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
                Camilo Suarez
              </a>
            </div>
              <button className="burger absolute right-0 top-5 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent hidden outline-none focus:outline-none" type="button">
                <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              </button>
          <div className="flex flex-grow items-center sm:justify-center sm:text-center" id="example-navbar-warning">
            <ul className="flex list-none ml-auto sm:flex-col sm:justify-start">
              <li className="nav-item">
                <Link href="/" title="Home">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/portfolio" title="Portfolio">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    Portfolio
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" title="Contact">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="w-full bg-gray-800">
        {children}
      </div>
    </div>
  )
}

export default Layout
