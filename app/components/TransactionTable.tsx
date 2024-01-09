import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { orders } from "@/lib/constants";
import Image from "next/image";

const TransactionTable = () => {
  return (
    <Table className=" mt-3">
      <TableHeader>
        <TableRow className="bg-black_95 text-black_30 rounded-[4px] hover:bg-black_95 ">
          <TableHead className="w-1/4 ">Order ID</TableHead>
          <TableHead className=" w-1/4 text-left">
            Order date
            <Image
              src="/icons/others/Triangle-Icon.svg"
              width={8}
              height={8}
              alt="soft icon"
              className="inline-block ml-1"
            />
          </TableHead>
          <TableHead className="w-1/4 text-right ">Order amount</TableHead>
          <TableHead className=" w-1/4  text-right">
            Transaction fees
            <Image
              src="/icons/others/Info.svg"
              width={18}
              height={18}
              alt="info icon"
              className="inline-block ml-1"
            />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className=" border-b">
        {orders.map((order) => (
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
            <TableCell className="text-right w-1/4">
              ₹{order.transactionFees}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TransactionTable;
