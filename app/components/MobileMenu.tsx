import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Credits from "./Credits";
import Links from "./Links";
import StoreOwner from "./StoreOwner";
import Sidebar from "./Sidebar";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className=" md:hidden">
        <Image
          src="/icons/others/hamburger.svg"
          width={40}
          height={40}
          alt="menu"
        />
      </SheetTrigger>
      <SheetContent className="w-fit p-0">
        <aside className="w-56 h-full bg-secondary_navbar px-2.5 py-4 flex flex-col justify-between ">
          <div>
            <StoreOwner />
            <Links />
          </div>
          <Credits />
        </aside>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
