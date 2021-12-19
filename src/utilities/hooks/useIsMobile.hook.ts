import { useEffect, useState, useCallback } from "react";

export const MOBILE_BP_768 = 768;

interface IUseIsMobile {
  isMobile: boolean;
}

export const useIsMobile = (): IUseIsMobile => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BP_768);

  const handleResize = useCallback(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < MOBILE_BP_768);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isMobile,
  };
};
