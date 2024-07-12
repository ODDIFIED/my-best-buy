import React, { useContext } from 'react'
import ElectContext from '../../../Context/ElectContext'
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const Darkmode = () => {
    const {theme} = useContext(ElectContext)
    const {handleToggle} = useContext(ElectContext)
  return (
    <div>
        <div className='' onClick={()=>{handleToggle()}}> 
            {theme === 'light' ? (<FaToggleOff className='dark:fill-black-500' color='black' size={'30px'}  />)
            : 
            (<FaToggleOn color='green' size={'30px'}  />)
        }
      </div>
    </div>
  )
}

export default Darkmode