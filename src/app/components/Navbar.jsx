"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Alexandria } from "next/font/google";

const alexandria = Alexandria({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevValue) => !prevValue);
    console.log("Menu Open:", !isMenuOpen);
  };

  return (
    <nav
      className={`fixed flex items-center text-white justify-between bg-black h-[8vh] md:h-[10vh] px-2 md:px-10 w-[100%] z-[1000] overflow-hidden ${alexandria.className} `}
    >
      <div className="flex flex-row gap-4 items-center">
        <Link href="/">
          <Image
            src="/assignofast-logo.png"
            width={60}
            height={60}
            alt="ASSIGNOFAST Logo"
          />
        </Link>
        <a href="/" className=" inline">
          Assignofast
        </a>
      </div>

      <ul className="hidden md:flex flex-grow justify-center items-center lg:gap-12 md:gap-6 text-white tracking-wider">
        <Link href="/">
          <li className="hover:underline">Home</li>
        </Link>
        <Link href="/#features">
          <li className="hover:underline">Features</li>
        </Link>
        <Link href="/#faq">
          <li className="hover:underline">FAQs</li>
        </Link>
        <Link href="/#how">
          <li className="hover:underline">How To Use</li>
        </Link>
      </ul>

      <Image
        src="ieeecs-logo.svg"
        width={86}
        height={86}
        alt="IEEE CS Logo"
        className="hidden md:block"
      />

      {!isMenuOpen && (
        <div className="flex gap-4 p-4 lg:px-4 md:p-0">
          <button className="md:hidden block" onClick={toggleMenu}>
            <Image src="burger-menu.svg" width={30} height={30} />
          </button>
        </div>
      )}

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center font-bold z-[1001]">
          <button className="absolute top-5 right-5" onClick={toggleMenu}>
            <Image
              src="cross-icon.svg"
              width={30}
              height={30}
              alt="Close Menu"
            />
          </button>

          {/* Menu Items */}
          <ul className="flex flex-col gap-8 mt-12">
            <Link href="/">
              <li className="hover:underline" onClick={toggleMenu}>Home</li>
            </Link>
            <Link href="#features">
              <li className="hover:underline" onClick={toggleMenu}>Features</li>
            </Link>
            <Link href="#faq">
              <li className="hover:underline" onClick={toggleMenu}>FAQs</li>
            </Link>
            <Link href="/#how">
              <li className="hover:underline" onClick={toggleMenu}>How To Use</li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}
