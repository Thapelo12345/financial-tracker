
import { ChevronRightIcon } from "@heroicons/react/20/solid"

type Props = {

}
export default function MiniDetailsBtn(){
    return(
        <button className="flex text-black/50 text-xs flex-row justify-between p-3">
            see Details
            <ChevronRightIcon className="text-end w-4 h-4 font-bold text-black" />
        </button>
    )
}