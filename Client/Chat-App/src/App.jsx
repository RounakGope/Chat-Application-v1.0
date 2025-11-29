import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Chat from './component/chat'
import { Toaster } from 'react-hot-toast'
import JoinCreateRoom from './component/joincreateroom'

function App() {

  return (
    
   <BrowserRouter>
 <Toaster  toastOptions={
  { style:
   { zIndex: 2147483647 } }} />
    <Routes>
<Route path='/chat' element={<Chat/>}></Route>
<Route path='/' element={<JoinCreateRoom/>}></Route>
<Route path='/join-create' element={<JoinCreateRoom/>}></Route>

    </Routes>

    
      
    
    </BrowserRouter>

    
  )
}

export default App
