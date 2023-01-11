import { createContext, useState } from "react";

const ThemeContext = createContext('🌚')

function DarkModeProvider({children}) {
  const [darkMode, setDarkMode] = useState('🌚')

  return (
    <>
      <ThemeContext.Provider value={darkMode}>
        {children}
      </ThemeContext.Provider>
    </>
  )
}

export {DarkModeProvider, ThemeContext}