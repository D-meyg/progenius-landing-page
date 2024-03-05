"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLoader } from "../context/loadingContext";
import { useAnimate, motion, useInView } from "framer-motion";

export const ImageSpline = () => {
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);

  const { isLoading } = useLoader();

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    const animateElement = async () => {
      if (isLoading && isInView) {
        await animate(
          scope.current,
          { y: 0, opacity: 1 },
          { ease: "linear", delay: 0.8, duration: 0.5 }
        );
      }
    };

    animateElement();
  }, [animate, isInView, isLoading, scope]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const maxScale = 1.5;
      const newScale = Math.min(1 + scrollPosition / 1000, maxScale);

      const minOpacity = 0.1;
      const newOpacity = Math.max(1 - scrollPosition / 1000, minOpacity);

      setScale(newScale);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="hidden md:block w-[540px] z-0 h-[569px] sticky top-0"
      initial={{ y: 30, opacity: 0 }}
      ref={scope}
    >
      <div className="relative w-full h-full">
        <div
          className="absolute w-full h-full"
          style={{ transform: `scale(${scale})`, opacity: opacity }}
        >
          <div className="w-full h-full relative">
            <Image
              src="/assets/splineimage.png"
              alt="/splineimage"
              fill={true}
              sizes="10%"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
