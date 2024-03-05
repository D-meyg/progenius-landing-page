"use client";

import { PrivateNetwork } from "./privatenetwork";
import { useState } from "react";
import { Opportunities } from "./opportunities";


export const Form = () => {
  const [index, setIndex] = useState(0);

  


  return (
    <div className="">
      <div className="flex mb-[34px]">
        <div
          style={{
            borderColor: index === 0 ? "white" : "transparent",
            fontWeight: index === 0 ? 600 : 400,
          }}
          className="flex justify-center p-[10px] border-b-[3px] grow  cursor-pointer"
          onClick={() => setIndex(0)}
        >
          <span className="text-white text-base leading-[28px] font-outfit">
            Join Private Network
          </span>
        </div>
        <div
          style={{
            borderColor: index === 1 ? "white" : "transparent",
            fontWeight: index === 1 ? 600 : 400,
          }}
          className="flex justify-center p-[10px] border-b-[3px] grow font-medium cursor-pointer"
          onClick={() => setIndex(1)}
        >
          <span className="text-white text-base leading-[28px] font-outfit">
            Seeking Opportunities
          </span>
        </div>
      </div>
      {index === 0 ? <PrivateNetwork /> : <Opportunities />}
    </div>
  );
};
