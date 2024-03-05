"use client";

import { SuccessFull } from "@/app/components/view/joincommunityform/successs";
import { Wrapper } from "@/app/components/wrapper";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
import axios from "axios";

export default function Community({ params }: { params: any }) {

  const [success, setSuccess] =useState(false)
  const path = usePathname()

  
  const searchParams  = useSearchParams()
  const Email = decodeURIComponent(searchParams.get("email") as string)
  const Fullname = decodeURIComponent(searchParams.get("fullname") as string)

  useEffect(() => {
    let config = {
      method: 'get',
      url: `https://api.commerce.coinbase.com/charges?page=${1}&limit=${1}`,
      headers: { 
        'Content-Type': 'application/json', 
        'Accept': 'application/json',
        "X-CC-Api-Key": process.env.NEXT_PUBLIC_COINBASE_API_KEY,
      }
    };
    
    axios(config)
    .then((response) => {
      if(response.data.timeline[0].status === "COMPLETED"){
        setSuccess(true)
      }
    })
    .catch((error) => {
      console.log(error);
    });
  },[success])
  

  useEffect(() => {
    async function sendEmail() {
      try {
        const res = await fetch("/api/sendEmail", {
          method: "POST",
          body: JSON.stringify({
            to: `${Email}`,
            from: "info@progenius.io",
            subject: "Welcome to the Progenius Community!",
            text: `${Fullname}`,
            html: `<><>`,
          }),
        });

        if (res.ok) {
          toast.success(`Email sent successfully`)
        } else {
          toast.error(`${res.statusText}`)
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
    if (success && Email && Fullname) sendEmail();
  }, [Email,Fullname,path, success]);
  return (
    <>
      <div className="font-outfit mt-[94px] mb-[152px] w-full md:w-unset">
        <Wrapper>
          <div
            style={{
              paddingTop: "58px",
              paddingBottom: "58px",
            }}
            className="md:max-w-[524px] mx-auto w-full px-[15px] md:px-[65px] md:py-[44px] border-2 border-white/[0.10] rounded-[32px]"
          >
            <SuccessFull />
          </div>
        </Wrapper>
      </div>
      <Wrapper>
        <div className="h-[1px] w-full bg-white/10 mb-[24px]"></div>
      </Wrapper>
    </>
  );
}
