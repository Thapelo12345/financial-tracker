import SettingsHeader from "../../ui/settings/header"
import { UserIcon } from "@heroicons/react/20/solid"

export default function EditName(){
    return(
        <div className="flex flex-col border-4 border-black/20 items-center w-full h-full bg-[whitesmoke] rounded-sm">
          <SettingsHeader title="edit username" />
          <div className="flex items-center justify-center w-1/2">
        <UserIcon className="text-black w-16 h-16"/>
          </div>

          <form
          className="flex flex-col w-fit-2 m-2"
          >
            <input
            className="p-1 m-1 outline-0 rounded-sm"
            type="text"
            placeholder="enter new username"
            style={{
                boxShadow: "inset 1px 1px 5px black, inset -1px -1px 5px white"
            }}
            // accept="image/*"
            ></input>

            <button>update</button>
          </form>
        </div>
    )
}