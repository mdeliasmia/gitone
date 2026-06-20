import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from "../../assets/basket-full-vegetables.png";

const Values = () => {
  const leftValues = value.slice(0, 2).map((item) => {
    return (
      <div
        key={item.id}
        className="flex lg:flex-row-reverse items-center gap-7"
      >
        <div>
          <span className=" flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">
            {item.icon}
          </span>
        </div>

        <div className="lg:text-right">
          <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });
  const rightValues = value.slice(2).map((item) => {
    return (
      <div key={item.id} className="flex items-center gap-7">
        <div>
          <span className=" flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full">
            {item.icon}
          </span>
        </div>

        <div>
          <h3 className="text-zinc-800 text-3xl font-bold">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Values" />

        <div className="flex items-center gap-15 lg:gap-5 mt-15 flex-col lg:flex-row">
          {/* Left Values  */}
          <div className="lg:min-h-100 gap-15 flex flex-col justify-between">
            {leftValues}
          </div>
          <div className="hidden lg:flex w-1/2">
            <img src={Basket} alt="" />
          </div>

          {/* Right Values  */}
          <div className="lg:min-h-100 gap-15 flex flex-col justify-between">
            {rightValues}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

const value = [
  {
    id: 1,
    title: "Trust",
    para: "It is a long established fact that a reader will be distracted by the readable",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "It is a long established fact that a reader will be distracted by the readable",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "It is a long established fact that a reader will be distracted by the readable",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    para: "It is a long established fact that a reader will be distracted by the readable",
    icon: <FaSeedling />,
  },
];

// 2:34 Mint
