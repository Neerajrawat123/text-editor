import React, { useState } from 'react'
import { FaFileCirclePlus } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoFileDirectory, GoFileDirectoryFill } from "react-icons/go";
import FileViewer from './FileViewer';


function MainComponents({ info }) {
  const { name, children } = info;
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="ps-1">
      <div className='flex  justify-between w-full  ' onClick={() => setIsOpen((prev) => !prev)}>
        <div className='flex items-center text-sm '>
          <span className='text-xl transform rotate-[270deg]'>
            <RiArrowDropDownLine />
          </span>
          <span>{name}</span>
        </div>
        <div className="flex gap-1">
          <button ><FaFileCirclePlus /></button>
          <button><GoFileDirectoryFill /></button></div>

      </div>
      <div className={isOpen ? 'block' : 'hidden'}>

        {children && children.length > 0 && children.map((item) => (
          < FileViewer key={item.id} info={item} />

        ))}  </div>
    </div >

  )
}

export default MainComponents
