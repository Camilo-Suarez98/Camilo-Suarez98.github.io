import Layout from "../components/Layout"
import QueryProvider from "../components/Projects"

const portfolio = () => {
    return(
        <>
            <Layout title="Portfolio">
                <h1 className="font-semibold text-4xl text-gray-700 text-center pb-8">Projects</h1>
                <QueryProvider />
                <a href="#top" className="fixed flex justify-center items-center w-7 h-7 border-2 border-gray-400 rounded-full right-9 bottom-5 animate-bounce w-6 h-6 ease-in transition-all duration-300 sm:right-4 sm:bottom-2.5 hover:bg-blue-700">
                    <span className="material-symbols-outlined flex">
                        arrow_upward
                    </span>
                </a>
            </Layout>
        </>
    )
}

export default portfolio
