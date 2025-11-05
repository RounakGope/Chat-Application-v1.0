import React from 'react'

const joincreateroom = () => {
  return (

    <div className='flex border  min-h-screen items-center justify-center'>
        <div className='p-8  flex flex-col gap-9 rounded-2xl items-center w-full max-w-md dark:bg-gray-700 '>
            <h1 className='text-2xl text-center font-bold'>Join or Create</h1>
            <div> 
                <label htmlFor="name" className='font-mono mb-10'>Enter Your Name</label>
                <input type="text" id='name' className='w-full dark:bg-neutral-500 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500   transition duration-200'
 />
            </div>
            <div> 
                <label htmlFor="roomId" className='font-mono mb-10'>Enter Room Id</label>
                <input type="text" id='roomId' className='w-full dark:bg-neutral-500 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500  transition duration-200' />
            </div>
            <div className='flex gap-4'>
                <button className='button dark:bg-green-600 rounded-2xl px-4 py-2 hover:dark:bg-green-800 transition-colors duration-300'>Join Room</button>
                <button className='button dark:bg-orange-600 rounded-2xl px-4 py-2 hover:dark:bg-orange-800 transition-colors duration-300'>Create Room</button>
           
            </div>
            
        </div>
       
      
    </div>
  )
}

export default joincreateroom
