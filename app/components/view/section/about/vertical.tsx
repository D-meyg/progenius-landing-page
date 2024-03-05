import { Button } from "@/app/components/button";
import { VerticalCard } from "@/app/components/verticalcard";
import { Wrapper } from "@/app/components/wrapper";
import Image from "next/image";
import { MotionDiv } from "@/app/components/motion/motion";
import Link from "next/link";

export const OurVertical = () => {
  return (
    <div className="pt-[56px] pb-[90px]">
      <Wrapper>
        <div className="flex flex-col md:max-w-[1300px] md:w-full mx-auto">
          <div className="flex flex-col gap-6 items-start">
            <div className="w-[64px] h-[64px] relative text-white">
              <Image
                sizes="100%"
                src="/assets/vertical.png"
                alt="questionmark"
                fill={true}
              />
            </div>
            <div className="flex flex-col gap-2 font-outfit">
              <h4 className="text-[32px] font-bold tracking-[-0.8px] leading-[46px] text-white">
                Our{" "}
                <span className="text-[32px] font-bold textg font-outfit">
                  Vertical
                </span>
              </h4>
              <MotionDiv delay={0.2}>
                <small className="text-white/[0.70] mt-[8px] text-lg leading-[28px] font-light block md:flex flex-col md:w-[900px]">
                  <span>
                  At ProGenius, we{"'"}re all about giving you the power and the know-how to make informed decisions in the crypto world. Our mission is to open up a world where you get first insight on exciting crypto oppoutunities, and you{"'"}re part of a excelling network where everyone helps each other succeed. We make the complex crypto stuff simple, with easy-to-understand advice and a group of people like you, who{"'"}ve got your back. We believe that with the right info and the right people, anyone can make it big in the digital economy. Let{"'"}s not just watch from the sidelines {"-"} together, we{"'"}ll lead the charge into the future of finance.
                  </span>
                </small>
              </MotionDiv>
            </div>
          </div>
        </div>
        <div className="mt-[56px] md:max-w-[1300px] md:w-full mx-auto">
          <div className="flex gap-6 flex-col md:flex-row">
            <VerticalCard
              image="/assets/learn.png"
              title="Learning & Development"
              subtitles={[
                "Crypto Curriculum: Beginner, intermediate, and advanced courses/information on blockchain, investing, trading, security, and DeFi.",
                "Industry Partnerships: Collaborate with experts and institutions for educational content and accreditation.",
              ]}
              delay={0.25}
            />
            <VerticalCard
              image="/assets/bagtick.png"
              title="Deals & Community"
              subtitles={[
                "Exclusive Member Benefits: Negotiated discounts on education, tools, services, subscriptions, and early access to new projects/airdrops.",
                "Community Deals Marketplace: A platform for members to share and discover curated deals on crypto products, services, and events.",
              ]}
              delay={0.3}
            />
          </div>
          <div className="flex gap-6 flex-col md:flex-row mt-[24px]">
            <VerticalCard
              arrowRight={true}
              image="/assets/multi.png"
              title="Engagement & Networking"
              subtitles={[
                "Live Events & Webinars: Online and offline workshops, conferences, and AMAs with industry leaders and project teams.",
                "Elite KOL Network: Access to a network of Web3 thought leaders and influencers for exclusive events, discussions, and connections.",
              ]}
              delay={0.35}
            />
            <div className="grow flex flex-col gap-6">
              <div className="md:order-1 order-1">
                <VerticalCard
                  image="/assets/invest.png"
                  title="Investment & Portfolio Management"
                  subtitles={[
                    "Progenius Dashboard: Track crypto investments, set alerts, and make informed decisions.",
                    "Funding Opportunities: Connect with Web3 funding sources for projects and ventures. Inclusive and exclusive allocation giveaways to member only community. ",
                  ]}
                  delay={0.4}
                />
              </div>
              <div className="md:order-2 order-3 hidden md:flex">
                <MotionDiv delay={0.2}>
                  <div className="rounded-[32px] border-[2px] border-[rgba(255,255,255,0.10)] px-[40px] py-[43px] flex flex-col gap-[16px] grow items-center">
                    <h2 className="text-lg font-outfit font-bold leading-[28px] tracking-[-0.4px] text-center text-white md:text-start">
                      Your Next Move? Well That’s Your Call
                    </h2>
                    <p className="text-base text-[rgba(255,255,255,0.70)] leading-[22.4px] font-light mt-[6px] text-center mb-[32px]">
                      You{"'"}ve seen the door. Now, it’s your turn to step
                      through. The decision to join ProGenius is yours, but the
                      opportunity is right here.
                    </p>
                    <Link href="/jointhecommunity">
                      <Button text="Join the community" solid={true} />
                    </Link>
                  </div>
                </MotionDiv>
              </div>
            </div>
            <VerticalCard
              arrowLeft={true}
              image="/assets/discovery.png"
              title="Discovery & Innovation:"
              subtitles={[
                "Top Projects Showcase: Discover promising and groundbreaking crypto projects shaping the future of decentralization.",
                "Industry Partnerships: Collaborate with experts and institutions for educational content and accreditation.",
              ]}
              delay={0.45}
            />
            <div className="md:order-2 order-3 md:hidden flex">
              <MotionDiv delay={0.2}>
                <div className="rounded-[32px] border-[2px] border-[rgba(255,255,255,0.10)] px-[40px] py-[43px] flex flex-col gap-[16px] grow items-center">
                  <h2 className="text-lg font-outfit font-bold leading-[28px] tracking-[-0.4px] text-center text-white md:text-start">
                    Your Next Move? Well That’s Your Call
                  </h2>
                  <p className="text-base text-[rgba(255,255,255,0.70)] leading-[22.4px] font-light mt-[6px] text-center mb-[32px]">
                    You{"'"}ve seen the door. Now, it’s your turn to step
                    through. The decision to join ProGenius is yours, but the
                    opportunity is right here.
                  </p>
                  <Link href="/jointhecommunity" className="block w-full">
                    <Button text="Join the community" solid={true} />
                  </Link>
                </div>
              </MotionDiv>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
