import Image from "next/image";
import logo from "@/public/images/store_logo.png";
import downChevron from "@/public/icons/others/ChevronDown.svg";
import Link from "next/link";
const StoreOwner = () => {
  return (
    <div className=" flex items-center gap-3">
      <div className="w-10 h-10 rounded-sm overflow-hidden">
        <Image
          alt="store logo"
          src={logo}
          className=" h-full w-full object-cover"
        />
      </div>
      <div className=" text-black_100 flex flex-col gap-1 w-28">
        <h4 className=" text-[15px] font-medium">Nishyan</h4>
        <Link
          href="#"
          className=" underline font-normal text-[13px] underline-offset-[3px] opacity-80"
        >
          Visit store
        </Link>
      </div>

      <Image src={downChevron} alt="down chevron"></Image>
    </div>
  );
};

export default StoreOwner;
