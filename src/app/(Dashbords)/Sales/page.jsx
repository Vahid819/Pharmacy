import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Chart } from "@/components/Chart";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'; 

function Userdashbord() {
  return (
    <div className="w-full h-auto bg-white shadow-lg rounded-xl p-6 border border-gray-200">
      <AspectRatio ratio={6 /1}>
        <div className="mb-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Sale Distribution
          </h1>
          <p className="text-gray-600">
            This is all over platform Sales Generated
          </p>
        </div>
        <div className="bg-gray-50 h-3/5 flex p-4 rounded-lg shadow-inner justify-around">
        <div className="card bg-white shadow-md rounded-lg p-auto flex justify-center pl-6 flex-col w-46">
            <div className="flex items-center gap-1"><CurrencyRupeeIcon /> <h1 className="text-2xl">2.8k </h1><h1>(35%)</h1></div>
            <h1 className="text-sm">Total Sale</h1>
          </div>
          <div className="card bg-white shadow-md rounded-lg p-auto flex justify-center pl-6 flex-col w-46">
            <div className="flex items-center gap-1"><CurrencyRupeeIcon /> <h1 className="text-2xl">2.8k </h1><h1>(35%)</h1></div>
            <h1 className="text-sm">By Website</h1>
          </div>
          <div className="card bg-white shadow-md rounded-lg p-auto flex justify-center pl-6 flex-col w-46">
            <div className="flex items-center gap-1"><CurrencyRupeeIcon /> <h1 className="text-2xl">2.8k </h1><h1>(35%)</h1></div>
            <h1 className="text-sm">By Mobile</h1>
          </div>
          <div className="card bg-white shadow-md rounded-lg p-auto flex justify-center pl-6 flex-col w-46">
            <div className="flex items-center gap-1"><CurrencyRupeeIcon /> <h1 className="text-2xl">2.8k </h1><h1>(35%)</h1></div>
            <h1 className="text-sm">By Cash</h1>
          </div>
          <div className="card bg-white shadow-md rounded-lg p-auto flex justify-center pl-6 flex-col w-46">
            <div className="flex items-center gap-1"><CurrencyRupeeIcon /> <h1 className="text-2xl">2.8k </h1><h1>(35%)</h1></div>
            <h1 className="text-sm">By Agent</h1>
          </div>
        </div>
      </AspectRatio>
    </div>
  );
}

export default Userdashbord;
