import React from "react";

const TransactionCard = ({ icon: Icon, name, amount }) => {
  return (
    <div className="p-5 border-[1px] bg-white border-[#dedddb] rounded-xl w-[250px] space-y-3">
      <div className="flex justify-between items-center">
        <h1 className="text-[15px]">{name}</h1>
        <Icon className="w-4 h-4  " />
      </div>
      <h1 className="text-[25px] font-semibold ">${amount}</h1>
    </div>
  );
};

export default TransactionCard;
