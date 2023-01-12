import Layout from "../components/Layout"
import QueryProvider from "../components/Projects"

const portfolio = () => {
    return(
        <>
            <Layout title="Portfolio">
                <h1 className="font-semibold text-4xl text-gray-700 text-center pb-8">Projects</h1>
                <QueryProvider />
                <a href="#top" className="fixed right-9 bottom-5 border-2 border-gray-400 rounded-full ease-in transition-all duration-300">
                    <span className="material-symbols-outlined flex">
                        arrow_upward
                    </span>
                </a>
            </Layout>
        </>
    )
}

export default portfolio
