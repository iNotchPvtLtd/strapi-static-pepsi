'use client'
// import { useState, useEffect } from "react";
import React from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { StrapiImage } from "./StrapiImage";

import auth from  './../../public/authlogo.png';



interface FooterProps {
  footer: {
    id: number;
    description: string;
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
    colOneLinks: {
      id: number;
      href: string;
      text: string;
      external: boolean;
    }[];
    colTwoLinks: {
      id: number;
      href: string;
      text: string;
      external: boolean;
    }[];
    socialLinks: {
      id: number;
      heading: string;
      socialLink: SocialLink[];
    };
  };
}

interface SocialLink {
  id: number;
  href: string;
  text: string;
  external: boolean;
}
function iconSelect(link: SocialLink) {
  if (!link) return null;
  return (
    <SocialIcon
      network={link.text.toLocaleLowerCase()}
      url={link.href}
      target="_blank"
    />
  );
}

interface FooterComponentProps {
  footerData: FooterProps;
}

export function Footer({ footerData }: Readonly<FooterComponentProps>) {

  if (!footerData) return null;
  const footer = footerData.footer;

  const { logoLink, colOneLinks, colTwoLinks, socialLinks, description } = footer;
  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              <Link
                href={logoLink.href}
                className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
              >
                <StrapiImage
                  src={logoLink.image.url}
                  alt={logoLink.image.alternativeText || logoLink.image.name}
                  width={32}
                  height={32}
                  className="w-8"
                />
                <span>{logoLink.text}</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              {description}
            </div>

            <div className="mt-5">
              {/* <a
                href="https://inotchglobal.com/"
                target="_blank"
                rel="noopener"
                className="relative block w-44"
              > */}
                <Image
                  src={auth}
                  alt="Powered by iNotch Private Limited"
                  width={150}
                  height={44}
                />
              {/* </a> */}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {colOneLinks &&
                colOneLinks.map((item : any, index :any) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                  >
                    {item.text}
                  </Link>
                ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {colTwoLinks &&
                colTwoLinks.map((item : any, index :any) => (
                  <span
                    key={index}
                    // href={item.href}
                    className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                  >
                    {item.text}
                  </span>
                ))}
            </div>
          </div>
          <div>
            <div>{socialLinks.heading}</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              {socialLinks.socialLink &&
                socialLinks.socialLink.map((item :any, index :any) => (
                  <div key={index}>
                    <span className="sr-only">{item.text}</span>
                    {iconSelect(item)}
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()}. Made with ♥ by{" "}
          <a href="https://inotchglobal.com/" target="_blank" rel="noopener">
            iMakeSite.
          </a>{" "}
          updated by{" "}
          <a
            href="https://inotchglobal.com/"
            target="_blank"
            rel="noopener"
          >
            Saravana Goutham
          </a>{" "}
          Illustrations from{" "}
          <a href="https://inotchglobal.com/" target="_blank" rel="noopener ">
          iNotch Pvt Ltd.
          </a>
        </div>
      </Container>
      <Backlink />
    </div>
  );
}
const Backlink = () => {
  return (
    <a
      href="https://inotchglobal.com"
      target="_blank"
      rel="noopener"
      className="absolute flex px-3 py-1 space-x-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded shadow-sm place-items-center left-5 bottom-5 dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        className="w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="30" height="29.5385" rx="2.76923" fill="#362F78" />
        <path
          d="M10.14 21.94H12.24L15.44 12.18L18.64 21.94H20.74L24.88 8H22.64L19.58 18.68L16.36 8.78H14.52L11.32 18.68L8.24 8H6L10.14 21.94Z"
          fill="#F7FAFC"
        />
      </svg>

      <span>iNotch Private Limited</span>
    </a>
  );
};
