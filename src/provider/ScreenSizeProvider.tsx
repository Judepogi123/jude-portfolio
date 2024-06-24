import React from "react";

//lib
import { useMediaQuery } from "react-responsive";

//types and interfaces

interface ContextType {
  isXXlarge: boolean;
  isXlarge: boolean;
  isLarge: boolean;
  isMedium: boolean;
  isSmall: boolean;
  isPortrait: boolean;
  isRetina: boolean;
}

//context
import { ScreenSizeContext } from "@/hooks/screenSizeContext";

const ScreenSizeProvider = ({ children }: { children: React.ReactNode }) => {
  const isXXlarge = useMediaQuery({ query: "(min-width: 1536px)" });
  const isXlarge = useMediaQuery({ query: "(min-width: 1280px)" });
  const isLarge = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMedium = useMediaQuery({ query: "(min-width: 768px)" });
  const isSmall = useMediaQuery({ query: "(max-width: 640px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  const value: ContextType = {
    isXXlarge: isXXlarge,
    isXlarge: isXlarge,
    isLarge: isLarge,
    isMedium: isMedium,
    isSmall: isSmall,
    isPortrait: isPortrait,
    isRetina: isRetina,
  };
  return (
    <ScreenSizeContext.Provider value={value}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export default ScreenSizeProvider;
