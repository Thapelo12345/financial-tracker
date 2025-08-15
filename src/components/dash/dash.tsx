import DashAvatar from "./dashAvatar";
import DashNav from "./dashNav";
import { useEffect, useState } from "react";

export default function Dash() {
  const [username, setUsername] = useState("User not found!");
  const [userAvatar, setAvatar] = useState("");

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
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
      className={`bg-black/80 w-[190px] h-full m-0 rounded-tr-lg rounded-br-lg items-center`}
    >
      <DashAvatar username={username} avatar={userAvatar} />
      <DashNav />
    </header>
  );
}
