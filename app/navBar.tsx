"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ArrowDownFromLine, X } from "lucide-react";

export const NavBar = () => {

  const [visible, setVisible] = React.useState<boolean>(true)

  return (
    <>
      {visible ? (
        <nav className="w-fit gap-[1vw] flex flex-row items-center lg:mx-auto absolute top-[3vw] left-[3vw] md:left-[1vw] md:top-[1vw] lg:left-[50vw] lg:translate-x-[-50%] lg:top-[1vw]">
          <div className="flex items-center p-1 bg-opacity-80 bg-customBgSecondary border shadow-md rounded-full  text-white border-white/80  backdrop-blur-2xl backdrop-saturate-200 justify-center text-blue-gray-900">
            <div className="hidden lg:block">
              <ul className="flex flex-col gap-1 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:justify-center lg:gap-1">
                <li className="block px-[1vw] py-[.5vw] font-sans text-[1vw] antialiased font-medium leading-normal text-blue-gray-900">
                  <Link
                    href="/"
                    className="flex items-center transition-colors px-[1vw] py-[.5vw] rounded-full hover:text-white hover:bg-customBgPrimary"
                  >
                    Home
                  </Link>
                </li>
                <li className="block px-[1vw] py-[.5vw] font-sans text-[1vw] antialiased font-medium leading-normal text-blue-gray-900">
                  <Link
                    href="/upload"
                    className="flex items-center transition-colors  text-nowrap  px-[1vw] py-[.5vw] rounded-full hover:text-white hover:bg-customBgPrimary"
                  >
                    Generate PDF
                  </Link>
                </li>
                <li className="block px-[1vw] py-[.5vw] font-sans text-[1vw] antialiased font-medium leading-normal text-blue-gray-900">
                  <Link
                    href="/all-pdf"
                    className="flex items-center transition-colors text-nowrap  px-[1vw] py-[.5vw] rounded-full hover:text-white hover:bg-customBgPrimary"
                  >
                    All PDFs
                  </Link>
                </li>
                <li className="block px-[1vw] py-[.5vw] font-sans text-[1vw] antialiased font-medium leading-normal text-blue-gray-900">
                  <Link
                    href="/signup"
                    className="flex items-center transition-colors  px-[1vw] py-[.5vw] rounded-full hover:text-white hover:bg-customBgPrimary"
                  >
                    Signup
                  </Link>
                </li>
                <li className="block px-[1vw] py-[.5vw] font-sans text-[1vw] antialiased font-medium leading-normal text-blue-gray-900">
                  <Link
                    href="/login"
                    className="flex items-center transition-colors  px-[1vw] py-[.5vw] rounded-full hover:text-white hover:bg-customBgPrimary"
                  >
                    Login
                  </Link>
                </li>
                <li className="block px-[1vw] py-[.5vw] font-sans text-[1vw] antialiased font-medium leading-normal text-blue-gray-900">
                  <Link
                    href="/logout"
                    className="flex items-center transition-colors  px-[1vw] py-[.5vw] rounded-full hover:text-white hover:bg-customBgPrimary"
                  >
                    Logout
                  </Link>
                </li>
                <li className="block px-[1vw] py-[.5vw] font-sans text-[1vw] antialiased font-medium leading-normal text-blue-gray-900">
                  <Link
                    href="/dashboard"
                    className="flex items-center transition-colors  px-[1vw] py-[.5vw] rounded-full hover:text-white hover:bg-customBgPrimary"
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <button
              className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                </svg>
              </span>
            </button>
          </div>

          <X
            onClick={() => setVisible(!visible)}
            className="bg-customBgSecondary cursor-pointer hidden  text-white p-[.5vw] rounded-full lg:flex lg:justify-center lg:items-center h-[3vw] w-[3vw]"
          />
        </nav>
      ) : (
        <>
          <ArrowDownFromLine
            onClick={() => setVisible(!visible)}
            className="bg-customBgSecondary absolute top-[3vw] left-[3vw] md:left-[1vw] md:top-[1vw] lg:left-[50vw] lg:translate-x-[-50%] lg:top-[1vw] cursor-pointer text-white p-[.5vw] rounded-full flex justify-center items-center h-[3vw] w-[3vw]"
          />
        </>
      )}
    </>
  );
};
