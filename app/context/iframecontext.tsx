'use client'

import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useContext,
} from "react";

interface IframeContextType {
  iframe: string | undefined;
  setCurrentIframe: Dispatch<SetStateAction<string | undefined>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>
}


const IframeContext = createContext<IframeContextType>({
  iframe: undefined,
  setCurrentIframe: () => {},
  open: false,
  setOpen: () => {}
});

export const IframeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [iframe, setCurrentIframe] = useState<string | undefined>(undefined);
  const [open, setOpen] = useState(false)

  return (
    <IframeContext.Provider value={{ iframe, setCurrentIframe, open , setOpen }}>
      {children}
    </IframeContext.Provider>
  );
};

export const useIframe = () => {
  const { iframe, setCurrentIframe, open, setOpen } = useContext(IframeContext);
  return { iframe, setCurrentIframe , open , setOpen};
};
