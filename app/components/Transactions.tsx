import React from "react";
import TransactionAction from "./TransactionAction";

const Transactions = () => {
  return (
    <section>
      <h2 className="text-black_12 text-xl font-medium">
        Transactions | This Month
      </h2>
      <div className="card bg-black_100 mt-3 p-3 pb-6 rounded-[8px]">
        <TransactionAction />
      </div>
    </section>
  );
};

export default Transactions;
