"use client";

import { createContext, useState, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";

const LoadingContext = createContext();

export default function LoaderContextProvider({ children }) {
  const [isLoading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);
  const [isOpen, setOpen] = useState(false);

  return (
    <LoadingContext.Provider
      value={{ isLoading, setLoading, isOpen, setOpen, success, setSuccess }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoader = () => {
  const { isLoading, setLoading, isOpen, setOpen, success, setSuccess } =
    useContext(LoadingContext);
  return { isLoading, setLoading, isOpen, setOpen, success, setSuccess };
};
