"use client";

import { useEffect, useRef } from "react";
import { motion, animate } from "framer-motion";
import { useLoader } from "../context/loadingContext";

export const Loader = () => {
  const divRefs = useRef<HTMLDivElement[]>([]);
  const divFixed = useRef(null);

  const { setLoading } = useLoader();

  useEffect(() => {
    async function updateCounter() {
      if (divFixed.current) {
        animate(
          divRefs.current[0],
          { y: "-100%" },
          { ease: "easeInOut", delay: 0.3, duration: 1.2 }
        );
        animate(
          divRefs.current[1],
          { y: "-100%" },
          { ease: "easeInOut", delay: 0.25, duration: 1.2 }
        );
        animate(
          divRefs.current[2],
          { y: "-100%" },
          { ease: "easeInOut", delay: 0.2, duration: 1.2 }
        );
        await animate(
          divRefs.current[3],
          { y: "-100%" },
          { ease: "easeInOut", delay: 0.1, duration: 1.2 }
        );
        await animate(divFixed.current, { y: "-100%" });

        setLoading(true);
      }
    }

    updateCounter();
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: "0%" }}
        className="z-40 overflow-hidden h-full w-full fixed grid grid-cols-4"
        ref={divFixed}
      >
        {Array.from({ length: 4 }, (_, index) => {
          return (
            <motion.div
              initial={{ y: "0%" }}
              ref={(el) => {
                if (el) {
                  divRefs.current[index] = el;
                }
              }}
              key={index}
              className="bg-[rgb(159,54,242)] h-full"
            ></motion.div>
          );
        })}
      </motion.div>
    </>
  );
};
