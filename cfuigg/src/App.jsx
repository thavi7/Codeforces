import React from 'react'
import Ui from './Ui'
import { Route, Routes } from 'react-router-dom'
import Show from './Show'

const App = () => {
  return (
    <div className='text-white h-screen w-full'>
      <Routes>
        <Route path='/' element={<Ui />} />
        
        <Route path='/home' element={<Show/>} />
      </Routes>
    </div>
  )
}

export default App

