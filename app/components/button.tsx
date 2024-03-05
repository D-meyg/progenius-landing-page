"use client";

import { useState } from "react";
import { PopupModal } from "react-calendly";
import { useIframe } from "../context/iframecontext";

export const Button = ({
  text,
  solid,
  width,
  schedule,
}: {
  text: string;
  solid?: boolean;
  width?: string;
  schedule?: boolean;
}) => {
  const { open, setOpen } = useIframe()

  const style = {
    width: width,
  };

  const handleCLick = () => {
    if (!schedule) return;
    setOpen(true);
  };

  return (
    <>
      
      <span className="self-stretch md:self-auto w-full md:w-auto">
        
        {solid && (
          <button
            style={style}
            className="group text-white font-outfit rounded-[50px] text-[19.2px] w-full hover:text-black  md:w-[226px] border-none h-[67px] overflow-hidden relative"
            onClick={handleCLick}
          >
            <div className="absolute w-full h-full top-0 flex justify-center items-center translate-y-0 group-hover:translate-y-[-110%] group-hover:transition-transform bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] transition-colors duration-[.5s] ease-[cubic-bezier((.19,1,.22,1)] hover:bg-gradient-to-r hover:from-[#BB2Bff] hover:to-[#2B59FF]">
              {text}
            </div>
            <div className="absolute w-full h-full top-0 flex justify-center items-center transition-transform duration-[.1s] translate-x-[-100%] group-hover:translate-x-0 bg-white">
              {text}
            </div>
          </button>
        )}
        {!solid && (
          <button className="group text-white font-outfit rounded-[50px] text-[19.2px] w-full md:w-[226px] border-[1px] border-[#2B59FF] min-h-[67px] flex items-center  hover:text-black transition-colors duration-[.5s] ease-[cubic-bezier((.19,1,.22,1)] justify-center relative overflow-hidden">
            <div className="absolute w-full h-full flex justify-center items-center translate-y-0 group-hover:translate-y-[-110%] group-hover:transition-transform">
              {text}
            </div>
            <div className="absolute w-full h-full flex justify-center items-center transition-transform duration-[.1s] translate-x-[-100%] group-hover:translate-x-0 bg-white">
              {text}
            </div>
          </button>
        )}
      </span>
    </>
  );
};
