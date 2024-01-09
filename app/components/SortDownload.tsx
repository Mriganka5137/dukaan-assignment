import Image from "next/image";

const SortDownload = () => {
  return (
    <div className=" flex gap-3 items-center max-md:hidden">
      <button className="flex items-center border py-1.5 px-3 rounded-sm border-black_85 gap-1.5 text-black_30">
        Sort
        <Image
          src="/icons/others/sort.svg"
          width={16}
          height={16}
          alt="sort"
          className="cursor-pointer"
        />
      </button>
      <button className=" border border-black_85 p-2 rounded-sm">
        <Image
          src="/icons/others/download.svg"
          width={20}
          height={20}
          alt="download"
          className="cursor-pointer"
        />
      </button>
    </div>
  );
};

export default SortDownload;
