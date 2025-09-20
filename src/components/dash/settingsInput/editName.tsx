import SettingsHeader from "../../ui/settings/header";
import { UserIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import UpdateUserName from "../../functions/settingsFunctions/updateUsername";

export default function EditName() {
  const [username, setUserName] = useState("");
  return (
    <div className="flex flex-col border-4 border-black/20 items-center w-full h-full bg-[whitesmoke] rounded-sm">
      <SettingsHeader title="edit username" />
      <div className="flex items-center justify-center w-1/2">
        <UserIcon className="text-black/20 w-10 md:w-16 h-10 md:h-16" />
      </div>

      <form 
      className="flex flex-col w-fit-2 m-2"
      onSubmit={(e)=>{
        e.preventDefault()
        UpdateUserName(username)
      }}
      >
        <input
          className="p-1 m-1 outline-0 rounded-sm text-xs md:text-sm"
          type="text"
          placeholder="enter new username"
          style={{
            boxShadow: "inset 1px 1px 5px black, inset -1px -1px 5px white",
          }}
          onChange={(e)=> setUserName(e.target.value)}
          required
        ></input>

        <button 
        type="submit"
        >update</button>
      </form>
    </div>
  );
}
