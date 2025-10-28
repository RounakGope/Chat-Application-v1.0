import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Room from './component/create-room'
import Chat from './component/chat'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    
   <BrowserRouter>
 <Toaster  toastOptions={{ style: { zIndex: 2147483647 } }} />
   
    <Routes>
<Route path='/' element={<Room/>}></Route>
<Route path='/chat' element={<Chat/>}></Route>
    </Routes>
      
    
    </BrowserRouter>

    
  )
}

export default App
