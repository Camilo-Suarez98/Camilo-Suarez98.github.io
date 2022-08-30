import Layout from "../components/Layout"
import Button from "../components/Button"
import Social from "../components/Social"

export default function Home ({ children }) {
  return (
    <div className="h-screen w-full bg-blue-500">
      <Layout title="Home">
        <div children={children} className="flex flex-col justify-around items-center h-72 w-full text-gray-50">
          <h1 className="font-semibold text-4xl text-blue-100">Camilo Suarez</h1>
          <p className="text-2xl text-center w-8/12">
            I'm a Frontend Developer with expertise in HTML, CSS, Javascript, Typescript, ReactJS, NextJS, Tailwind, styled-components, CSS in JS and GIT, looking 
            for a Job in a company that allows me to put into practice my knowledge and learn much more.
          </p>
          <Button />
        </div>
        <Social />
      </Layout>
    </div> 
  )
}
