'use client';

import Logo from '@/components/shared/logo';
import Link from 'next/link';
import React from 'react';

function Header() {
  const headerPages = [
    {
      name: 'Artists',
      href: '/artists',
    },
    {
      name: 'Gallery',
      href: '/gallery',
    },
    {
      name: 'About Us',
      href: '/about-us',
    },
  ];

  return (
    <header className="px-4 py-6 flex justify-between items-center bg-neutral-50">
      <div className="flex gap-15 items-center">
        <Logo />
        {headerPages.map(({ name, href }) => (
          <Link key={href} href={href} className="text-md-600 text-zinc-950">
            {name}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Header;
