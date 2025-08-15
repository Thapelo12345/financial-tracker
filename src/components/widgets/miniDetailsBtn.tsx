import { ChevronRightIcon } from "@heroicons/react/20/solid"
import { useNavigate } from "react-router-dom"

type inputUrl = {
    pageUrl: string;
}
export default function MiniDetailsBtn({ pageUrl}: inputUrl){
    const navigate = useNavigate()

    return(
        <button className="flex text-black/50 text-xs flex-row justify-between p-3"
        onClick={()=> navigate(pageUrl)}
        >
            see Details
            <ChevronRightIcon className="text-end w-4 h-4 font-bold text-black" />
        </button>
    )
}