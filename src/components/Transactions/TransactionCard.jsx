import React from "react";

const TransactionCard = ({ icon: Icon, name, amount }) => {
  return (
    <div className="flex p-5 gap-x-5 items-center border-[1px] border-[#dedddb] rounded-2xl w-[250px]">
      <Icon className="w-11 h-11 bg-white rounded-full p-2 text-green-600" />
      <div className="">
        <h1 className="text-[13px]">{name}</h1>
        <h1 className="text-[25px] font-bold ">${amount}</h1>
      </div>
    </div>
  );
};

export default TransactionCard;
