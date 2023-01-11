import Layout from "../components/Layout"
import Projects from "../components/Projects"

const portfolio = () => {
    return(
        <>
            <Layout title="Portfolio">
                <h1 className="font-semibold text-4xl text-gray-700 text-center pb-8">Projetcs</h1>
                <Projects />
            </Layout>
        </>
    )
}

export default portfolio
