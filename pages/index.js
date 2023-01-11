import Layout from "../components/Layout"
import Button from "../components/Button"
import Social from "../components/Social"
import { useContext } from "react"

export default function Home ({ children }) {
  return (
    <>
      <Layout title="Home">
        <div className="flex flex-col justify-around items-center h-72 w-full">
          <h1 className="font-semibold text-4xl text-gray-700">About me</h1>
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
