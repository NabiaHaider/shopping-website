import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
      <div className='container'>
        <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-blackish'>
       <Link className="navbar__link realtive" href="#">HOME</Link>
       <Link className="navbar__link realtive" href="#">CATEGORIES</Link>
       <Link className="navbar__link realtive" href="#">MEN'S</Link>
       <Link className="navbar__link realtive" href="#">WOMEN'S</Link>
       <Link className="navbar__link realtive" href="#">JEWELLRY</Link>
       <Link className="navbar__link realtive" href="#">PERFUME</Link>
       <Link className="navbar__link realtive" href="#">BLOG</Link>
       <Link className="navbar__link realtive" href="#">HOT OFFERS</Link>

        </div>
      </div>
    </div>
  )
}

export default Navbar;
