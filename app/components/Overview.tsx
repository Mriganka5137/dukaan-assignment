import Card from "./Card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Overview = () => {
  return (
    <section className="flex flex-col gap-6">
      <div className=" flex justify-between items-center">
        <h3 className=" text-xl font-medium">Overview</h3>
        <Select defaultValue="last-month">
          <SelectTrigger className="w-[137px] text-black_30 font-normal border px-[14px] py-1.5 rounded-sm border-black_85 bg-black_100">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent className="bg-black_100">
            <SelectItem value="last-month">Last Month</SelectItem>
            <SelectItem value="last-week">Last Week</SelectItem>
            <SelectItem value="yesterday">Yesterday</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex w-full justify-between gap-5 max-md:flex-col">
        <Card title="Online orders" amount="231" />
        <Card title="Amount received" amount="₹23,92,312.19" />
      </div>
    </section>
  );
};

export default Overview;
