import SettingsHeader from "../../ui/settings/header"
import { UserIcon } from "@heroicons/react/20/solid"

export default function UploadImages(){
    return(
        <div className="flex flex-col border-4 border-black/20 items-center w-full h-full bg-[whitesmoke] rounded-sm p-2">
            <SettingsHeader title={"upload An image"} />

            <div className="flex items-center justify-center w-1/2">
        <UserIcon className="text-black/20 w-10 md:w-16 h-10 md:h-16"/>
          </div>

          <form className="flex flex-col w-1/2 p-1 md:p-2">
          <input
          className="p-1 text-xs md:text-sm text-black/40 outline-0 rounded-sm"
          type="file"
          accept="image/*"
          style={{
            boxShadow: "inset 1px 1px 5px black, inset -2px -2px 5px white"
          }}
          >
          </input>
          <button className="m-1 md:m-2">
            update
            </button>

          </form>

        </div>
    )
}