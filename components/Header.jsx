import logo from "/public/icono-portf.png";
import Image from "next/image";
import NavLink from "./NavLink";

const Header = ({ showMenu, menu, toggleTheme, theme }) => {
  return (
    <nav className="w-full relative flex flex-wrap items-center justify-between px-2 py-3 mb-10 ls:pb-0 ls:px-0">
      <div className="container px-12 mx-auto flex items-center justify-between sm:flex-col sm:justify-center ls:px-0">
        <div className="flex relative px-4 sm:w-auto sm:static sm:justify-center">
          <a href="/" className="flex items-center text-sm font-bold leading-relaxed cursor-pointer mr-4 py-2 whitespace-nowrap uppercase text-gray-800 sm:mr-0">
            <Image className="image" src={logo} alt="Page's logo" width={40} height={40} />
          </a>
        </div>

        <button onClick={showMenu} className="hidden ls:inline burger" type="button">
          <span className="block relative w-6 h-px rounded-sm bg-white"></span>
          <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        </button>

        <div className="flex flex-grow items-center z-50 transition duration-500 sm:justify-center sm:text-center ls:w-full ls:absolute ls:top-12 ls:-bottom-72 ls:m-auto">
          <ul className={menu === 'inline' ? 'ls:hidden flex list-none ml-auto transition--all duration-300' : 'menu-burger flex list-none ml-auto transition--all duration-300 ls:flex-col sm:justify-start ls:w-full ls:m-auto ls:items-center'}>
            <NavLink href="/" title="Home" />
            <NavLink href="/portfolio" title="Projects" />
            <NavLink href="/contact" title="Contact" />
            <li className="w-full">
              <a
                href="https://drive.google.com/file/d/1f2toB66E8Neg-LOpEwZ5jpJyhYLsj6eH/view?usp=drive_link"
                target="_blank"
                className="border-resume px-3 py-2 border-2 sm:border-4 flex items-center text-sm uppercase font-bold leading-snug text-gray-800 transition duration-500 hover:text-blue-700 ls:w-full ls:py-5 ls:justify-center"
              >
                CV
              </a>
            </li>
            <li className="w-full px-3 py-2 flex justify-center items-center">
              <button onClick={toggleTheme}>
                {theme === 'light' ? '🌝' : '🌚'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
