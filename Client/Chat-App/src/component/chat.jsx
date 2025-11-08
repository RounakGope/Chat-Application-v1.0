import React from 'react'
import toast from 'react-hot-toast'

const chat = () => {
  return (<div>
   
   <header className='flex flex-row min-w-full justify-between fixed shadow p-4 dark:bg-gray-800 items-center'>
    <div>
      <h1>Room No <span>2405751</span></h1>

    </div>
    <div>
      <h1>
        User: <span>Rounak Kumar Gope</span>
      </h1>
    </div>
    <div>
      <button className=" button py-2 px-3 rounded dark:bg-red-500 dark:hover:bg-red-800 transition-colors duration-300"> Leave Room</button>

    </div>
   </header>
  </div>
  )
}

export default chat
