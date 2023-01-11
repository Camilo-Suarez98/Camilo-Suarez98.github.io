import Layout from "../components/Layout";
import Form from "../components/Form";

const contact = () => {
    return(
        <>
            <Layout title="Contact">
                <h1 className="font-semibold text-4xl text-gray-700 text-center pb-8">Contact</h1>
                <Form />
            </Layout>
        </>
    )
}

export default contact
