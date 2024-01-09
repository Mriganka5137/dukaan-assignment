import LocalSearch from "./LocalSearch";
import SortDownload from "./SortDownload";

const TransactionAction = () => {
  return (
    <div className="flex w-full justify-between items-center">
      <LocalSearch />
      <SortDownload />
    </div>
  );
};

export default TransactionAction;
