"use client";

import Image from "next/image";
import { ArrowUp } from "./icons";
import Link from "next/link";

export const CryptoCard = ({
  image,
  name,
  subname,
  rate,
  index,
  link,
}: {
  image: string;
  name: string;
  subname: string;
  rate: string;
  index: number;
  link: string;
}) => {
  return (
    <>
      <div
        key={index}
        className="p-6 flex w-[296px] justify-between font-outfit items-center border-[1px] border-[#2B59FF] rounded-2xl bg-white/[0.06] cursor-pointer"
      >
        <div className="flex gap-[9px] items-center">
          <div className="w-[43px] h-[43px] relative">
            <Image sizes="100%" src={image} alt={name} fill={true} />
          </div>
          <div className="flex flex-col">
            <div className="text-white text-lg font-bold">
              <span>{name}</span>
            </div>
            <div className="text-sm opacity-[0.4] text-white font-light">
              <span>{subname}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[4px]">
          <ArrowUp />
          <div className="text-pg text-lg font-bold">
            <span>{rate}</span>
            <span>x</span>
          </div>
        </div>
      </div>
    </>
  );
};
