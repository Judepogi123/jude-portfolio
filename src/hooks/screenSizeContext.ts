import { createContext,useContext } from "react";

interface ContextType {
    isXXlarge: boolean,
    isXlarge: boolean,
    isLarge: boolean,
    isMedium: boolean,
    isSmall: boolean,
    isPortrait: boolean,
    isRetina: boolean,
}

export const ScreenSizeContext = createContext<ContextType | null>(null);

export const useScreenSizeContext = ()=>{
    const screenSize = useContext(ScreenSizeContext)

    if(screenSize === undefined){
        throw new Error("The screen size context must be only use inside the provider!")
    }
    return screenSize
}