"use client";

import { Wrapper } from "../../wrapper";
import { Dispatch, SetStateAction, useState } from "react";
import { SuccessFull } from "./successs";
import { Payment } from "./payment";
import { DetailsForm } from "./details";

export const Form = ({
  index,
  setIndex,
  selected,
  setSelection,
  fullname,
  handle,
  email,
  setFullname,
  setHandle,
  setEmail,
  plan,
  setPlan,
  handleSubmit,
}: {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  selected: number;
  setSelection: Dispatch<SetStateAction<number>>;
  fullname: string;
  handle: string;
  email: string;
  setFullname: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setHandle: Dispatch<SetStateAction<string>>;
  plan: string;
  setPlan: Dispatch<SetStateAction<string>>;
  handleSubmit: (event: any) => Promise<void>;
}) => {
  return (
    <div className="font-outfit mt-[24px] mb-[152px] w-full md:w-unset">
      <Wrapper>
        <div
          style={{
            paddingTop: index === 2 ? "58px" : "44px",
            paddingBottom: index === 2 ? "58px" : "44px",
          }}
          className="md:max-w-[524px] w-full px-[15px] md:px-[65px] md:py-[44px] border-2 border-white/[0.10] rounded-[32px]"
        >
          {index !== 2 && (
            <div className="flex flex-col items-center gap-[8px] mb-[34px]">
              <h4 className="text-white text-[28px] font-bold leading-[28px]">
                {index === 0 && "Enter your information"}
                {index === 1 && "Make payment"}
              </h4>
              <span className="leading-[28px] font-base text-white">
                {index !== 2 && `Step ${index + 1} of 2`}
              </span>
              <div className="flex gap-[8px]">
                <div className="w-[86px] h-[2px]"></div>
                <div className="w-[86px] h-[2px]"></div>
              </div>
            </div>
          )}
          {index === 0 ? (
            <DetailsForm
              fullname={fullname}
              email={email}
              handle={handle}
              setFullname={setFullname}
              setHandle={setHandle}
              setEmail={setEmail}
              setIndex={setIndex}
            />
          ) : (
            <Payment
              selected={0}
              plan={plan}
              setPlan={setPlan}
              setIndex={setIndex}
              handleSubmit={handleSubmit}
            />
          )}
        </div>
      </Wrapper>
    </div>
  );
};
