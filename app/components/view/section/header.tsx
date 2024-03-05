import { Button } from "../../button";
import { MotionSlide } from "../../motion/motion";
import { MotionDiv } from "../../motion/motion";
import { Wrapper } from "../../wrapper";
import Link from "next/link";

export const Header = () => {
  return (
    <Wrapper>
      <div className="flex flex-col items-center md:pt-[32px] pt-[51px] pb-[92px]">
        <h1 className="text-pw text-[42px] md:text-[60px] font-medium leading-[66px] text-center text-outfit hidden md:flex flex-col items-center relative">
          <MotionDiv>
            <span className="inline-block">
              Invest{" "}
              <span className="textg font-outfit [42px] md:text-[60px]">
                Smart<span className="line"></span>
              </span>{" "}
              in Crypto, with
            </span>
          </MotionDiv>
          <MotionDiv delay={0.2}>
            <span className="inline-block">
              Pro-Level foresight &{" "}
              <span className="textg font-outfit [42px] md:text-[60px]">
                Confidence<span className="line"></span>
              </span>
            </span>
          </MotionDiv>
          <MotionDiv delay={0.4}>
            <span className="inline-block">from day one</span>
          </MotionDiv>
        </h1>
        <h1 className="text-pw  text-[42px] md:text-[60px] font-medium leading-[58px] md:leading-[66px] text-center text-outfit block md:hidden flex-col items-center relative">
          <MotionDiv delay={0.2}>
            <span className="inline-block">
              Invest{" "}
              <span className="textg font-outfit [42px] md:text-[60px]">
                Smart<span className="line"></span>
              </span>{" "}
              in Crypto, with Pro-Level foresight &{" "}
              <span className="textg font-outfit [42px] md:text-[60px]">
                Confidence<span className="line"></span>
              </span>{" "}
              from day one
            </span>
          </MotionDiv>
        </h1>
        <MotionDiv delay={0.5}>
          <h6 className="md:w-[717px] opacity-[0.7] text-pw font-lg text-outfit mt-[24px] mb-[30px] text-center block md:flex flex-col">
            <span>
              Learn it directly from{" "}
              <span className="textg font-outfit">Progenius</span>
              <span>
                , {`'A team of crypto millionaires - from strategic...including the inside scoop'`} with wealth of experience — from
              </span>
              strategic crypto investments, to high potential NFTs, and inside
              scoop on the next big
            </span>
            <span> crypto projects.</span>
          </h6>
        </MotionDiv>
        <MotionDiv delay={0.7}>
          <div className="flex gap-6 flex-col md:flex-row grow-[1] md:grow-0">
            <Button text="Schedule a call" solid={true} schedule={true} />
            <Link href="/jointhecommunity">
              <Button text="Join the community" />
            </Link>
          </div>
        </MotionDiv>
      </div>
    </Wrapper>
  );
};
