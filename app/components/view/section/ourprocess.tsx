import Image from "next/image";
import { Wrapper } from "../../wrapper";
import { StepCard } from "../../stepcard";
import { MotionDiv } from "../../motion/motion";

export const OurProcess = () => {
  return (
    <div className="pt-[60px] pb-[80px]">
      <Wrapper>
        <div className="flex flex-col gap-[34px] md:max-w-[1300px] md:w-full mx-auto">
          <div className="flex flex-col gap-6 items-start">
            <div className="w-[64px] h-[64px] relative text-white">
              <Image src="/assets/process.png" alt="process" fill={true} />
            </div>
            <MotionDiv>
              <div className="flex flex-col gap-2 font-outfit">
                <h4 className="text-[32px] font-bold tracking-[-0.8px] leading-[46px] text-white">
                  Our{" "}
                  <span className="text-[32px] textg font-outfit font-bold">
                    Process
                  </span>
                </h4>
                <small className="text-white/[0.70] mt-[8px] text-lg leading-[28px] font-light md:flex flex-col">
                  <span>
                    ​This is not a get rich quick scheme. If you{"'"}re looking
                    for a magic crypto formula that instantly brings in
                  </span>
                  <span>
                    a lot of cash, I can tell you this is not for you. But for
                    those willing to learn, put in effort, and have.
                  </span>
                  <span>patience, the possibilities are vast.</span>
                </small>
              </div>
            </MotionDiv>
          </div>
          <div className="flex gap-6 flex-col md:flex-row">
            <StepCard
              image="/assets/one.png"
              text="We track crypto’s wealthiest traders & investors to find out what they're buying, selling & trading in real-time."
              delay={0.1}
            />
            <StepCard
              image="/assets/two.png"
              text="We combine this research with macro, technical & sentiment analysis."
              delay={0.3}
            />
            <StepCard
              image="/assets/three.png"
              text="We distil this data into simple insights to help you make informed decisions & capitalise on hidden opportunities early."
              delay={0.5}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
