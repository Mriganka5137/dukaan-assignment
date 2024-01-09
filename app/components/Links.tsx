"use client";
import { navbarLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Links = () => {
  const pathname = usePathname();
  return (
    <nav className=" flex flex-col gap-1 mt-6">
      {navbarLinks.map((link) => (
        <Link
          href={link.route}
          key={link.id}
          className={`${
            ((pathname.includes(link.route) && link.route.length > 1) ||
              pathname === link.route) &&
            "bg-tertiary_navbar"
          } flex gap-3 text-black_100 opacity-80 w-full px-4 py-2 rounded-sm hover:bg-black/20  `}
        >
          <Image
            src={link.iconSrc}
            alt={link.name}
            width={20}
            height={20}
            className="opacity-80"
          />
          <p className=" text-[14px] font-medium">{link.name}</p>
        </Link>
      ))}
    </nav>
  );
};

export default Links;
