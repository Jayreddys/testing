import React from "react";
import { Play, Info } from "lucide-react";

const MovieInto = () => {
  return (
    <div className="absolute z-30 top-1/2 -translate-y-3/4 flex flex-col max-w-[50rem] left-[4rem] px-4 md:px-10 lg:px-16 lg:max-w-[80%]">
      <h1 className=" font-bold mb-3 text-shadow-lg text-2xl md:text-3xl lg:text-5xl">
        hello
      </h1>
      <div className="flex items-center justify-start gap-2 mb-6 text-slate-300">
        <p className="font-light">2024 |</p>
        <p className="font-light">PG-13</p>
      </div>
      <p
        className={`font-light text-[16px] text-slate-300 text-sm text-n-1 text-shadow-lg opacity-85 mb-8 max-w-full overflow-hidden max-h-[4.5rem] md:text-base lg:text-lg`}
      >
        hi
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex justify-start text-black px-3 py-2 bg-white gap-2 rounded-sm transition ease-in-out hover:scale-110">
          <Play
            color="black"
            style={{ fill: "black", stroke: "none" }}
            size={24}
          />
          <button className="font-bold">Play</button>
        </div>
        <div className="flex justify-start bg-gray-600 px-3 py-2 gap-2 rounded-sm transition ease-in-out hover:scale-110">
          <Info />
          <button className="font-bold">More info</button>
        </div>
      </div>
    </div>
  );
};

export default MovieInto;
