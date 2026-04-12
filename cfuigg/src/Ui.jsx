import React from 'react'
import { useNavigate } from "react-router-dom";

const Ui = () => {
  const navigate = useNavigate();

  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <button 
        onClick={() => navigate("/home")}
        className='text-white bg-green-400 px-5 py-3 rounded-2xl cursor-pointer'
      >
        Click Here
      </button>
    </div>
  )
}

export default Ui