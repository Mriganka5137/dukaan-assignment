import React from "react";
import Card from "./Card";

const Overview = () => {
  return (
    <section className="flex flex-col gap-6">
      <div className=" flex justify-between items-center">
        <h3 className=" text-xl font-medium">Overview</h3>
        <select
          name="filter"
          id="filter"
          className="text-black_30 font-normal border px-[14px] py-1.5 rounded-sm border-black_85"
        >
          <option value="last-month">Last Month</option>
          <option value="last-week">Last Week</option>
        </select>
      </div>
      <div className="flex w-full justify-between gap-5 max-md:flex-col">
        <Card title="Online orders" amount="231" />
        <Card title="Amount received" amount="₹23,92,312.19" />
      </div>
    </section>
  );
};

export default Overview;
