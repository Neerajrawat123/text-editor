import { RiArrowDropDownLine } from "react-icons/ri";

import { FaFileCirclePlus } from "react-icons/fa6";
import { useState } from "react";
import { useFileStore } from "../../store/fileStore";


function FileViewer({ info }) {
  const { fileId, setId, setFile } = useFileStore()
  const { id, name, children, isDirectory } = info
  const [isOpen, setIsOpen] = useState(false)
  const [val, setVal] = useState('')

  function handleClick(params: type) {
    setIsOpen((prev) => !prev)
    setId(id)
    setFile(id)
  }



  return (
    <div className="pl-4">


      <div className={fileId === id ? 'border-blue-500 border ' : ''} onClick={handleClick}>
        <div className='flex  items-center gap-1'
        >             {isDirectory ? (<span className='text-xl transform rotate-[270deg]'>
          <RiArrowDropDownLine size={16} />
        </span>) : (
          <span className='text-sm'>
            <FaFileCirclePlus />
          </span>

        )
          }
          {name}
        </div>

      </div>

      <div className={isOpen ? 'block' : 'hidden'}>
        {/* {isDirectory && ( */}
        {/*   <form onSubmit={() => console.log('makeing file')}> */}
        {/*     <input value={val} onChange={(e) => setVal(e.target.value)} /> */}
        {/**/}
        {/*   </form> */}
        {/* )} */}
        {children && children.length > 0 && children.map((info) => (
          <FileViewer key={info.id} info={info} />
        ))}


      </div>

    </div >
  )
}

export default FileViewer
