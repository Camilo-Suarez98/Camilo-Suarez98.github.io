import 'tailwindcss/tailwind.css'
import "../public/style.css"
import { DarkModeProvider } from '../context/ThemeContext'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DarkModeProvider>
        <Component {...pageProps} />
      </DarkModeProvider>
    </>
  )
}

export default MyApp
