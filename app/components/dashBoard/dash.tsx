'use client'

import DashNav from './dashNav'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import DashAvatar from './dashAvatar'

export default function Dash(){
  const currentUrl = usePathname()
  const [currentPage, setCurrentPage] = useState('/')

  useEffect(() => {setCurrentPage(currentUrl)}, [currentUrl])
  
  return(
    <header 
    className={
      `bg-black/80 w-[16%] rounded-tr-lg rounded-br-lg items-center ${currentUrl == '/' ? "hidden" : "black"}`}
    >
    <DashAvatar username='Thapelo Sikhosana'/>
      <DashNav />
    </header>
  )
}