// 'use client'
// import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { DisclosureClient } from "@/components/DisclosureClient";


interface NavbarProps {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  topnav: {
    id: number;
    logoLink: {
      id: number;
      text: string;
      href: string;
      image: {
        id: number;
        url: string;
        alternativeText: string | null;
        name: string;
      };
    };
    link: {
      id: number;
      href: string;
      text: string;
      external: boolean;
    }[];
    cta: {
      id: number;
      href: string;
      text: string;
      external: boolean;
    };
  };
  meta: Record<string, any>;

}

interface NavbarComponentProps {
  headerData: NavbarProps;
}

  export function Navbar({ headerData }: Readonly<NavbarComponentProps>) {


    if (!headerData) return null;
    const navigation = headerData.topnav.link;
    console.log('navigation.....',navigation);
    // Extract all the href values and treat them as slugs (excluding '/')
    const pages = {
      page: navigation.map((item: { href: string , id: number}) => {
          const slug = item.href.startsWith('/') ? item.href.slice(1) : item.href;
          const id = item.id;
          return {
            id,
            slug
          };
        })
    };
    console.log('PAGES....',pages);
    const cta = headerData.topnav.cta;

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}

        <DisclosureClient topnav={headerData.topnav} />

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu:any, index :any) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                   href={`/${menu.href.replace('/', '')}`}
                  // href={menu.href}
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link
            href={cta.href}
            className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
            target={cta.external ? "_blank" : "_self"}
          >
            {cta.text}
          </Link>
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}


