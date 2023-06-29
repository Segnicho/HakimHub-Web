import Image from "next/image";
import { HiChat } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";

import { cross } from "@/public";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { navItems } from "@/data/layout";
const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("/");
  const setActiveAndToggle = (current: string) => {
    setActive(current);
    setToggle(!toggle);
  };

  return (
    <nav className="sticky flex top-0 justify-between px-5 z-50 bg-white py-2 shadow-sm">
      <Link href="/" className="flex items-center" onClick={()=>setActive("/")}>
        <Image src={cross} alt="Hakimhub's logo" className="scale-75" />
        <span className="font-bold text-[20px] pt-1">
          Hakim<span className="text-primary">Hub</span>
        </span>
      </Link>
      <div className="flex font-medium text-xl mr-10">
        <div className="hidden md:flex gap-9">
          {navItems.map((navItem, index) => (
            <Link
              href={navItem.href}
              key={index}
              onClick={() => setActive(navItem.href)}
              className={clsx(
                "font-semibold pt-2",
                active === navItem.href ? " text-primary" : "text-tertiary-text"
              )}
            >
              {navItem.name}
            </Link>
          ))}
        </div>
      </div>
      <div
        className="md:hidden flex flex-col "
        onClick={() => setToggle(!toggle)}
      >
        <AiOutlineMenu className="w-7 h-7 cursor-pointer" />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } flex-col gap-4 p-6 black-gradient absolute top-12 right-2 mx-4 my-2 min-w-[140px] rounded-xl
          z-50 bg-gray-100 bg-opacity-100
          `}
        >
          {navItems.map((navItem, index) => (
            <Link
              href={navItem.href}
              key={index}
              className={clsx(
                "font-semibold",
                active === navItem.href ? "text-primary" : "text-tertiary-text"
              )}
              onClick={() => setActiveAndToggle(navItem.href)}
            >
              {navItem.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
