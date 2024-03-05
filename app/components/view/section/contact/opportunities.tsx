"use client";

import { Input, TextArea } from "./input";
import { Button } from "@/app/components/button";
import { useState } from "react";

export const Opportunities = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [funding, setFunding] = useState("");
  const [ description, setDescription  ] = useState("")


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {

        const res = await fetch("/api/sendEmail",{
          method:"POST",
          body:JSON.stringify({
            to:"info@progenius.io", 
             from: 'info@progenius.io',
              subject:"Opportunities Form",
              text: `${firstName}`,
              html:`
                <div>FirstName : ${firstName}</div>
                <div>LastName : ${lastName}</div>
                <div>Email : ${email}</div>
                <div>Phone : ${funding}</div>
                <p>Description of project: ${description}</p>
              `
          }),
      })

      if(res.ok){
        console.log("Email sent successfully")
      }else {
        console.error("Failed to send email")
        console.log(res)
      }

     setFirstName("")
      setLastName("")
      setEmail("")
      setFunding("")
      setDescription("")
    
    } catch (error) {
      console.error('Error submitting form:', error);
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
          label="Email address"
          type="email"
          placeholder="E.g example@whatmail.com"
        />
        <Input
          value={funding}
          change={setFunding}
          label="Estimate Funding Amount "
          placeholder="Enter your estimate funding amount"
        />
      </div>
      <div className="mt-[30px]">
        <TextArea value={description} change={setDescription}  label="Description of project" placeholder="E.g NFT" />
      </div>
      <div className="flex md:justify-center mt-[40px]">
        <Button text="Submit details" solid={true} />
      </div>
    </form>
  );
};
