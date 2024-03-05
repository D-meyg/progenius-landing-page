import { Button } from "@/app/components/button";
import { Stats, TraficLight } from "@/app/components/icons";
import Image from "next/image";
import { ArrowUp } from "@/app/components/icons";
import { MotionDiv } from "@/app/components/motion/motion";
import { Wrapper } from "@/app/components/wrapper";
import Link from "next/link";

export const Glimpse = () => {
  return (
    <div className="py-[62px] flex flex-col gap-[52px]">
      <div className="flex flex-col gap-6 font-outfit items-center">
        <div className="w-[64px] h-[64px] relative">
          <Image
            sizes="100%"
            src="/assets/glimpse.png"
            alt="glimpse"
            fill={true}
          />
        </div>
        <MotionDiv>
          <Wrapper>
            <h2 className="text-[32px] font-bold tracking-[-0.8px] leading-[34px] text-white md:text-start text-center">
              Get a{" "}
              <span className="textg text-[32px] font-bold font-outfit">
                glimpse
              </span>{" "}
              of some of our current market
            </h2>
          </Wrapper>
        </MotionDiv>
        <MotionDiv delay={0.2}>
          <Wrapper>
            <p className="text-white/[0.7] block md:flex flex-col leading-[28px] text-lg text-center">
              <span className="md:w-[600px]">
              Before you dive in, get a clear picture of the current market landscape. See What the pros see and gain the confidence to invest with a clear picture of the current landscape.
              </span>
            </p>
          </Wrapper>
        </MotionDiv>
        <Wrapper>
          <Link
            href="jointhecommunity"
            className="mt-[8px] self-stretch md:self-auto"
          >
            <Button solid={true} text="Join the community" />
          </Link>
        </Wrapper>
      </div>
      <Wrapper>
        <div className="md:w-[1105px]">
          <div className="flex h-[55px] items-center px-[20px] justify-between bg-[#5D40F5] rounded-tl-[10px] rounded-tr-[10px]">
            <div className="flex">
              <div className="flex items-center">
                <TraficLight />
              </div>
            </div>
            <div className="w-[250px] md:w-[378px] px-[7px] items-center flex bg-[rgba(241,241,241,0.20)] rounded-[6px]">
              <div className="w-[15px] mr-[9px]"></div>
              <div className="flex items-center gap-[3px]">
                <span className="text-sm font-outfit font-light tracking-[0.21px] text-white">
                  progenius.io
                </span>
                <span className="text-[#F1F1F1] opacity-[0.7]">􀎡</span>
              </div>
            </div>
            <div className="w-[15px]"></div>
          </div>
          <div className="px-[15px] md:px-[32px] py-[24px] bg-[rgba(255,255,255,0.04)] flex flex-col gap-[37px]">
            {Coins.map((coin, index) => {
              return (
                <div
                  key={index}
                  className="justify-between grid grid-cols-3 md:grid-cols-[2fr,1fr,1fr,1fr,1fr] md:justify-center"
                >
                  <div className="flex gap-[9px] items-center">
                    <div className="w-[43px] h-[43px] relative">
                      <Image
                        sizes="100%"
                        src={coin.image}
                        alt="senate"
                        fill={true}
                      />
                    </div>
                    <div
                      className="flex flex-col"
                      style={{ width: `calc(100% - 52px)` }}
                    >
                      <div className="text-white text-[14px] md:text-lg font-bold">
                        <span>{coin.name}</span>
                      </div>
                      <div className="text-[12px] opacity-[0.4] text-white font-light ">
                        <span>{coin.subname}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:basis-[200px] justify-center">
                    <div className="text-white text-[14px] md:text-lg font-bold  md:mr-0 self-end md:self-auto">
                      <span>{coin.initialprice}</span>
                    </div>
                    <div className="text-[12px] opacity-[0.4] text-white font-light md:mr-0 self-end md:self-auto">
                      <span>Initial price</span>
                    </div>
                  </div>
                  <div className="hidden md:flex flex-col md:ml-[30px]">
                    <div className="flex flex-col">
                      <div className="text-white text-lg font-bold">
                        <span>{coin.exitprice}</span>
                      </div>
                      <div className="text-[12px] opacity-[0.4] text-white font-light">
                        <span>Exit price</span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex justify-end">
                    <Stats />
                  </div>
                  <div className="flex items-center gap-[4px] justify-end">
                    <ArrowUp />
                    <div className="text-pg text-[14px] md:text-lg font-bold">
                      <span>{coin.rate}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

const Coins = [
  {
    image: "/assets/blocktopia.png",
    name: "Bloktopia",
    subname: "BLOK",
    invested: "$4,000",
    currentprice: "$0.00211",
    link: "https://coinmarketcap.com/currencies/blocktopia/",
    initialprice: "$0.000175",
    exitprice: "$0.19",
    rate: "1,085x"
  },
  {
    image: "/assets/limewire.png",
    name: "Limewire",
    subname: "LMWR",
    invested: "$4,000",
    currentprice: "$0.00211",
    link: "https://coinmarketcap.com/currencies/blocktopia/",
    initialprice: "$0.06",
    exitprice: "$0.80",
    rate: "13.3x"
  },
  {
    image: "/assets/mavia.png",
    name: "Heroes of Mavia",
    subname: "MAVIA",
    invested: "$4,000",
    currentprice: "$0.00211",
    link: "https://coinmarketcap.com/currencies/limewire/",
    initialprice: "$0.25",
    exitprice: "$7.5",
    rate: "30x"
  },
  {
    image: "/assets/sidus.png",
    name: "SIDUS",
    subname: "LMWR",
    invested: "$4,000",
    currentprice: "$0.00211",
    link: "https://coinmarketcap.com/currencies/limewire/",
    initialprice: "$0.0012",
    exitprice: "$0.1932",
    rate: "161x"
  },
  {
    image: "/assets/cryowar.png",
    name: "Cryowar",
    subname: "CWAR",
    invested: "$4,000",
    currentprice: "$0.00211",
    link: "https://coinmarketcap.com/currencies/limewire/",
    initialprice: "$0.017",
    exitprice: "$4.5",
    rate: "250x"
  },
];
