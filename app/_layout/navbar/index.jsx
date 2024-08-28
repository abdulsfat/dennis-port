'use client';

import { NavbarBrand } from './brand';
import { NavbarBrandSec } from './NavbarBrandSec';
import { NavbarList } from './list';

export function Navbar() {
  return (
    <nav className='absolute inset-x-0 top-0 z-10'>
      <div className='flex items-center justify-between px-8 py-4 text-background'>
        <NavbarList />
        {/* <NavbarBrandSec /> */}
        <NavbarBrand />
      </div>
    </nav>
  );
}
