import Image from "next/image";
import { MotionDiv } from "@/app/components/motion/motion";
import { Wrapper } from "@/app/components/wrapper";

export const Learn = () => {
  return (
    <div className="flex items-center gap-[52px] md:gap-[175px] flex-col py-[105px] md:flex-row">
      <div className="flex flex-col gap-6 items-center md:items-start">
        <div className="w-[64px] h-[64px] relative text-white">
          <Image sizes="100%" src="/assets/question.png" alt="questionmark" fill={true} />
        </div>
        <div className="flex flex-col gap-2 font-outfit text-center md:text-left">
          <MotionDiv>
            <h6 className="text-lg leading-[28px] text-white md:px-0 px-[20px]">
              The question you{"'"}re probably asking yourself is...
            </h6>
          </MotionDiv>
          <MotionDiv delay={0.15}>
            <h4 className="text-[32px] font-bold tracking-[-0.8px] leading-[46px] text-white md:px-0 px-[20px]">
              How do I{" "}
              <span className="textg text-[32px] font-bold font-outfit">
                learn
              </span>
              {"  "}how to do it?
            </h4>
          </MotionDiv>

          <MotionDiv delay={0.25}>
            <Wrapper>
              <small className="text-white/[0.70] text-lg leading-[28px] font-light block md:flex flex-col">
                ​
                <span>
                  Well, if you were to come to us anytime before, you{"'"}d be
                  out of luck.{" "}
                </span>
                <span>These strategies were once closely guarded secrets.{" "}</span>
                <span>
                  But now, we{"'"}re revealing methods known only to the top
                  crypto investors.{" "}
                </span>
                <span>
                  These insights are invaluable, transformative, and finally,
                  within
                  {"  "}
                  <span className="textg text-lg font-outfit">your reach.</span>
                </span>
              </small>
            </Wrapper>
          </MotionDiv>
        </div>
      </div>
      <div className="relative w-[256px] h-[455px]">
        <Image sizes="100%" src="/assets/questionmark.png" alt="questionmark" fill={true} />
      </div>
    </div>
  );
};
