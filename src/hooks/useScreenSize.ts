// src/hooks/useScreenSize.ts

import { useEffect, useState } from "react";

export type BreakpointsType = typeof breakpoints;

const breakpoints = {
  base: 375,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Adicione um check para garantir que o código é executado apenas do lado do cliente
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      // Chame handleResize imediatamente para definir as dimensões iniciais
      handleResize();

      // Remova o event listener ao desmontar o componente
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return { screenSize, breakpoints };
};

export default useScreenSize;
