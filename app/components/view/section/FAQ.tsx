"use client";

import Image from "next/image";
import { ArrowDown } from "../../icons";
import { MotionDiv } from "../../motion/motion";
import { useState } from "react";
import { motion } from "framer-motion";
import { Wrapper } from "../../wrapper";

export const FAQS = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (id: number) => {
    if (index === id) {
      setIndex(0);
      return;
    }
    setIndex(id);
  };

  return (
    <div
      id="#faqs"
      className="flex flex-col gap-6 items-center pt-[40px] pb-[78px] md:px-0 px-[10px]"
    >
      <div className="w-[64px] h-[64px] relative">
        <Image
          sizes="100%"
          src="/assets/question.png"
          alt="question"
          fill={true}
        />
      </div>
      <MotionDiv delay={0.1}>
        <h2 className="text-[32px] font-bold font-outfit tracking-[-0.8px] leading-[46px] text-white text-center md:text-start">
          <span className="textg font-outfit text-[32px] font-bold">
            Frequently
          </span>{" "}
          Asked Questions
        </h2>
      </MotionDiv>
      <MotionDiv delay={0.2}>
        <Wrapper>
          <div className="block md:flex flex-col leading-[20px] font-lg font-outfit text-[rgba(255,255,255,0.7)] text-center">
            <span>
              This is not a get rich quick scheme. If you{"'"}re looking for a
              magic crypto formula that instantly brings in
            </span>
            <span>
              a lot of cash, I can tell you this is not for you. But for those
              willing to learn, put in effort, and have{" "}
            </span>
            <span>patience, the possibilities are vast.</span>
          </div>
        </Wrapper>
      </MotionDiv>
      <div className="mt-[8px] md:w-[800px] flex flex-col gap-[34px] md:px-0 px-[20px]">
        {QuestionsArray.map((question, _) => {
          return (
            <div
              key={_}
              className="flex justify-between font-outfit border-b-[1px] border-b-[#E7E5EA]/[0.1] flex-col overflow-hidden pb-[22px]"
            >
              <div
                className="flex justify-between items-center grow-[1px]"
                onClick={() => handleClick(question.id)}
              >
                <span className="leading-[28px] tracking-[-0.4px] text-lg font-light text-white md:pr-0">
                  {question.question}
                </span>
                <motion.div
                  animate={{
                    rotate: question.id === index ? "0" : "180deg",
                  }}
                  className="w-[24px] h-[24px] flex items-center"
                >
                  <ArrowDown />
                </motion.div>
              </div>
              <motion.div
                animate={{
                  height: question.id === index ? "100%" : "0",
                  opacity: question.id === index ? 1 : 0,
                }}
                className="whitespace-pre-line"
              >
                <p className="leading-[20px] font-lg font-outfit text-[rgba(255,255,255,0.7)] py-[15px]">
                  {question.answer}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const QuestionsArray = [
  {
    id: 1,
    answer:
      "It’s simple. Spread the ProGenius love and reap the rewards! We're talking $50 off for your referred friend and a cool $200 cash-back for you on every NEW annual subscription you bring. Sounds like a win-win to us!",
    question: "What is the Progenius referral program?",
  },
  {
    id: 2,
    answer: "PG will notify your referee when a space becomes available.",
    question: "Can I join the private network at any time?",
  },
  {
    id: 3,
    answer:
      "You must complete the PG membership form to be considered. Due to the exclusivity of PG, you will be required to present what value you can add/offer to the group. You will be held accountable for the terms and conditions of the group.",
    question: "What conditions must be met for me to join the group?",
  },
  {
    id: 4,
    answer: `You do not need to go through the referral program but you must pay an additional admin fee of $350 to be added back to the group as well as keeping up with the monthly payments. You may have been removed from the group due to inactivity and will therefore be required to provide an explanation of the value you will add to the group.

      You will also be required to complete one-month probation where we monitor your participation and value-added.`,
    question: "I am a returning member (previously removed), how do I re-join?",
  },
  {
    id: 5,
    answer: `Participate, participate, participate!, Read the documents sent properly before asking any questions (the relevant information has likely been provided within the decks), Vote for projects even if you are unable to participate

      I’m an existing member and my membership is about to run out in the new year what do I do?
      The annual (non-refundable) fee for the group is $1,500. You will have two payment options:
      One-off payment for the whole year (15% discount on upfront payments making your new fee $1,275), Monthly payment of $150 in advance (at the start of each month)`,
    question: "How do I avoid being removed in the future?",
  },
  {
    id: 6,
    answer: `You do not need to go through the referral program but you must pay an additional admin fee of $350 to be added back to the group as well as keeping up with the monthly payments. You may have been removed from the group due to inactivity and will therefore be required to provide an explanation of the value you will add to the group.

      You will also be required to complete one-month probation where we monitor your participation and value-added.`,
    question: "I am a returning member (previously removed), how do I re-join?",
  },
  {
    id: 7,
    answer: `For members who opt for the monthly payment plan, you will be required to make a payment in advance on the 1st of every month. `,
    question: "When is the payment due date?",
  },
  {
    id: 8,
    answer: `Failure to make the monthly payment on time will result in being removed from the group until the balance is cleared. Please note you will incur an additional admin fee of $350 to be added back to the group.
      
      In an event of gross misconduct or attitudes and behaviours that do not align with PG values, what are the consequences?
      
      ProGenuis is built on Integrity, Honesty, Accountability, Respect, Continuous Learning, and Quality. If you do not adhere to these core values, you face the risk of not only losing your place in the group but also members you have referred too.
      
      Rest assured, PG will conduct a thorough and fair investigation before a decision is reached. Whilst an investigation is ongoing, affected parties will be suspended from participating in any further sales.`,
    question: "What happens if I am unable to make the monthly payment?",
  },
];

/*





















*/
