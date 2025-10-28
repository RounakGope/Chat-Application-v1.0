import React from 'react'
import toast from 'react-hot-toast'

const chat = () => {
  return (
     <div>
      
      <h1 className="text-5xl font-bold underline">
    This Is Create Chat!
  </h1>
  <button  onClick={()=>{
    toast.success("Button Clicked")
    console.log("Button Clicked")
  }}>Click Mee</button>
    </div>
  )
}

export default chat
