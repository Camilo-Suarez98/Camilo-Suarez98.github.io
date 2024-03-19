import Layout from "/components/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import Projects from "/components/Projects";
import TopArrow from "../components/TopArrow";

const queryClient = new QueryClient();

const portfolio = () => {
  return (
    <>
      <Layout title="Projects">
        <h1 className="font-semibold text-4xl text-center mb-8">Projects</h1>
        <QueryClientProvider client={queryClient}>
          <Projects />
        </QueryClientProvider>
        <TopArrow />
      </Layout>
    </>
  );
};

export default portfolio;
