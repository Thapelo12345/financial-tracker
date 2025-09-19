import { useContext } from "react";
import { SettingsContext } from "../dash/settingsContext";

export default function SettingsContainer() {
  const settings = useContext(SettingsContext);

  return (
    <div
      className={`
    ${settings.currentValue === true ? "block" : "hidden"}
    absolute top-0 left-0 flex flex-col w-screen h-screen bg-black/70 z-20`}
    >
      <h1 className="text-white font-extrabold text-4xl text-center">
        Settings
      </h1>
      <div className="w-100 duration-500 rounded-sm shadow-2xl h-60 bg-white z-10 mt-40"
      style={{
        transform: settings.settingsInput ? "translateX(200px)" : "translateX(-400px)"
      }}
      ></div>
    </div>
  );
}
