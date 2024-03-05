import Image from "next/image";
import { Button } from "../../button";
import { Dispatch, SetStateAction } from "react";

export const Payment = ({
  selected,
  plan,
  setPlan,
  setIndex,
  handleSubmit
}: {
  selected: number;
  plan: string;
  setPlan: Dispatch<SetStateAction<string>>;
  setIndex:Dispatch<SetStateAction<number>>
  handleSubmit: (event: any) => Promise<void>
}) => {
  const isValid = plan !== "";

  const Plans = ["Monthly", "Yearly"];


  return (
    <div className="">
      <h5 className="text-base leading-[28px] text-white mb-[10px]">
        Choose your path to success
      </h5>
      <div className="flex flex-col gap-[32px]">
        <div className="px-[16px] h-[48px] border-[1px] md:w-[391px] border-white/[0.2] rounded-[24px] bg-transparent outline-none w-full items-center flex transition-all duration-1000 hover:border-[#2B59FF] cursor-pointer" onClick={() => setPlan('Monthly')}>
          <div className="flex justify-between pl-[14px] items-center grow-[1]">
            <div className="flex items-center gap-[4px] text-base text-white">
              <span>Monthly</span>
              <div className="h-[1px] w-[1px] bg-white rounded-full"></div>
              <span>$150/month</span>
            </div>
            {plan === "Monthly" ? (
              <div className="w-[20px] h-[20px] relative">
                <Image sizes="100%" src="/assets/Radio.png" alt="radio" fill={true} />
              </div>
            ) : (
              <div className="w-[20px] h-[20px] border-[1px] border-white/[0.2] rounded-full"></div>
            )}
          </div>
        </div>
        <div className="px-[16px] h-[48px] border-[1px] md:w-[391px] rounded-[24px] bg-transparent outline-none w-full items-center flex transition-all duration-1000 border-[#2B59FF] cursor-pointer relative" onClick={() => setPlan('Yearly')}>
          <div className="absolute top-[-30%] px-[14px] py-[2px] bg-white rounded-[12px] text-[12px]">
            <p className="save">Recommended - Save 25%</p>
          </div>
          <div className="flex justify-between pl-[14px] items-center grow-[1]">
            <div className="flex items-center gap-[4px] text-base text-white">
              <span>Yearly</span>
              <div className="h-[1px] w-[1px] bg-white rounded-full"></div>
              <span>$1,500/year</span>
            </div>
            {plan == "Yearly" ? (
              <div className="w-[20px] h-[20px] relative">
                <Image sizes="100%" src="/assets/Radio.png" alt="radio" fill={true} />
              </div>
            ) : (
              <div className="w-[20px] h-[20px] border-[1px] border-white/[0.2] rounded-full"></div>
            )}
          </div>
        </div>
      </div>
      <div className="hidden md:flex mt-[32px] relative" onClick={(e) => handleSubmit(e)}>
        {!isValid && (
          <div className="absolute w-full h-full bg-black/60 z-10 rounded-[50px]"></div>
        )}
        <Button solid text="Pay with crypto" width="391px" />
      </div>
      <div className="md:hidden flex mt-[32px] relative" onClick={(e) => handleSubmit(e)}>
        {!isValid && (
          <div className="absolute w-full h-full bg-black/60 z-10 rounded-[50px]"></div>
        )}
        <Button solid text="Pay with crypto"  />
      </div>
      <div className="mt-[34px] font-outfit text-white text-[19px] text-center font-bold cursor-pointer " onClick={() => setIndex(0)}>
        Previous step
      </div>
    </div>
  );
};
