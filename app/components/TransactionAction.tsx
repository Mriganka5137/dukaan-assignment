import Image from "next/image";
import React from "react";

const TransactionAction = () => {
  return (
    <div className="flex w-full justify-between">
      <div className="w-[248px] border border-black_85 py-2.5 px-4 rounded-[4px] bg-black_100 flex items-center gap-2">
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
        />
      </div>
      <div className=" flex gap-3">
        <button className="flex items-center border py-1.5 px-3 rounded-sm border-black_85 gap-1.5 text-black_30">
          Sort
          <Image
            src="/icons/others/sort.svg"
            width={18}
            height={18}
            alt="sort"
          />
        </button>
        <button className=" border border-black_85 p-2.5 rounded-sm">
          <Image
            src="/icons/others/download.svg"
            width={20}
            height={20}
            alt="download"
          />
        </button>
      </div>
    </div>
  );
};

export default TransactionAction;
