"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";

import Image from "next/image";
import useOrderStore from "../payments/store";

const TransactionTable = () => {
  const [sortedList, setSortedList] = useState(false);

  const orderList = useOrderStore((s) => s.Orders);
  const sortByDate = useOrderStore((s) => s.sortedList);

  return (
    <Table className=" mt-3">
      <TableHeader className=" ">
        <TableRow className="bg-black_95 text-black_30 rounded-[4px] hover:bg-black_95  ">
          <TableHead className="w-1/4">Order ID</TableHead>
          <TableHead className=" w-1/4 text-left">
            Order date
            <Image
              src="/icons/others/Triangle-Icon.svg"
              width={8}
              height={8}
              alt="soft icon"
              className="inline-block ml-1 cursor-pointer"
              onClick={() => {
                if (!sortedList) {
                  sortByDate();
                  setSortedList(true);
                  return;
                }
              }}
            />
          </TableHead>
          <TableHead className="w-1/4 text-right ">Order amount</TableHead>
          <TableHead className=" w-1/4  text-right max-md:hidden">
            Transaction fees
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src="/icons/others/Info.svg"
                    width={18}
                    height={18}
                    alt="info icon"
                    className="inline-block ml-1"
                  />
                </TooltipTrigger>
                <TooltipContent className="bg-black_100">
                  <p className=" text-xs text-black_50">GST + Service tax</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className=" border-b ">
        {orderList.map((order) => (
          <TableRow
            key={order.orderId}
            className="bg-black_100 text-black_12 font-normal rounded-[4px] text-[14px]"
          >
            <TableCell className="w-1/4 text-primary_blue">
              {order.orderId}
            </TableCell>
            <TableCell className="w-1/4">{order.orderDate}</TableCell>
            <TableCell className="w-1/4 text-right">
              ₹{order.orderAmount}
            </TableCell>
            <TableCell className="text-right w-1/4 max-md:hidden">
              ₹{order.transactionFees}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TransactionTable;
