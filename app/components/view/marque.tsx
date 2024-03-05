"use client";

import Marquee from "react-fast-marquee";

export const MarqueeComponent = ({
  children,
  speed,
  direction,
  gap,
}: {
  children: React.ReactNode;
  speed: number;
  direction?: boolean;
  gap: string;
}) => {
  const style = {
    gap: gap,
  };

  return (
    <>
      { direction ? (
        <Marquee
        loop={0}
        speed={speed}
        direction="right"
        pauseOnHover={true}
        className="flex justify-start"
        style={style}
      >
        {children}
      </Marquee>
      ) : (
        <Marquee
        loop={0}
        speed={speed}
        direction="left"
        pauseOnHover={true}
        className="flex justify-start"
        style={style}
      >
        {children}
      </Marquee>
      ) }
    </>
  );
};
