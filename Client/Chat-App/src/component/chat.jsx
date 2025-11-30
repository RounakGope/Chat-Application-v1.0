import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import {IoMdSend} from 'react-icons/io'
import send from '../assets/send.svg'
import {MdAttachFile} from 'react-icons/md'
import useChatContext from '../context/ChatContext'
import { useNavigate } from 'react-router'
import { baseURL } from '../config/Caxios'
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { getMessages} from "../services/roomService";
import {timeAgo} from '../config/helper'





const chat = () => {
  const {connect,currentUser,roomId,setConnect}=useChatContext();
  const Navigate=useNavigate();

  const [message,setMessage]=useState([
    
  ])
  const inputRef=useRef(null);
  const [input,setInput]=useState("");
  const chatBoxRef=useRef(null);
  const [stompClient, setStompClient]=useState(null)
  function leaveOnClick() {
    toast.success("Left the Room Successfully");
    stompClient.deactivate();
    setConnect(false);
    Navigate("/join-create");

  }
  useEffect(()=>
  {
    const loadMessages=async()=>{
    if(chatBoxRef.current)
    {
      chatBoxRef.current.scroll({
        top:chatBoxRef.current.scrollHeight,
        behavior:"smooth"
      })
    }}
    if(connect){
    loadMessages();
  }

  },[message])
  useEffect(()=>{
    const loadMessages=async()=>{
      if(!roomId)
      {
        return;
      }
      try{
        const messagesfromserver=await getMessages(roomId);
        console.log(messagesfromserver);
        setMessage(messagesfromserver);

      }
      catch(error)
      {
        console.log(error);
    }
  }
    loadMessages();
},[roomId]);

  useEffect(()=>
  {
    
  const socket = new SockJS(`${baseURL}/chat`);

  const client = new Client({
    webSocketFactory: () => socket,
    reconnectDelay: 5000, // auto reconnect
    onConnect: () => {
      setStompClient(client)
      console.log("Connected");
      toast.success("Connected")

      client.subscribe(`/topic/${roomId}`, (msg) => {
        const newMessage = JSON.parse(msg.body);
        setMessage((prev) => [...prev, newMessage]);
      });
    },
  });

  client.activate();

  return () => {
    if (client.connected) {
      client.deactivate();
    }
  };
  },[roomId])

  const sendMessage=async()=>{
    console.log("send message run")
    if(stompClient && connect && input.trim())
    {
      console.log(input);
     // console.log(currentUser);
     // console.log(input.trim());
      //console.log(stompClient);
     // console.log(connect);
    
    const newMessage={
      sender:currentUser,
      content:input,
      roomId:roomId
    
    }

    stompClient.publish({
      destination:`/app/sendMessage/${roomId}`,
      body:JSON.stringify(newMessage)
    });
      setInput("");
    
  }
}
  
  return (
  <div>
   
   <header className='flex flex-row min-w-full justify-between fixed shadow p-4 dark:bg-gray-800 items-center'>
    <div>
      <h1>Room No <span className='text-blue-600'>{roomId}</span></h1>

    </div>
    <div>
      <h1>
        User: <span className='text-green-600 font-semibold'>{currentUser}</span>
      </h1>
    </div>
    <div>
      <button onClick={leaveOnClick} className=" button py-2 px-3 rounded dark:bg-red-500 dark:hover:bg-red-800 transition-colors duration-300"> Leave Room</button>

    </div>
   </header>
   <main ref={chatBoxRef} className='  h-screen p-20 pb-40 overflow-auto'>
    <div  className=' flex flex-col   gap-4'>

      {
        message.map((msg,index)=>
        (
          
            <div key={index} className={`flex ${msg.sender===currentUser?"justify-end":"justify-start"}`}>
              <div className='w-72  dark:bg-gray-600 rounded-2xl p-4 shadow-lg shadow-slate-950'>
                <p className='font-extrabold'>{msg.sender}</p>
                <p className='font-thin'>{msg.content}</p>
                <p className='font-sans text-sm text-gray-800'>{timeAgo(msg.timeStamp)}</p>
              </div>
            </div>

        )
        )
      }
      
    </div>
   </main>

   <div className='flex fixed bottom-0 w-full p-2 justify-center items-center glassy-morphism '>

      <div className='  dark:bg-gray-800 rounded-2xl flex justify-around w-2/3 shadow-lg shadow-gray-950  p-6'>
         <input 
         value={input}
         onChange={(msg)=>{
          setInput(msg.target.value);
         }}
         onKeyDown={(e)=>{
            if(e.key==="Enter")
            {
              sendMessage();

            }
          }}
          type="text"
          
           placeholder='type your message here ...' 
           className='h-full w-2/3 bg-slate-700 border-blue-700 rounded-full focus:outline-none px-5 py-2' />
           
           <button className='button dark:bg-blue-700 px-4 rounded-xl py-2'>
              <MdAttachFile size={20}/>
            </button>
            <button onClick={sendMessage} className='button dark:bg-green-700 px-4 rounded-xl py-2'>
              Send
            </button>

             </div>
   
             
             
             </div>
             
             
             
             
             </div>


  )
}

export default chat
