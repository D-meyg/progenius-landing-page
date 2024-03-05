"use client";

import { Wrapper } from "../components/wrapper";
import { MotionDiv } from "../components/motion/motion";
import Image from "next/image";
import { Form } from "../components/view/joincommunityform/form";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { useLoader } from "../context/loadingContext";

export default function Page({
  params,
}: {
  params: { page: number | string };
}) {
  const [index, setIndex] = useState(0);
  const [selected, setSelection] = useState(0);
  const [fullname, setFullname] = useState("");
  const [handle, setHandle] = useState("");
  const [email, setEmail] = useState("");
  const [plan, setPlan] = useState("Monthly");


  const handleSubmit = async (e: any) => {
    const toastId = toast.loading("loading...");
    try {
      const COINBASE_API_KEY = process.env.NEXT_PUBLIC_COINBASE_API_KEY;
      const response = await axios.post(
        `https://api.commerce.coinbase.com/charges`,
        {
          name: "Charge",
          description: "Payment",
          local_price: {
            amount: plan === "Monthly" ? 150 : 1500,
            currency: "USD",
          },
          pricing_type: "fixed_price",
          redirect_url: `https://${process.env.NEXT_PUBLIC_URL}/jointhecommunity/payment/callback?email=${encodeURIComponent(email)}&fullname=${encodeURIComponent(fullname)}`,
          cancel_url: `https://${process.env.NEXT_PUBLIC_URL}/jointhecommunity`,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-CC-Api-Key": COINBASE_API_KEY,
          },
        }
      );
      if (response.data) {
        toast.dismiss(toastId);
      }

      console.log(response.data);
      window.location.href = response.data.data.hosted_url;
    } catch (error) {
      console.log("clientError : ", error);
      toast.dismiss(toastId);
      toast.error("An error occured");
      console.log(error)
    }
  };

  //http://localhost:3000/jointhecommunity/payment/callback?email=untamed737%40gmail.com&fullname=habeeb&success=true

  return (
    <>
      <div className="md:max-w-[1300px] mx-auto flex justify-center border-b-[2px]  border-b-white/10 mt-[32px] mb-[30px]">
        <div className="flex flex-col gap-6 font-outfit items-center">
          <>
            <div className="w-[64px] h-[64px] relative">
              <Image
                sizes="100%"
                src="/assets/multi.png"
                alt="multi"
                fill={true}
              />
            </div>
            <MotionDiv>
              <Wrapper>
                <h2 className="text-[32px] font-bold tracking-[-0.8px] leading-[34px] text-white md:text-start text-center">
                  Join{" "}
                  <span className="textg text-[32px] font-bold font-outfit">
                    Community
                  </span>
                </h2>
              </Wrapper>
            </MotionDiv>
            <MotionDiv delay={0.2}>
              <Wrapper>
                <p className="text-white/[0.7] flex flex-col leading-[28px] text-lg text-center">
                  <span>
                    This is not a get rich quick scheme. If you{"'"}re looking
                    for a magic crypto formula that instantly
                  </span>
                  <span>
                    brings in a lot of cash, I can tell you this is not for you.
                    But for those willing to learn, put in
                  </span>
                  <span>
                    effort, and have patience, the possibilities are vast.
                  </span>
                </p>
              </Wrapper>
            </MotionDiv>
          </>

          <MotionDiv delay={0.4}>
            <Form
              index={index}
              setIndex={setIndex}
              selected={selected}
              setSelection={setSelection}
              fullname={fullname}
              handle={handle}
              email={email}
              setFullname={setFullname}
              setHandle={setHandle}
              setEmail={setEmail}
              plan={plan}
              setPlan={setPlan}
              handleSubmit={handleSubmit}
            />
          </MotionDiv>
        </div>
      </div>
    </>
  );
}
