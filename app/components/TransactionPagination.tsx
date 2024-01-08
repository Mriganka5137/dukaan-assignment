import React from "react";
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
  return (
    <Pagination className=" mt-5">
      <PaginationContent>
        <PaginationItem className=" border rounded-md">
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className=" bg-primary_blue text-black_100">
            10
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">11</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">12</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">13</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">14</PaginationLink>
        </PaginationItem>{" "}
        <PaginationItem>
          <PaginationLink href="#">15</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">16</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">17</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">18</PaginationLink>
        </PaginationItem>
        <PaginationItem className=" border rounded-md">
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default TransactionPagination;
