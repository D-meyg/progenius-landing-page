"use client";

import { useState, useEffect } from "react";
import { useIframe } from "../context/iframecontext";
import { PopupModal } from "react-calendly";

export const InnerBackground = () => {
  const { open, setOpen } = useIframe();

  const [modal, setModal] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setModal(document.getElementById("modal"));
  }, []);

  return (
    <>
      <div
        id="modal"
        className="fixed top-0 left-0 w-full h-full"
        style={{
          display: open ? "block" : "none",
          zIndex: open ? 50 : -10,
        }}
      ></div>
      {modal && (
        <PopupModal
          url="https://calendly.com/matt_admin"
          onModalClose={() => setOpen(false)}
          open={open}
          rootElement={modal as HTMLDivElement}
        />
      )}
      <div className="absolute pt-[20px] w-full h-full text-white z-0">
        <div className="hidden md:flex flex-col gap-[300px]">
          {Array.from({ length: 10 }, (_, index) => {
            return (
              <div className="min-h-[478px] w-full" key={index}>
                <div className="h-[200px] flex justify-center">
                  <div className="purple ml-[200px]"></div>
                </div>
                <div className="h-[152px] flex">
                  <div className="pink"></div>
                </div>
                <div className="h-[152px] flex justify-end">
                  <div className="yellow"></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="md:hidden flex flex-col gap-[300px]">
          {Array.from({ length: 16 }, (_, index) => {
            return (
              <div className="min-h-[478px] w-full" key={index}>
                <div className="h-[200px] flex justify-center">
                  <div className="purple ml-[200px]"></div>
                </div>
                <div className="h-[152px] flex">
                  <div className="pink"></div>
                </div>
                <div className="h-[152px] flex justify-end">
                  <div className="yellow"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
