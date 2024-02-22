import Layout from "../components/Layout";
import Buttons from "../components/Buttons";
import Social from "../components/Social";

export default function Home() {
  return (
    <>
      <Layout title="Home">
        <div className="flex flex-col justify-around items-center mt-20 h-80 w-full ls:h-5/6 md:mt-16 lg:mt-24 2xl:mt-20">
          <h1 className="font-semibold text-center mb-12 text-4xl text-gray-700 md:mb-4">Hi!👋 I'm Camilo</h1>
          <p className="text-2xl text-gray-500 pb-12 text-center">
            I'm a Dedicated Frontend Developer located in Bucaramanga, Col 🇨🇴.
            <br />
            🚀 I specialize in crafting exceptional web experiences, with a focus on user-centric design and robust functionality. My skill set includes: HTML, CSS, JavaScript, React, Next, GIT, TailwindCSS, styled-components and SASS.
          </p>
          <Buttons />
        </div>
        <Social />
      </Layout>
    </>
  );
};
