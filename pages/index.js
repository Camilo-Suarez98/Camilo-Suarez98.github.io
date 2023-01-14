import Layout from "../components/Layout"
import Button from "../components/Button"
import Social from "../components/Social"

export default function Home ({ children }) {
  return (
    <>
      <Layout title="Home">
        <div className="flex flex-col justify-around items-center h-80 ls:h-5/6 w-full">
          <h1 className="font-semibold text-4xl text-gray-700 md:pb-4">Hi!👋 I'm Camilo</h1>
          <p className="text-2xl text-gray-500 text-center w-8/12">
            I'm a Frontend Developer living in Bucaramanga, Col.
            <br />
            I have expertise in HTML, CSS, JavaScript, TypeScript, ReactJS, NextJS, Tailwind, styled-components, CSS in JS and GIT.
            Always i'm looking for new opportunities to improve my skills as a Frontend Developer.
          </p>
          <Button />
        </div>
        <Social />
      </Layout>
    </>
  )
}