import DashAvatar from "./dashAvatar"
import DashNav from "./dashNav"

export default function Dash(){
    return(
        <header
        className={
      `bg-black/80 w-[170px] h-full m-0 rounded-tr-lg rounded-br-lg items-center`}
        >
            <DashAvatar username ='Thapelo Sikhosana'/>
            <DashNav />
        </header>
    
    )
}