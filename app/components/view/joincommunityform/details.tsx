import { Input } from "../section/contact/input";
import { Button } from "../../button";
import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";

export const DetailsForm = ({
  fullname,
  handle,
  email,
  setFullname,
  setEmail,
  setHandle,
  setIndex
}: {
  fullname: string;
  handle: string;
  email: string;
  setFullname: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setHandle: Dispatch<SetStateAction<string>>;
  setIndex: Dispatch<SetStateAction<number>>;
}) => {

  const emailRegex = (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test((email)))
  const isValid = fullname !== "" && handle !== "" && email !== "" && emailRegex;


  const checKValidity = () => {
    if(!isValid) {
      toast.error("Enter Valid Information")
      return
    }
    setIndex(1)
  }


  return (
    <div className="">
      <div className="flex flex-col gap-[34px]">
        <Input
          value={fullname}
          change={setFullname}
          label="Fullname"
          placeholder="E.g Micheal james"
        />
        <Input
          value={handle}
          change={setHandle}
          label="Telegram handle"
          placeholder="E.g @Dexy0013"
        />
        <Input
          value={email}
          change={setEmail}
          type="email"
          label="Email address"
          placeholder="E.g example@Whatmail.com"
        />
        <div className="hidden md:flex relative overflow-hidden w-full" onClick={checKValidity}>
          {!isValid && (
            <div className="hidden md:flex absolute w-full h-full bg-black/60 z-10 rounded-[50px]"></div>
          )}
          <Button solid text="Next" width="391px" />
        </div>
        <div className="md:hidden flex relative overflow-hidden w-full" onClick={checKValidity}>
          <div className="absolute w-full h-full bg-black/60 z-10 rounded-[50px]"></div>
          {!isValid && (
            <div className="hidden md:flex absolute w-full h-full bg-black/60 z-10 rounded-[50px]"></div>
          )}
          <Button solid text="Next" />
        </div>
      </div>
    </div>
  );
};
