"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="w-full flex justify-between items-center border-b border-primary_11 py-5 px-10">
        <Image
          src="/icons/logo-salama-humberger.png"
          height={72}
          width={72}
          className="w-24 h-24 z-30"
        />
        <div
          className="z-30 transition-transform duration-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <AiOutlineClose
              size={35}
              color="#fff"
              className="transform transition-transform duration-500 rotate-180"
            />
          ) : (
            <CiMenuBurger
              size={35}
              color="#954321"
              className="transform transition-transform duration-300 rotate-0"
            />
          )}
        </div>
      </div>
      {/* Full-screen mobile menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-700"
        enterFrom="transform translate-x-full opacity-0"
        enterTo="transform translate-x-0 opacity-100"
        leave="transition ease-in duration-500"
        leaveFrom="transform translate-x-0 opacity-100"
        leaveTo="transform translate-x-full opacity-0"
      >
        <div className="fixed top-0 right-0 w-full h-screen bg-primary_12 z-20 flex flex-col items-center justify-between">
          <ul className="space-y-5 text-center text-white leading-[41.25px] text-[41.25px] font-garamond mt-44">
            <li>
              <Link href="/" onClick={() => setIsOpen(!isOpen)} className="">
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setIsOpen(!isOpen)}
                className=""
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                href="https://www.lesalamamarrakech.com/menu/lunch/"
                target="_blank"
                className=""
              >
                MENU
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="">
                GALLERY
              </Link>
            </li>
            <li>
              <Link href="#" className="">
                EVENTS
              </Link>
            </li>
          </ul>
          <Link
            href="#"
            className="bg-primary_11 text-white px-7 py-4 mb-10 text-[18px] font-medium"
          >
            Réserver
          </Link>
        </div>
      </Transition>
    </>
  );
};

export default Navbar;
