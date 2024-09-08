import React from 'react'
import { files } from '../../utils/data'
import MainComponents from './MainComponents'
function FileExplorer() {
  return (
    <div className='w-1/5 h-screen border-2 border-gray-500 '>
      <h1 className='text-sm px-2 py-1'>Explorer</h1>
      <div className='w-full'>

        <MainComponents info={files} />
      </div>
    </div>
  )
}

export default FileExplorer
