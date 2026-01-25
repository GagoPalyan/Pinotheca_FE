import Router from 'next/link';
import { twMerge } from 'tailwind-merge';
import { ILink } from '../types';

function Link({ to, text, customClassName = '' }: ILink) {
  return (
    <Router
      className={twMerge(
        'base-semibold text-primary-500 hover:text-primary-600 active:text-primary-700',
        customClassName,
      )}
      href={to}
    >
      {text}
    </Router>
  );
}

export default Link;
