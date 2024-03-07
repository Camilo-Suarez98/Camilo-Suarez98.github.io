import Link from 'next/link';

const LinkButton = ({ href, linkName }) => {
  const notExternalUrl = href.startsWith('/') || href.startsWith('#');

  if (notExternalUrl) {
    return (
      <Link href={href}>
        <a className="button buttons-color-letter w-48 my-3 text-center ml-2 rounded-3xl py-5 text-indigo-50 font-bold transition-all duration-500 hover:text-blue-50 hover:bg-blue-700 active:transform hover:-translate-y-3 ls:ml-0 ls:mt-2" rel="noreferrer">
          {linkName}
        </a>
      </Link>
    );
  } else {
    return (
      <a
        className="button buttons-color-letter w-48 my-3 text-center ml-2 rounded-3xl py-5 text-indigo-50 font-bold transition-all duration-500 hover:text-blue-50 hover:bg-blue-700 active:transform hover:-translate-y-3 ls:ml-0 ls:mt-2"
        target='_blank'
        rel="noreferrer"
        href={href}
      >
        {linkName}
      </a>
    )
  }
};

export default LinkButton;
