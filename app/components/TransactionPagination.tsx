"use client";
import React, { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const TransactionPagination = () => {
  const [active, setActive] = useState(10);

  return (
    <Pagination className=" mt-5 max-md:hidden">
      <PaginationContent>
        <PaginationItem
          className=" border rounded-md mr-6"
          onClick={() => {
            if (active !== 1) setActive(active - 1);
            else setActive(active);
          }}
        >
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem
          onClick={() => setActive(1)}
          className={`${
            active === 1 && "bg-primary_blue text-black_100"
          } rounded-md`}
        >
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        {[10, 11, 12, 13, 14, 15, 16, 17, 18].map((item, index) => {
          return (
            <PaginationItem onClick={() => setActive(item)} key={index}>
              <PaginationLink
                href="#"
                className={`${
                  active === item && "bg-primary_blue text-black_100"
                }`}
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem
          className=" border rounded-md ml-6"
          onClick={() => {
            if (active !== 18) setActive(active + 1);
            else setActive(active);
          }}
        >
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default TransactionPagination;
