import Image from "next/image";

const Credits = () => {
  return (
    <div className=" w-full px-3 py-1.5 bg-tertiary_navbar rounded-sm text-black_100 flex items-center gap-3">
      <div className=" p-1.5 bg-wallet_background rounded-sm">
        <Image
          src="/icons/others/wallet.svg"
          width={24}
          height={24}
          alt="wallet"
        />
      </div>
      <div>
        <p className=" text-[13px] font-normal opacity-80">Available credits</p>
        <h4 className=" text-base font-medium">222.10</h4>
      </div>
    </div>
  );
};

export default Credits;
