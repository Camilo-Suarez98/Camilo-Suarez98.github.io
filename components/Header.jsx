import { useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import Link from "next/link";
import Image from "next/image";

import { ThemeContext } from "../context/ThemeContext";
import { checkPageIsSelected } from "../utils/paintCurrentLink";
import NavLink from "./NavLink";
import logo from "/public/logo.png";
import BurgerMenu from "./BurgerMenu";
import useToggleMenu from "../utils/useToggleMenu";
import useEscapeKey from "../utils/useEscapeKey";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [value, toggleValue] = useToggleMenu(false);
  const pathname = usePathname();
  const backgroundLink = checkPageIsSelected(theme, pathname);

  useEffect(() => {
    checkPageIsSelected();
  }, [pathname]);

  useEscapeKey(toggleValue);

  return (
    <nav className="nav-color w-full relative flex flex-wrap items-center justify-between px-2 py-3 ls:pb-0 ls:px-0">
      <div className="container px-12 mx-auto flex items-center justify-between sm:flex-col sm:justify-center ls:px-0">
        <div className="flex relative px-4 sm:w-auto sm:static sm:justify-center">
          <Link
            href="/"
            className="flex items-center text-sm font-bold leading-relaxed cursor-pointer mr-4 py-2 whitespace-nowrap uppercase text-gray-800 sm:mr-0"
          >
            <Image className="image" src={logo} alt="Page's logo" width={100} height={50} />
          </Link>
        </div>

        <button onClick={toggleValue} className="hidden ls:inline burger" type="button">
          <BurgerMenu />
        </button>

        <div className="flex flex-grow items-center z-50 transition justify-end duration-100 sm:justify-center sm:text-center ls:w-full ls:absolute ls:top-12 ls:-bottom-72 ls:m-auto">
          <ul className={!value ? 'ls:hidden flex items-center gap-x-4 list-none ml-auto transition-all duration-100' : 'menu-burger fixed inset-0 p-4 list-none flex gap-y-5 ml-auto transition-all duration-300 ls:flex-col sm:justify-center ls:w-full ls:m-auto ls:items-center'}>
            <NavLink background={pathname === "/" ? backgroundLink : ""} href="/">Home</NavLink>
            <NavLink background={pathname === "/portfolio" ? backgroundLink : ""} href="/portfolio">Projects</NavLink>
            <NavLink background={pathname === "#experience" ? backgroundLink : ""} href="/#experience">Experience</NavLink>
            <li className="w-full">
              <a
                href="https://drive.google.com/file/d/1HaaEWzGIoIe0r7qi42Da-22_oMI7yNvP/view?usp=drive_link"
                target="_blank"
                className="border-resume px-3 py-2 border-2 rounded-md flex items-center text-sm uppercase font-bold leading-snug text-gray-800 transition duration-500 sm:border-4 ls:w-full ls:py-5 ls:justify-center"
              >
                CV
              </a>
            </li>
            <li className="w-full px-3 py-2 flex justify-center items-center ls:py-4">
              <button className="w-full flex justify-center" onClick={toggleTheme}>
                {theme === 'dark' ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-86 text-gray-800" />}
              </button>
            </li>
            {value &&
              <li className="w-full px-3 py-2 flex justify-center items-center">
                <button
                  className="close-btn flex items-center justify-center gap-2 p-2 cursor-pointer border-none rounded-md"
                  onClick={toggleValue}>
                  <span className="text-xl font-black">X</span> Dismiss
                </button>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
