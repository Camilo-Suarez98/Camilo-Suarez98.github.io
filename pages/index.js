import Layout from "../components/Layout";
import Button from "../components/Button";
import Social from "../components/Social";

export default function Home() {
  return (
    <>
      <Layout title="Home">
        <div className="flex flex-col justify-around items-center mt-20 h-80 ls:h-5/6 w-full md:mt-16 lg:mt-24 2xl:mt-20">
          <h1 className="font-semibold text-center mb-12 text-4xl text-gray-700 md:mb-4">Hi!👋 I'm Camilo</h1>
          <p className="text-2xl text-gray-500 pb-12 text-center">

            I'm a Dedicated FullStack Developer with a deep passion for frontend development based in Bucaramanga, Col 🇨🇴.
            <br />
            🚀 I specialize in crafting exceptional web experiences, with a focus on user-centric design and robust functionality. My skill set includes:
            <br />
            🌱 I'm on a constant journey of learning and self-improvement, always aiming to be a better programmer. Currently, I'm seeking new opportunities that challenge and expand my skills as a Fullstack Developer with a strong Frontend passion.
          </p>
          <Button />
        </div>
        <Social />
      </Layout>
    </>
  );
};
