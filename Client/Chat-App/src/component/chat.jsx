import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast'
import {IoMdSend} from 'react-icons/io'
import send from '../assets/send.svg'
import {MdAttachFile} from 'react-icons/md'

const chat = () => {
  const [message,setMessage]=useState([
    {
      content:"heello ronak",
      sender:"Rounak",
    },
    {
      content:"heasdfj alksdf jkajfs kjkljask jklaj kajk fjak jlfkaj kljasdkf jakf jaklj kaljfkl jakfj akljf klafello kaka",
      sender:"Rajesh",
    },
    {
      content:"asdfl kajsdf lk jaasd;lk jf lasdj asdlkj faskldj fkldsj fklajsdkl fjaskj klajsd kfjaslkj faskldj klasjd lakjssdfkj aslkd jklasjdf kljasdkj flaksdj fklajsdfkl jalkdfj aklsdjf klajds klajsdklf jasdklfj klasjf kajsklf jaskjl flkaj fklj fklafjkljaewklfjaj klajdskl" ,sender:"Rajesh",
    }
  ])
  const inputRef=useRef(null);
  const [input,setInput]=useState("");
  const chatBoxRef=useRef(null);
  const [stompClient, setStompClient]=useState("");
  const [roomId,setRoomId]=useState("");
  const [currentUser,setCurrentUser]=useState("Rounak");
  return (
  <div>
   
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
   <main className='  h-screen p-20 pb-40 overflow-auto'>
    <div className='flex flex-col   gap-4'>

      {
        message.map((msg,index)=>
        (
          
            <div key={index} className={`flex ${msg.sender===currentUser?"justify-end":"justify-start"}`}>
              <div className='w-72  dark:bg-gray-600 rounded-2xl p-4 shadow-lg shadow-slate-950'>
                <p className='font-extrabold'>{msg.sender}</p>
                <p className='font-thin'>{msg.content}</p>
              </div>
            </div>

        )
        )
      }
      
    </div>
   </main>

   <div className='flex fixed bottom-0 w-full p-2 justify-center items-center glassy-morphism '>

      <div className='  dark:bg-gray-800 rounded-2xl flex justify-around w-2/3 shadow-lg shadow-gray-950  p-6'>
         <input type="text" placeholder='type your message here ...' 
           className='h-full w-2/3 bg-slate-700 border-blue-700 rounded-full focus:outline-none px-5 py-2' />
           
           <button className='button dark:bg-blue-700 px-4 rounded-xl py-2'>
              <MdAttachFile size={20}/>
            </button>
            <button className='button dark:bg-green-700 px-4 rounded-xl py-2'>
              Send
            </button>

             </div>
   
             
             
             </div>
             
             
             
             
             </div>


  )
}

export default chat
