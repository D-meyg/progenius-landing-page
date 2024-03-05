import Image from "next/image";
import { Wrapper } from "../wrapper";

export const Footer = () => {
  return (
    <>
      <Wrapper>
        <div className="flex pt-[20px] pb-[68px] flex-col md:flex-row justify-between items-center gap-[32px] md:max-w-[1300px] mx-auto">
          <div className="w-[264px] h-[47px] relative order-2 md:order-1">
            <Image sizes="100%" src="/assets/logo.png" alt="logo" fill={true} />
          </div>
          <div className="flex items-center order-3 md:order-2">
            <span className="text-white/[0.5] tracking-[-0.356px] leading-[26px] font-outfit text-base font-light">
              Copyright © 2024 Progenius. All rights reserved
            </span>
          </div>
          <div className="flex items-center md:flex-row flex-col gap-6 order-1 md:order-3">
            <span className="text-white/[0.5] tracking-[-0.356px] leading-[26px] font-outfit text-base font-bold">
              {" "}
              Telegram
            </span>
            <span className="text-white/[0.5] tracking-[-0.356px] leading-[26px] font-outfit text-base font-bold">
              {" "}
              Twitter
            </span>
            <span className="text-white/[0.5] tracking-[-0.356px] leading-[26px] font-outfit text-base font-bold">
              {" "}
              Instagram
            </span>
            <span className="text-white/[0.5] tracking-[-0.356px] leading-[26px] font-outfit text-base font-bold">
              {" "}
              Youtube
            </span>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
