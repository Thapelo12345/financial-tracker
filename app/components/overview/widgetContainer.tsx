"use client"

import MiniPots from "./miniPots"
import MiniTransaction from "./miniTransaction"
import MiniBudget from "./miniBudget"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function Widgets(){

    const animateWidgets: string = "widget";

    useGSAP(() =>{
        gsap.fromTo(".widget", {
            scale: 0.1
        }, 
        {
            scale: 1,
            duration: 1,
            ease: "circ.inOut",
            stagger: 0.3
        })
    })

    return(
         <div className="flex flex-col justify-evenly md:flex-row w-full">
        <div className="w-full md:w-1/2 h-90 md:h-10 m-2 mb-4">
          <MiniPots animate={animateWidgets}/>
          <MiniTransaction animate={animateWidgets} />
        </div>

        <div className="w-full md:w-1/2 h-[60%] m-2 bg-white rounded-lg p-2 shadow-sm overflow-y-auto">
          <MiniBudget animate={animateWidgets}/>
        </div>
      </div>
    )
}