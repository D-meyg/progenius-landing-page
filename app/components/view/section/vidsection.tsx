"use client";

import Image from "next/image";
import { CryptoCard } from "../../cryptocard";
import { Button } from "../../button";
import { MarqueeComponent } from "../marque";
import { MotionDiv } from "../../motion/motion";
import { Wrapper } from "../../wrapper";
import Link from "next/link";
import { ImageSpline } from "../../imagespline";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const VidSection = () => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const ismobile = window.innerWidth <= 540;
    setMobile(ismobile);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <ImageSpline />
      <motion.div
        whileInView={!isMobile ? { y: "-40%" } : { y: 0 }}
        transition={{
          ease: "linear",
          duration: 0.5,
        }}
        className="mt-[80px] flex flex-col self-stretch items-center gap-6 relative z-10 pb-[110px]"
      >
        <div className="w-[64px] h-[64px] relative">
          <Image
            sizes="100%"
            src="/assets/vidframe.png"
            alt="vidframe"
            fill={true}
          />
        </div>
        <MotionDiv>
          <Wrapper>
            <h4 className="leading-[34px] tracking-[-0.8px] text-[32px] font-bold font-outfit flex flex-col items-center text-white text-center md:text-left">
              <span className="inline-block">
                The door to becoming a{" "}
                <span className="textg font-bold font-outfit text-[32px]">
                  crypto
                </span>{" "}
                investor isn’t
              </span>{" "}
              <span className="inline-block">
                just for experts or a chosen few
              </span>
            </h4>
          </Wrapper>
        </MotionDiv>
        <MotionDiv delay={0.15}>
          <Wrapper>
            <div className="font-outfit opacity-[0.7] text-lg font-light leading-5 text-white block md:flex flex-col items-center text-center md:text-left">
              <span className="md:inline-block">
                It{"'"}s about being informed, being part of a community that
                {"'"}s got your back, and striking{" "}
              </span>
              <span className="md:inline-block">
                when the iron{"'"}s hot. We{"'"}re talking profits exceeding $10
                million, with many members
              </span>
              <span className="md:inline-block">
                boosting their portfolios 10x to 100x in under two years!
              </span>
            </div>
          </Wrapper>
        </MotionDiv>
        <div className="flex flex-col my-[56px] gap-6 w-full">
          <div className="">
            <MarqueeComponent speed={100} gap="24px">
              <div className="flex gap-6">
                {Coins.map((coin, index) => {
                  return (
                    <div key={index}>
                      <CryptoCard
                        index={index + 1}
                        name={coin.name}
                        subname={coin.subname}
                        image={coin.image}
                        rate={coin.rate}
                        link={coin.link}
                      />
                    </div>
                  );
                })}
              </div>
            </MarqueeComponent>
          </div>
          <div className="">
            <MarqueeComponent direction speed={100} gap="24px">
              <div className="flex gap-6">
                {Coins.map((coin, index) => {
                  return (
                    <div key={index}>
                      <CryptoCard
                        index={index + 1}
                        name={coin.name}
                        subname={coin.subname}
                        image={coin.image}
                        rate={coin.rate}
                        link={coin.link}
                      />
                    </div>
                  );
                })}
              </div>
            </MarqueeComponent>
          </div>
        </div>
        <Wrapper>
          <Link href="jointhecommunity" className="self-stretch md:self-auto">
            <Button solid={true} text="Join the community" />
          </Link>
        </Wrapper>
      </motion.div>
    </div>
  );
};

const Coins = [
  {
    image: "/assets/senate.png",
    name: "Senate",
    subname: "senate",
    rate: "100",
    link: "https://coinmarketcap.com/currencies/senate/",
  },

  {
    image: "/assets/blocktopia.png",
    name: "Blocktopia",
    subname: "Blok",
    rate: "1000",
    link: "https://coinmarketcap.com/dexscan/bsc/0x91c20083b1392943bcba25a5b5cabbbd36ea6a3e/",
  },
  {
    image: "/assets/cryowar.png",
    name: "Cryowar",
    subname: "CWAR",
    rate: "140",
    link: "https://coinmarketcap.com/currencies/cryowar/",
  },
  {
    image: "/assets/vr.png",
    name: "Victoria VR",
    subname: "VR",
    rate: "100",
    link: "https://coinmarketcap.com/currencies/victoria-vr/",
  },
  {
    image: "/assets/limewire.png",
    name: "Limewire",
    subname: "LMWR",
    rate: "11",
    link: "https://coinmarketcap.com/currencies/limewire/",
  },
  {
    image: "/assets/nokomato.png",
    name: "Nakamoto",
    subname: "NAKA",
    rate: "40",
    link: "https://coinmarketcap.com/currencies/nakamoto-games/",
  },
  {
    image: "/assets/betswirl.png",
    name: "Betswirl",
    subname: "BETS",
    rate: "40",
    link: "https://coinmarketcap.com/currencies/betswirl/",
  },
  {
    image: "/assets/coinweb.png",
    name: "Coinweb",
    subname: "CWEB",
    rate: "16",
    link: "https://coinmarketcap.com/currencies/coinweb/",
  },
];
