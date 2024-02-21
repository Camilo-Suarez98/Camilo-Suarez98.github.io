import Link from "next/link";

const Button = () => {
  return (
    <div className="flex w-full items-center justify-center ls:flex-col ls:pt-10 md:pt-6">
      <Link href="/portfolio">
        <a className="projects buttons-color-letter w-48 my-3 text-center mr-2 rounded-3xl py-5 text-indigo-50 font-bold transition-all duration-500 hover:text-blue-50 hover:bg-blue-500 active:transform hover:-translate-y-3 ls:mr-0 ls:mb-2" rel="noreferrer">
          View Projects
        </a>
      </Link>
      <Link href="/contact">
        <a className="projects buttons-color-letter w-48 my-3 text-center ml-2 rounded-3xl py-5 text-indigo-50 font-bold transition-all duration-500 hover:text-blue-50 hover:bg-blue-700 active:transform hover:-translate-y-3 ls:ml-0 ls:mt-2" rel="noreferrer">
          Contact me
        </a>
      </Link>
    </div>
  );
};

export default Button;
