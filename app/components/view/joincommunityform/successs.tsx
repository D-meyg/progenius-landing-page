
import Image from "next/image"
import { MotionDiv } from "../../motion/motion"
import { Wrapper } from "../../wrapper"

export const SuccessFull = () => {
    return(
        <div className="flex flex-col gap-6 font-outfit items-center">
                <div className="w-[92px] h-[92px] relative mb-[16px]">
                  <Image sizes="100%" src="/assets/success.png" alt="multi" fill={true} />
                </div>
                <MotionDiv>
                  <Wrapper>
                    <h2 className="text-[32px] font-bold tracking-[-0.8px] leading-[34px] text-white md:text-start text-center">
                      Payment{" "}
                      <span className="textg text-[32px] font-bold font-outfit">
                        successful
                      </span>
                    </h2>
                  </Wrapper>
                </MotionDiv>
                <MotionDiv delay={0.2}>
                  <Wrapper>
                    <p className="text-white/[0.7] flex flex-col leading-[28px] text-lg text-center">
                      <span>
                        Welcome to the winning team, your payment is successful.
                        Check your email inbox for further instructions and
                        invite to Progenius platform and telegram community.
                      </span>
                    </p>
                  </Wrapper>
                </MotionDiv>
              </div>
    )
}