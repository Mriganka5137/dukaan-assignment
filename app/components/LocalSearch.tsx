import Image from "next/image";

const LocalSearch = () => {
  return (
    <div className="w-[248px] border border-black_85 py-2.5 px-4 rounded-[4px] bg-black_100 flex items-center gap-2">
      <Image
        src="/icons/others/search.svg"
        width={14}
        height={14}
        alt="search"
      />
      <input
        type="search"
        placeholder="Search by order ID..."
        className="focus-visible:outline-none"
      />
    </div>
  );
};

export default LocalSearch;
