import Link from 'next/link';

function BreadcrumbsLink({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href} className="hover:underline base-semibold text-primary-600">
      {text}
    </Link>
  );
}

export default BreadcrumbsLink;
