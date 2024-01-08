import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar px-8 py-3 flex border-b border-[#d9d9d9] gap-4 justify-between bg-black_100">
      <div className=" flex items-center gap-4  w-1/3">
        <h3 className=" text-[15px] font-normal">Payments</h3>
        <h4 className=" flex text-black_30  text-[12px] gap-1.5">
          <Image
            alt="help"
            src="/icons/others/Help.svg"
            width={14}
            height={14}
          />
          How it works
        </h4>
      </div>
      <div className="w-1/3 flex bg-black_95 px-4 py-[9px] gap-2 rounded-md items-center">
        <Image
          src="/icons/others/search.svg"
          alt="search icon"
          width={16}
          height={16}
        />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search features, tutorials, etc."
          className=" w-full bg-transparent text-black_50 rounded-md font-normal text-[15px] focus-visible:outline-none"
        />
      </div>
      <div className=" flex gap-3 w-1/3 justify-end items-center">
        <div className=" w-10 h-10 bg-black_90 rounded-full flex items-center justify-center">
          <Image
            src="/icons/others/Group.svg"
            width={20}
            height={20}
            alt="group"
          />
        </div>
        <Image src="/icons/others/menu.svg" width={40} height={40} alt="menu" />
      </div>
    </div>
  );
};

export default Navbar;
