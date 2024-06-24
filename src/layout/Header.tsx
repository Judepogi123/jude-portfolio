import {useState} from 'react'

//lib
import { useScroll, motion } from "framer-motion"

import { IoIosMoon } from "react-icons/io";const Header = () => {
  const { scrollYProgress } = useScroll()
  return (
    <div className=' w-full h-16 bg-[#f8f9fa] flex justify-end items-center'>
      <motion.div className=' w-full h-1 bg-[#00b4d8] fixed top-0 left-0 right-0 origin-[0%] z-10' style={{ scaleX: scrollYProgress }} />
      <div className=' mr-3'><IoIosMoon fontSize={25}/></div>
    </div>
  )
}


export default Header