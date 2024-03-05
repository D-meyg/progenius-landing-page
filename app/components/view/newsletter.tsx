"use client";

import { useLoader } from "@/app/context/loadingContext";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "./section/contact/input";
import { CloseX } from "../icons";
import { sleep } from "@/app/utils";
import toast from "react-hot-toast";

export const Newsletter = () => {
  const [open, setOpen] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [Lastname, setLastName] = useState("");
  const [Email, setEmail] = useState("");

  const { isLoading } = useLoader();

  useEffect(() => {
    async function CLoseModal() {
      if (!isLoading) {
        await sleep(6000);
        setOpen(true)
      }
    }

    CLoseModal()
  }, [isLoading]);


  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toastid = toast.loading("loading...")
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        body: JSON.stringify({
          to: `${Email}`,
          from: "info@progenius.io",
          subject: "Newsletter",
          text: `${firstname}`,
          html: `
                <div>FirstName : ${firstname}</div>
                <div>LastName : ${Lastname}</div>
                <div>Email : ${Email}</div>
              `,
        }),
      });

      if (res.ok) {
        toast.dismiss(toastid)
        toast.success(`Email sent successfully`)
      } else {
        toast.dismiss(toastid)
        toast.error(`${res.statusText}`)
      }


      setFirstname("");
      setLastName("");
      setEmail("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }


  if (!open) return null;

  return (
    <div className="gradient1 fixed z-30 flex justify-center items-center backdrop-blur-[32px] w-full h-full ">
      <div className="w-[95%] md:w-auto rounded-[32px] bg-white/[0.04] relative font-outfit md:pt-[44px] md:pb-[47px] md:pl-[42px] md:pr-[77px] px-[15px] pb-[30px] pt-[80px]">
        <div className="absolute w-[44px] h-[44px] flex justify-center items-center top-[22px] right-[37px] bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] transition-colors duration-[.5s] ease-[cubic-bezier((.19,1,.22,1)] rounded-full" onClick={() => setOpen(false)}>
          <CloseX />
        </div>
        <h3 className="font-bold text-2xl md:text-[32px] text-white tracking-[-0.8] text-center">
          Subscribe to our newsletter and win a freebie
        </h3>
        <p className="text-white/[0.7] text-sm md:text-[18px] text-center leading-[28px] mt-[8px] md:w-[493px] md:mx-auto">
          Sign up and receive an ebook that will teach you the intricacies of
          crytocurrency trading{" "}
        </p>
        <div className="flex gap-[48px] mt-[29px] items-center">
          <form className="flex flex-col gap-[28px] w-full md:w-auto" onSubmit={handleSubmit}>
            <Input
              label="First name"
              placeholder="Enter your first name"
              value={firstname}
              change={setFirstname}
            />
            <Input
              label="Last name"
              placeholder="Enter your last name"
              value={Lastname}
              change={setLastName}
            />
            <Input
              label="Email address"
              placeholder="E.g example@whatmail.com"
              value={Email}
              change={setEmail}
              type="email"
            />
            <button className="group text-white font-outfit rounded-[50px] text-[19.2px] w-full hover:text-black  border-none h-[67px] overflow-hidden relative inline-block">
              <div className="absolute w-full h-full top-0 flex justify-center items-center translate-y-0 group-hover:translate-y-[-110%] group-hover:transition-transform bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] transition-colors duration-[.5s] ease-[cubic-bezier((.19,1,.22,1)] hover:bg-gradient-to-r hover:from-[#BB2Bff] hover:to-[#2B59FF] font-bold text-[19px]">
                Get freebie
              </div>
              <div className="absolute w-full h-full top-0 flex justify-center items-center transition-transform duration-[.1s] translate-x-[-100%] group-hover:translate-x-0 bg-white font-bold text-[19px]">
                Get freebie
              </div>
            </button>
          </form>
          <div className="hidden md:block relative grow-[1] h-[367px] w-[273px] self-end">
            <Image src="/assets/web3.png" alt="web3" sizes="100%" fill={true} priority />
          </div>
        </div>
      </div>
    </div>
  );
};
