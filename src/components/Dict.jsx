import  {  useState } from "react";
import { IoRepeatOutline } from "react-icons/io5";
import { FaFlagUsa } from "react-icons/fa6";

function Dict() {
  const [sum, setSum] = useState(0);

  const handleSumChange = (event) => {
    const newSum = parseFloat(event.target.value);
    setSum(newSum);
  };
  
 

  const multipliedSum = sum * 12555 ;
  

  return (
    <div className="container mx-auto ">
      <h1 className="text-3xl text-violet-500 my-[50px]">
        Valyuta kalkulyatori
      </h1>
      <p className="text-2xl text-black">
        Uzum Bankda biz hamisha qulay kursdan foydalanamiz
      </p>
      <div className="flex mb-10">
        <div className="py-[50px] px-[50px] border w-[50%]">
          <div className="flex justify-between text-2xl text-slate-400 ">
            <p className="">Menda bor</p>
            <p>sum</p>
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Price
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="text-gray-500 sm:text-sm">sum</span>
              </div>
              <input
                type="number"
                value={sum}
                onChange={handleSumChange}
                id="price"
                className="block w-full py-1.5 pr-20 text-gray-900 border-0 rounded-md pl-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="0.00"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="currency" className="sr-only">
                  Currency
                </label>
                <select
                  id="currency"
                  name="currency"
                  className="h-full py-0 pl-2 text-gray-500 bg-transparent border-0 rounded-md pr-7 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>SUM</option>\
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[50px] px-[50px] border w-[50%] bg-slate-100">
          <div className="flex justify-between text-2xl text-slate-400 ">
            <p className="">Men qabul qilaman</p>
            <p>USD</p>
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Price
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                value={multipliedSum}
                readOnly
                onChange={handleSumChange}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="0.00"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="currency" className="sr-only">
                  Currency
                </label>
                <select
                  id="currency"
                  name="currency"
                  className="h-full py-0 pl-2 text-gray-500 bg-transparent border-0 rounded-md pr-7 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>
                    <FaFlagUsa /> USD
                  </option>
                  \
                </select>
              </div>
            </div>
            <p>1 USD = 12 555</p>
          </div>
        </div>
      </div>
      <button className="w-20 h-20 ml-[42%] mt-[-100px] absolute mx-auto border rounded-full bg-black text-violet-500 flex justify-center py-2 hover:bg-violet-500 hover:text-black">
        <IoRepeatOutline className="w-16 h-16" />
      </button>
    </div>
  );
}

export default Dict;
