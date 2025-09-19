import DashAvatar from "./dashAvatar";
import DashNav from "./dashNav";
import Settings from "./settings";
import { SettingsContext } from "./settingsContext";
import { useEffect, useState, useContext } from "react";

export default function Dash() {
  const settings = useContext(SettingsContext);

  const [username, setUsername] = useState("User not found!");
  const [userAvatar, setAvatar] = useState("");
  // const [openSettings, setOpenSettings] = useState(false)

  useEffect(() => {
    const currentUser = sessionStorage.getItem("currentUser");
    try {
      const user = currentUser ? JSON.parse(currentUser) : null;
      if (user && user.name) {
        setUsername(user.name);
        setAvatar(user.avatar);
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
    }
  }, []);

  return (
    <header
      className={`w-[190px] h-full m-0 rounded-tr-lg rounded-br-lg items-center z-50 overflow-y-auto overflow-x-hidden`}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.9)",
      }}
    >
      <DashAvatar username={username} avatar={userAvatar} />
      <div 
      className="flex duration-400 flex-row m-0 items-center justify-start w-90 h-70"
      style={{
        transform: settings.currentValue ? "translateX(-50%)" : "translateX(0%)",
      }}
      >
        <DashNav />
        <Settings />
      </div>
      {/* {settings.currentValue && <Settings />}
      {!settings.currentValue && <DashNav />} */}
    </header>
  );
}
