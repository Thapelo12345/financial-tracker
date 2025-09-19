import {
  WrenchScrewdriverIcon,
  ClipboardIcon,
  CameraIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";

export default function Settings() {
  return (
    <nav className="flex flex-col p-2 w-1/2 h-[74.5%]">
      <h1 className="flex flex-row w-[70%] text-sm font-semibold bg-white rounded-tr-lg rounded-br-lg mb-4 p-2">
        <WrenchScrewdriverIcon className="w-5 h-5 mr-2 text-green-500" />
        Settings
      </h1>

      <button className="flex flex-row text-xs text-white m-4 cursor-pointer">
        <CameraIcon className="w-5 h-5 mr-2" />
        Update image
      </button>

      <button className="flex flex-row text-xs text-white m-4 cursor-pointer">
        <ClipboardIcon className="w-5 h-5 mr-2" />
        Update name
      </button>

      <button className="flex flex-row text-xs text-white m-4 cursor-pointer">
        <TrashIcon className="w-5 h-5 mr-2" />
        Delete Acoount
      </button>
    </nav>
  );
}
