import Link from 'next/link';

const LinkButton = ({ href = '', linkName }) => {
  const notExternalUrl = href.startsWith('/') || href.startsWith('#');

  if (notExternalUrl) {
    return (
      <Link
        href={href}
        className="button buttons-color-letter w-48 my-3 text-center ml-2 rounded-xl py-4 font-bold transition-all duration-500 active:transform hover:shadow-xl sm:w-full sm:rounded-xl ls:ml-0 ls:mt-2"
        rel="noreferrer"
      >
        {linkName}
      </Link>
    );
  } else {
    return (
      <a
        className="button buttons-color-letter w-48 my-3 text-center ml-2 rounded-xl py-4 font-bold transition-all duration-500 active:transform hover:shadow-xl sm:w-full sm:rounded-xl ls:ml-0 ls:mt-2"
        rel="noreferrer"
        href={href}
        target='_blank'
      >
        {linkName}
      </a>
    );
  };
};

export default LinkButton;
