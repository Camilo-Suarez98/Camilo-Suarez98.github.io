import Layout from "/components/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import Projects from "/components/Projects";

const queryClient = new QueryClient();

const portfolio = () => {
  return (
    <>
      <Layout title="Projects">
        <h1 className="font-semibold text-4xl text-center mb-8">Projects</h1>
        <QueryClientProvider client={queryClient}>
          <Projects />
        </QueryClientProvider>
        <a href="#top" className="circle-arrow fixed flex justify-center items-center w-9 h-9 rounded-full right-9 bottom-5 animate-bounce ease-in transition-all duration-300 sm:right-4 sm:bottom-2.5 hover:bg-blue-700">
          <span className="material-symbols-outlined flex">
            arrow_upward
          </span>
        </a>
      </Layout>
    </>
  );
};

export default portfolio;
