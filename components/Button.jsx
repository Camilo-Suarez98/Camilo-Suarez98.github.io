import Link from 'next/link';

const Button = ({ href, linkName }) => {
  return (
    <Link href={href}>
      <a className="projects buttons-color-letter w-48 my-3 text-center ml-2 rounded-3xl py-5 text-indigo-50 font-bold transition-all duration-500 hover:text-blue-50 hover:bg-blue-700 active:transform hover:-translate-y-3 ls:ml-0 ls:mt-2" rel="noreferrer">
        {linkName}
      </a>
    </Link>
  );
};

export default Button;
