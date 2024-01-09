"use client";
import Image from "next/image";
import useOrderStore from "../payments/store";
import { useRef } from "react";

const LocalSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const searchOrder = useOrderStore((state) => state.searchOrder);
  return (
    <form
      className="w-[248px] border border-black_85 py-2.5 px-4 rounded-[4px] bg-black_100 flex items-center gap-2 text-black_60"
      onSubmit={(event) => {
        event.preventDefault();
        if (inputRef.current) {
          searchOrder(inputRef.current.value);
        }
      }}
    >
      <Image
        src="/icons/others/search.svg"
        width={14}
        height={14}
        alt="search"
      />
      <input
        type="search"
        placeholder="Search by order ID..."
        className="focus-visible:outline-none"
        ref={inputRef}
      />
    </form>
  );
};

export default LocalSearch;
