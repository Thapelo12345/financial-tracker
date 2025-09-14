import { motion } from "framer-motion"
import { useContext } from "react"
import { BillContext } from "../../submitForms/billsFunctions/billContext"

type status = string[]

const statusArray:status = ["active", "pause", "inactive"]

export default function BillStatusButton(){

    const theme = useContext(BillContext)

    return(
        <motion.div
        className="relative text-white text-sm font-bold p-2 rounded-[20px] cursor-pointer"

        style={{
            backgroundColor: theme.headColor,
            border: "2px solid white",
            boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.6), inset 0px 0px 5px white",
            textShadow: "0px 0px 1px black",
        WebkitBoxReflect: "below 10px linear-gradient(to bottom, rgba(0,0,0, 0.0), rgba(0,0,0,0.4))"
        }}

        animate={{
            rotateX: [0, 10, 0, -10, 0],
            x:[2, 0, -2, 0],
            rotateY: [0, 10, 0, -10, 0],
        }}

        transition={{
            duration: 1.5,
            repeat: Infinity,
            type:"tween",
            ease: "linear"
        }}
        onClick={()=>{
            const indexPosition = statusArray.indexOf(theme.statusTheme)
            
            if(indexPosition + 1 !< statusArray.length){theme.setTheme(statusArray[indexPosition + 1])}
            else{theme.setTheme(statusArray[0])}
        }}
        >
           {theme.statusTheme.toUpperCase()}
        </motion.div>
    )
}