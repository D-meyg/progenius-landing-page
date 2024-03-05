import Image from "next/image";
import { Form } from "./forms";
import { MotionDiv } from "@/app/components/motion/motion";
import { Wrapper } from "@/app/components/wrapper";

export const ContactUs = () => {
  return (
    <div
      id="contact"
      className="flex flex-col gap-6 items-center pt-[40px] md:pb-[78px] pb-[130px] px-[10px] md:px-0"
    >
      <div className="w-[64px] h-[64px] relative">
        <Image
          sizes="100%"
          src="/assets/contact.png"
          alt="contact"
          fill={true}
        />
      </div>
      <MotionDiv delay={0.1}>
        <h2 className="text-[32px] font-bold font-outfit tracking-[-0.8px] leading-[46px] text-white">
          Get in{" "}
          <span className="textg font-outfit font-bold text-[32px]">Touch</span>
        </h2>
      </MotionDiv>
      <MotionDiv delay={0.3}>
        <Wrapper>
          <div className="block md:flex flex-col leading-[20px] font-lg font-outfit text-[rgba(255,255,255,0.7)] text-center">
            <span>
              Explore exciting opportunities and make a meaningful impact by
              supporting innovative projects. We{"'"}re
            </span>
            <span>
              {" "}eager to collaborate with you and bring inspiring ideas to life.
            </span>
          </div>
        </Wrapper>
      </MotionDiv>
      <div className="mt-[8px] w-full md:w-auto">
        <Form />
      </div>
    </div>
  );
};
