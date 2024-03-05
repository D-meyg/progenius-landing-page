import Image from "next/image";
import { MotionDiv } from "./motion/motion";

export const StepCard = ({
  image,
  text,
  delay,
}: {
  image: string;
  text: string;
  delay: number;
}) => {
  return (
    <div className="md:basis-[384px] grow border-2 border-[rgba(255,255,255,0.10)] rounded-[32px]">
      <MotionDiv delay={delay}>
        <div className="grow py-[67px] pl-[40px] pr-[47px] flex flex-col items-start ">
          <div className="relative w-[64px] h-[64px]">
            <Image sizes="100%" src={image} alt="" fill={true} />
          </div>
          <p className="pt-[16px] text-white font-lg font-outfit font-bold tracking-[-0.4px]">
            {text}
          </p>
        </div>
      </MotionDiv>
    </div>
  );
};
