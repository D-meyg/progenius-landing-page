"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../button";
import { useEffect, useState } from "react";
import { motion, useAnimate, useInView } from "framer-motion";
import { useLoader } from "@/app/context/loadingContext";
import { Close } from "../icons";

export const Navbar = () => {
  const { isLoading } = useLoader();

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const animateElement = async () => {
      if (isLoading && isInView) {
        await animate(
          scope.current,
          { y: 0, opacity: 1 },
          { ease: "linear", duration: 0.5 }
        );
      }
    };

    animateElement();
  }, [isInView, isLoading]);

  return (
    <div className="flex md:px-0 px-[20px] items-center h-[80px] md:h-[131px]">
      <motion.div
        ref={scope}
        initial={{ y: 10, opacity: 0 }}
        className="flex justify-between items-center w-full  md:max-w-[1300px] mx-auto "
      >
        <Link href="/" className="hidden md:block w-[171px] h-[30px] md:w-[264px] md:h-[47px] relative">
          <Image sizes="100%" src="/assets/logo.png" alt="logo" fill={true} />
        </Link>
        <Link href="/" className="md:hidden block w-[62px] h-[49px] md:w-[264px] md:h-[47px] relative">
          <Image sizes="100%" src="/assets/moblie.png" alt="logo" fill={true} />
        </Link>
        <div className="hidden md:flex items-center">
          <ul className="flex items-center gap-[42px] text-white font-outfit font-base leading-[24px]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#faqs">FAQs</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
            <li>
            <Link href="https://blog.progenius.io/" target="__blank">Blog</Link>
            </li>
          </ul>
        </div>
        {isOpen && (
          <div className="z-40 fixed bg-black/[0.9] bottom=0 right-0 left-0 top-0 w-full h-full md:hidden flex flex-col">
            <div className="flex justify-end p-[24px]">
              <div className="w-[24px] h-[24px]" onClick={() => setOpen(false)}>
                <Close />
              </div>
            </div>
            <ul className="flex flex-col items-center gap-[62px] text-white font-outfit font-base leading-[24px] mt-[100px]">
              <li onClick={() => setOpen(false)}>
                <Link href="/">Home</Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link href="#about">About</Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link href="#faqs">FAQs</Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link href="#contact">Contact</Link>
              </li>
              <li onClick={() => setOpen(false)}>
                <Link href="https://blog.progenius.io/" target="__blank">Blog</Link>
              </li>
            </ul>
          </div>
        )}

        <div className="flex w-[24px] h-[24px] md:hidden relative" onClick={() => setOpen(true)}>
          <Image sizes="100%" src="/assets/hambuger.png" alt="hambrger" fill={true} />
        </div>
        <Link href="/jointhecommunity" className="hidden md:flex items-center">
          <Button text="Join the community" solid={true} />
        </Link>
      </motion.div>
    </div>
  );
};
