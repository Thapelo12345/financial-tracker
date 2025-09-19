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
      <div className="w-20 h-30 bg-white z-10"></div>
    </div>
  );
}
