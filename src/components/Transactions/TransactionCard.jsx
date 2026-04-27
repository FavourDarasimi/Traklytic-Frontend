import React from "react";

const TransactionCard = ({ icon: Icon, name, amount }) => {
  return (
    <div className="p-4 md:p-5 border border-gray-200 bg-white rounded-xl w-full space-y-2 md:space-y-3">
      <div className="flex justify-between items-center">
        <h1 className="text-xs md:text-[15px] font-medium text-gray-600 truncate pr-1">
          {name}
        </h1>
        <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0 text-gray-500" />
      </div>
      <h1 className="text-xl md:text-[25px] font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
        ₦{amount.toLocaleString()}
      </h1>
    </div>
  );
};

export default TransactionCard;
