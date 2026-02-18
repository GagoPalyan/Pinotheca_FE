import Icon from '@/components/shared/icon';
import Link from 'next/link';

interface IHeaderUserPages {
  href: string;
  name: string;
  icon: string;
  count: number;
}

function HeaderUserPages({ href, name, icon, count }: IHeaderUserPages) {
  const noteCount = count > 9 ? '9+' : count.toString();

  return (
    <div className="relative">
      <Link href={href} title={name}>
        <Icon name={icon} color="black" size={7} />
        {Boolean(count) && (
          <span className="absolute -right-2 -top-2 rounded-xl size-5 small-semibold text-center text-white bg-primary-600">
            {noteCount}
          </span>
        )}
      </Link>
    </div>
  );
}

export default HeaderUserPages;
