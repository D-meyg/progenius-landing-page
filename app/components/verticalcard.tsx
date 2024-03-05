import Image from "next/image";
import { Tick, VerticalArrowRight, VerticalArrowLeft } from "./icons";
import { MotionDiv } from "./motion/motion";

export const VerticalCard = ({
  image,
  title,
  subtitles,
  arrowRight,
  arrowLeft,
  delay,
}: {
  image: string;
  title: string;
  subtitles: string[];
  arrowRight?: boolean;
  arrowLeft?: boolean;
  delay?: number;
}) => {
  return (
    <MotionDiv delay={delay}>
      <div className="rounded-[32px] border-[2px] border-[rgba(255,255,255,0.10)] px-[40px] py-[43px] flex flex-col gap-[16px] grow justify-between">
        <div className="flex flex-col gap-6">
          <div className="w-[64px] h-[64px] relative">
            <Image sizes="100%" src={image} alt={image} fill={true} />
          </div>
          <h4 className="text-lg text-white font-bold text-outfit traacking-[-0.4px] leading-[28px]">
            {title}
          </h4>
          {subtitles.map((subtitle, index) => {
            return (
              <div key={index} className="flex items-start gap-[8px]">
                <div className="w-[24px] h-[24px] flex items-center">
                  <Tick />
                </div>
                <div className="text-sm font-outfit font-medium text-white/[0.6] flex items-center">
                  <span>{subtitle}</span>
                </div>
              </div>
            );
          })}
        </div>
        {arrowRight && (
          <div className="W-full hidden md:block">
            <VerticalArrowRight />
          </div>
        )}
        {arrowLeft && (
          <div className="W-full hidden md:block">
            <VerticalArrowLeft />
          </div>
        )}
      </div>
    </MotionDiv>
  );
};
