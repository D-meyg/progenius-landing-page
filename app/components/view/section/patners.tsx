import Image from "next/image";
import { MotionDiv } from "../../motion/motion";
export const PatNers = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-6 items-center">
        <div className="relative w-[64px] h-[64px]">
          <Image sizes="100%" src="/assets/usertick.png" alt="usertick" fill={true} />
        </div>
        <MotionDiv>
          <div className="text-white text-[32px] font-outfit font-bold tracking-[-0.8px] leading-[34px]">
            <span>Our</span>{" "}
            <span className="text-[32px] font-bold textg font-outfit">
              Partners
            </span>
          </div>
        </MotionDiv>
      </div>
      <div className="flex items-center gap-[41px] md:gap-0 mt-[33px] flex-col md:flex-row">
        <MotionDiv delay={0.4}>
          <div className="w-[239px] h-[87px] relative">
            <Image sizes="100%" src="/assets/affyn.png" alt="affyn" fill={true} />
          </div>
        </MotionDiv>
        <MotionDiv delay={0.6}>
          <div className="w-[117px] h-[72px] relative md:mr-[65px]">
            <Image sizes="100%" src="/assets/devhouse.png" alt="devhouse" fill={true} />
          </div>
        </MotionDiv>
        <MotionDiv delay={0.8}>
          <div className="w-[162px] h-[64px] relative">
            <Image sizes="100%" src="/assets/athlerse.png" alt="athlerse" fill={true} />
          </div>
        </MotionDiv>
      </div>
    </div>
  );
};
