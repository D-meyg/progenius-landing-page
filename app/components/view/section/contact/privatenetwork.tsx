"use client";

import { Input } from "./input";
import { Button } from "@/app/components/button";
import { useState } from "react";
import toast from "react-hot-toast";

export const PrivateNetwork = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sponsor, setSponsor] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const toastid = toast.loading("loading...")
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        body: JSON.stringify({
          to: "info@progenius.io",
          from: "info@progenius.io",
          subject: "Private Network Form",
          text: ``,
          html: `
                <div>FirstName : ${firstName}</div>
                <div>LastName : ${lastName}</div>
                <div>Email : ${email}</div>
                <div>Phone : ${phone}</div>
                <div>Sponsorship preference : ${sponsor}</div>
                <div>Budget range : ${budget}</div>
              `,
        }),
      });

      console.log(res)

      if (res.ok) {
        toast.dismiss(toastid)
        toast.success(`Email sent successfully`)
      } else {
        toast.dismiss(toastid)
        toast.error(`${res.statusText}`)
      }

      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setBudget("");
      setSponsor("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-[8px] grid grid-cols-1 md:grid-cols-2 gap-[30px] ">
        <Input
          value={firstName}
          change={setFirstName}
          label="First Name"
          placeholder="Enter your first name"
        />
        <Input
          value={lastName}
          change={setLastName}
          label="Last name"
          placeholder="Enter your Last name"
        />
        <Input
          value={email}
          change={setEmail}
          type="email"
          label="Email address"
          placeholder="E.g example@whatmail.com"
        />
        <Input
          value={phone}
          change={setPhone}
          label="Phone"
          placeholder="E.g 080 - 1234 -3421"
        />
        <Input
          value={sponsor}
          change={setSponsor}
          label="Sponsorship preference "
          placeholder="E.g NFTs"
          select
          options={["Decentralized Finance (DeFi)","Non-Fungible Tokens (NFTs)","Metaverse & Web3 Gaming","Infrastructure & Tools","DAO (Decentralized Autonomous Organizations)"]}
        />
        <Input
          value={budget}
          change={setBudget}
          label="Budget range"
          placeholder="Select budget range"
          select
          options={["$2,000 - $10,000","$10,001 - $50,000","$50,001 - $150,000","$150,001 - $500,000","$500,000 - Above"]}
        />
      </div>
      <div className="flex md:justify-center mt-[37px]">
        <Button text="Submit details" solid={true} />
      </div>
    </form>
  );
};
