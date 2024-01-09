"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

const TransactionPagination = () => {
  const [active, setActive] = useState(10);

  return (
    <div className=" mt-5 max-md:hidden flex items-center gap-1 justify-center text-[14px] font-normal text-black_30 flex-wrap">
      <Button
        className=" border rounded-md mr-6 bg-black_100 flex items-center gap-1.5 "
        disabled={active === 1}
        onClick={() => {
          setActive(active - 1);
        }}
      >
        <Image
          src="/icons/others/ChevronRight.svg"
          width={18}
          height={18}
          alt="arrow"
          className=""
        />
        Previous
      </Button>
      <Button
        onClick={() => setActive(1)}
        className={`${
          active === 1 && "bg-primary_blue text-black_100 hover:bg-primary_blue"
        } rounded-md `}
      >
        1
      </Button>
      <p className="px-1.5 py-1">...</p>
      {[10, 11, 12, 13, 14, 15, 16, 17, 18].map((item, index) => {
        return (
          <Button
            onClick={() => setActive(item)}
            key={index}
            className={`${
              active === item &&
              "bg-primary_blue text-black_100 hover:bg-primary_blue "
            }`}
          >
            {item}
          </Button>
        );
      })}

      <Button
        disabled={active === 18}
        className=" border rounded-md ml-6 bg-black_100 flex items-center gap-1.5 "
        onClick={() => {
          setActive(active + 1);
        }}
      >
        Next
        <Image
          src="/icons/others/ChevronRight.svg"
          width={18}
          height={18}
          alt="arrow"
          className="rotate-180"
        />
      </Button>
    </div>
  );
};

export default TransactionPagination;
