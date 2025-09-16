import { createContext } from "react";

interface billContext {
    statusTheme:string,
    backGround: string,
    headColor:string,
    setTheme: (theme: string) => void;
    
}

export const BillContext = createContext<billContext>({
    statusTheme: "active",
    backGround: "rgba(0, 255, 0, 0.5)",
    headColor:"120, 100%, 90%)",
    setTheme: () => {}
});

interface LoadingContext{
    load: (value: boolean) => void
}

export const LoadContext = createContext<LoadingContext>({ 
    load: ()=>{}
})