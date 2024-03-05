"use client";

import { useIframe } from "../context/iframecontext";
import { useRef } from "react";

export const CoinIframe = () => {
  const { iframe, setCurrentIframe } = useIframe();

  const modal = useRef<HTMLDivElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modal.current && !modal.current.contains(event.target as Node)) {
      setCurrentIframe(undefined);
    }
  };

  if (true) {
    return (
      <div
        className="bg-black/[0.65] z-20 fixed w-full h-full flex justify-center items-center "
        onClick={handleClick}
      >
        <div className="max-w-[900px] w-full h-[80%]" ref={modal}>
          <iframe
            id="inlineFrameExample"
            title="Inline Frame Example"
            className="w-full h-full"
            src={`https://coinmarketcap.com/currencies/senate`}
            sandbox="allow-scripts allow-popups"
          ></iframe>
        </div>
      </div>
    );
  }

  return null;
};
