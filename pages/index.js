import Layout from "../components/Layout"
import Button from "../components/Button"
import Social from "../components/Social"

export default function Home ({title, children}) {
  return (
    <div className="h-screen w-full bg-gray-800">
      <Layout title="Home">
        <div children={children} className="flex flex-col justify-around items-center h-72 w-full text-gray-50">
          <h1 className="font-semibold text-4xl">Camilo Suarez</h1>
          <p className="text-2xl text-center">I'm a Frontend Developer located in Bucaramanga, Col</p>
          <Button />
        </div>
        <Social />
      </Layout>
    </div> 
  )
}
