import Layout from "../components/Layout"
import Projects from "../components/Projects"

const portfolio = () => {
    return(
        <div className="bg-blue-500 text-white">
            <Layout title="Portfolio" />
            <Projects />
        </div>
    )
}

export default portfolio
