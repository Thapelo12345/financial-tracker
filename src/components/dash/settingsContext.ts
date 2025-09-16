import { createContext } from "react";

interface settings {
    currentValue: boolean;
    closeSettings: (value: boolean)=> void;
}

export const SettingsContext = createContext<settings>({
    currentValue: false,
    closeSettings: ()=>{}
})
