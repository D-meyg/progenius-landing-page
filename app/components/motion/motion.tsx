"use client";

import { useLoader } from "../../context/loadingContext";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const MotionSlide = ({ delay }: { delay?: number }) => {
  const { isLoading } = useLoader();

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    const animateElement = async () => {
      if (isLoading && isInView) {
        await animate(
          scope.current,
          { x: "100%" },
          { ease: "linear", delay: delay, duration: 1.5 }
        );
      }
    };

    animateElement();
  }, [isInView, isLoading]);

  return (
    <motion.div
      initial={{ x: 0 }}
      ref={scope}
      className="w-full h-full absolute bg-[#12141D]/[0.65] md:self-auto self-stretch"
    ></motion.div>
  );
};

export const MotionDiv = ({
  delay,
  children,
}: {
  delay?: number;
  children: React.ReactNode;
}) => {
  const { isLoading } = useLoader();

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    const animateElement = async () => {
      if (isLoading && isInView) {
        await animate(
          scope.current,
          { y: 0, opacity: 1 },
          { ease: "linear", delay: delay, duration: 0.5 }
        );
      }
    };

    animateElement();
  }, [isInView, isLoading]);

  return (
    <motion.span
      className="flex md:self-auto self-stretch md:justify-start justify-center"
      initial={{ y: 10, opacity: 0 }}
      ref={scope}
    >
      {children}
    </motion.span>
  );
};

