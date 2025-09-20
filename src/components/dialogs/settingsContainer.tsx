import { useContext } from "react";
import { SettingsContext } from "../dash/settingsContext";
import UploadImages from "../dash/settingsInput/uploadImage";
import EditName from "../dash/settingsInput/editName";
import DeletAccount from "../dash/settingsInput/deleteAcc";

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
      <div className="w-100 duration-500 rounded-sm shadow-2xl h-auto bg-[whitesmoke] z-10 mt-40"
      style={{
        transform: settings.settingsInput ? "translateX(200px)" : "translateX(-400px)"
      }}
      >
        {settings.clicked === "updateName" && <EditName />}
        {settings.clicked === "updateImage" && <UploadImages />}
        {settings.clicked === "delete" && <DeletAccount />}
        
      </div>
    </div>
  );
}
