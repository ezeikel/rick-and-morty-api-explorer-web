'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { HEADER_LINKS } from '@/constants';

const Header = () => {
  const pathname = usePathname();

  return (
    <header
      className="bg-muted/40 px-6 py-4 flex items-center justify-between gap-4"
      id="header"
    >
      <h1 className="text-2xl font-bold">Rick and Morty API Explorer</h1>
      <nav className="flex items-center gap-4">
        {HEADER_LINKS.map((link) => (
          <Link key={link.href} href={link.href}>
            <Button variant={pathname === link.href ? 'secondary' : 'outline'}>
              {link.label}
            </Button>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
