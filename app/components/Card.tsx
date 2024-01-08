import React from "react";
interface Props {
  title: string;
  amount: string;
}

const Card = ({ title, amount }: Props) => {
  return (
    <div className=" card p-5 w-1/2 bg-black_100 rounded-[8px]">
      <p className=" text-base font-normal text-black_30">{title}</p>
      <h2 className="mt-4 text-[32px] font-medium">{amount}</h2>
    </div>
  );
};

export default Card;
