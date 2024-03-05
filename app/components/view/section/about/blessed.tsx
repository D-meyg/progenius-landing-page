import { Button } from "@/app/components/button";
import Image from "next/image";
import { MarqueeComponent } from "../../marque";
import { MotionDiv } from "@/app/components/motion/motion";
import { Wrapper } from "@/app/components/wrapper";
import Link from "next/link";

interface Testimonial {
  image: string;
  content: string;
  name: string;
}

export const Blessed = () => {


  /*
     

 


 

  


  


  


 

""
 

""
 C4


  */

  const Testimonials: Testimonial[] = [
    {
      image: "/assets/alien-7513483_640.webp",
      content: `“Becoming a part of the PG community has transformed my approach to both learning and financial growth. In my experience, if you're on the lookout for innovative methods to enhance your wealth, PG is unmatched....”`,
      name: "Vhonixx",
    },
    {
      image: "/assets/android-7476541_640.jpg",
      content: `“Professional Genius stands out as a remarkable cryptocurrency community. It excels in cultivating relationships and expanding networks, providing unique visibility into projects that might otherwise remain inaccessible.”`,
      name: "Bignation",
    },
    {
      image: "/assets/android-7476541_640.jpg",
      content: `“The community's wealth of knowledge, contributed by numerous experienced members, makes it an excellent learning environment”`,
      name: "Bignation",
    },
    {
      image: "/assets/android-7476541_640.jpg",
      content: `"For anyone seeking to navigate the complexities of the crypto landscape and connect with valuable opportunities, Professional Genius is undoubtedly a top-tier choice.”`,
      name: "Bignation",
    },
    {
      image: "/assets/nft-6919119_640.jpg",
      content: `“Being able to collaborate and learn from the members of ProGenius has allowed me to develop skills that have helped me outside of the crypto space.”`,
      name: "Primo",
    },
    {
      image: "/assets/nft-6919119_640.jpg",
      content: `“If you are interested in high-quality information and building meaningful connections, then ProGenius is a community that I cannot recommend enough.”`,
      name: "Primo",
    },
    {
      image: "/assets/nft-8059870_640.png",
      content: `“The Pro Genius Group has helped with them all, whether it is from my being in the group to grasping an opportunity which I wouldn't have been offered or told before.”`,
      name: "Shiba",
    },
    {
      image: "/assets/nft-8059870_640.png",
      content: `“All the way to the fact that they are top chart analysts and friendly welcoming individuals who are ready to help in a heartbeat, the list goes on but once again so grateful because all those 3 things listed are key foundations for a successful investor.”`,
      name: "Shiba",
    },
    {
      image: "/assets/1684481039-Hithere10.png",
      content: `“Great service, Portfolio currently up 10x since the bull market began.”`,
      name: "Livinnn",
    },
    {
      image: "/assets/nft-8059870_640.png",
      content: `“The group has really contributed to my success in the digital currency world so much. It's been down to 3 mains things as to why I say that 1. Opportunity 2. Knowledge and Education 3. Networking.”`,
      name: "Shiba",
    },
    {
      image: "/assets/digital-art-7565263_640.jpg",
      content: `“My top 3 holdings have came from being in the group, the value gained from private sales have been insane.”`,
      name: "Smol",
    },
    {
      image: "/assets/download.jpeg",
      content: `“The group has had me develop better than I could have done by myself. I feel like I can ask a question at any time and someone will be able to help or offer advice. 
      No question is a dumb question.”`,
      name: "C4",
    },
  ];

  return (
    <div className="flex flex-col gap-6 font-outfit items-center py-[49px] self-stretch">
      <div className="w-[64px] h-[64px] relative">
        <Image sizes="100%" src="/assets/userheart.png" alt="userheart" fill={true} />
      </div>
      <MotionDiv>
        <Wrapper>
          <h2 className="text-[32px] font-bold tracking-[-0.8px] leading-[34px] text-white flex flex-col md:text-start text-center items-center">
            <span>
              Our{" "}
              <span className="textg text-[32px] font-bold font-outfit">
                blessed
              </span>{" "}
              clients said about their
            </span>
            <span>experience</span>
          </h2>
        </Wrapper>
      </MotionDiv>
      <MotionDiv delay={0.2}>
        <Wrapper>
          <p className="text-white/[0.7] block md:flex flex-col leading-[28px] text-lg text-center">
            <span>
              Our membership isn’t about endless jargon and stuff that’s too
              common—it{"'"}s the distilled wisdom of{" "}
            </span>
            <span>
              a crypto millionaire team, the hard-hitting truths about making money
              for the long-term. Don’t just take{" "}
            </span>
            <span>
              our words for it, take a look at the experiences and what others
              are benefiting from Progenius
            </span>
          </p>
        </Wrapper>
      </MotionDiv>
      <Wrapper>
        <Link href="/jointhecommunity" className="mt-[8px] self-stretch md:self-auto">
          <Button solid={true} text="Join the community" />
        </Link>
      </Wrapper>
      <div className="mt-[29px] w-full flex">
        <MarqueeComponent speed={100} gap="52px">
          <span className="flex gap-[52px]">
            {Testimonials.map((testimony, index) => {
              return (
                <div
                  key={index}
                  className="w-[540px] p-[65px] flex gap-[30px] items-start rounded-[32px] border-[2px] border-white/[0.1] transition-all duration-1000 hover:border-[#2B59FF] cursor-pointer"
                >
                  <div className="w-[65px] h-[65px] rounded-full relative overflow-hidden">
                    <Image sizes="100%" src={testimony.image} alt="Avatar" width={65} height={65} style={{
                      objectFit:"cover"
                    }} />
                  </div>
                  <div className="flex flex-col gap-[32px] w-[calc(100%-65px)] font-outfit">
                    <p className="text-lg font-bold leading-[28px] tracking-[-0.4px] text-white">
                      {testimony.content}
                    </p>
                    <small className="tracking-[4px] uppercase font-bold leading-[24px] text-sm text-white/[0.5]">
                      {testimony.name}
                    </small>
                  </div>
                </div>
              );
            })}
          </span>
          <span className="flex gap-[52px] ml-[52px]">
            {Testimonials.map((testimony, index) => {
              return (
                <div
                  key={index}
                  className="w-[540px] p-[65px] flex gap-[30px] items-start rounded-[32px] border-[2px] border-white/[0.1] transition-all duration-1000 hover:border-[#2B59FF] cursor-pointer"
                >
                  <div className="w-[65px] h-[65px] rounded-full relative overflow-hidden">
                    <Image sizes="100%" src={testimony.image} alt="Avatar" width={65} height={65} style={{
                      objectFit:"cover"
                    }} />
                  </div>
                  <div className="flex flex-col gap-[32px] w-[calc(100%-65px)] font-outfit">
                    <p className="text-lg font-bold leading-[28px] tracking-[-0.4px] text-white">
                      {testimony.content}
                    </p>
                    <small className="tracking-[4px] uppercase font-bold leading-[24px] text-sm text-white/[0.5]">
                      {testimony.name}
                    </small>
                  </div>
                </div>
              );
            })}
          </span>
        </MarqueeComponent>
      </div>
    </div>
  );
};
