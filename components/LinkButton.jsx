import Link from 'next/link';
import UrlLink from './UrlLink';

const LinkButton = ({ href, linkName }) => {
  const notExternalUrl = href.startsWith('/') || href.startsWith('#');

  if (notExternalUrl) {
    return (
      <Link href={href}>
        <UrlLink>{linkName}</UrlLink>
      </Link>
    );
  } else {
    return (
      <UrlLink
        href={href}
        target="_blank"
      >
        {linkName}
      </UrlLink>
    )
  };
};

export default LinkButton;
