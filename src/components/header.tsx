"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const LinkHighlight = (content: string, link: string, index: number) => {
    if(pathname === "/"){
      return (
        <Link href={link} className={`${pathname === link?' ':''} hover:text-green-500 duration-150 p-2 px-3 text-black text-lg`} key={index}>
        {content}
      </Link>
      );
    }
    switch (pathname) {

      case "/":
        return (
          <Link href={link} className={`${pathname === link?'text-green-500 ':''} hover:text-green-500 duration-150 p-2 px-3 text-black text-lg`} key={index}>
            {content}
          </Link>
        );

        case "/pricing":
          return (
            <Link href={link} className={`${pathname === link?'text-green-500 ':''} hover:text-green-500 duration-150 p-2 px-3 text-black text-lg`} key={index}>
              {content}
            </Link>
          );

      case "/features":
        return (
          <Link href={link} className={`${pathname === link?'text-green-500':''}hover:text-green-500 duration-150 p-2 px-3 text-black text-lg`} key={index}>
            {content}
          </Link>
        );

      case "/about":
        return (
          <Link href={link} className={`${pathname === link?'text-green-500':''}hover:text-green-500 duration-150 p-2 px-3 text-black text-lg`} key={index}>
            {content}
          </Link>
        );

      default:
        return (
          <Link href={link} className={`hover:text-green-500 duration-150 p-2 px-3 text-black text-lg`} key={index}>
            {content}
          </Link>
        );
    }
  };

  // console.log(pathname);

  return (
    <>
    <div className={`flex  ${pathname === '/resources' ? 'text-heading ' : 'text-black '} items-center px-14 mt-4`}>
      <Link href={'/'} className='flex-auto'>
        <Image priority={true} src={'/logo.svg'} width={160} height={160} sizes='100vw' alt='logo' className=' ' />
      </Link>
      <ul className='flex gap-5 mr-20'>
        {NavContent.map(({ content, link }, index) => (
          LinkHighlight(content, link, index)
        ))}
      </ul>
      <Link className="bg-green-400 group hidden lg:inline-flex py-4 px-8 items-center justify-center leading-none font-medium text-black hover:text-black border border-black rounded-full hover:bg-green-200 transition duration-200"
        href={'/login'}>
          <span className="mr-2">Login</span>
          <span className="group-hover:rotate-45 transform transition duration-100">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 1L1 9" stroke="currentColor" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M9 8.33571V1H1.66429" stroke="currentColor" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </span>
        </Link>
    </div>
    </>
  );
};

export default Header;

const NavContent = [
  { content: "Home", link: '/' },
  { content: "Pricing", link: '/pricing' },
  { content: "Features", link: '/features' },
  { content: "Resources", link: '/resources' },
  { content: "About", link: '/about' },
];
