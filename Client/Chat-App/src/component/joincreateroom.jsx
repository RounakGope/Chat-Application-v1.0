import React, { useState } from "react";
import toast from "react-hot-toast";
import { createRoom as createRoomApi,joinRoom as joinRoomApi } from "../services/roomService";
import useChatContext from "../context/ChatContext";
import { useNavigate } from "react-router-dom";

const JoinCreateRoom = () => {
  const navigate=useNavigate();
  const [detail ,setDetail]=useState({
    roomId:"",
    userName:"",
  });
  const {roomId,setRoomId,connect,setConnect,currentUser,setCurrentUser}=useChatContext();


  function validateForm( ) {
    if(detail.userName===""||detail.roomId==="")
    {
      toast.error("Empty Inputs are Not Accepted");
      return false;
    }
    else
    return true;

    
  }

  async function joinRoom() {
    if(validateForm())
    {
      try
      {
        const room=await joinRoomApi(detail.roomId);
        toast.success("Joined Room...");
        setConnect(true);
        setCurrentUser(detail.userName);
        setRoomId(room.roomId);
        navigate('/chat');
      }
      catch(error)
      {
        console.log(error);
        if(error.status==400)
          toast.error("Room Not Found!");
      }

    }
    
  }
  async function createRoom() {
    if(validateForm())
    {
      console.log(detail)
      try
      {
        const response = await createRoomApi(detail);
        toast.success("Room Created Successfully. Room ID: "+response.roomId);
        setCurrentUser(detail.userName);
        setRoomId(response.roomId);
        setConnect(true);
        navigate('/chat');
        

      }
      catch(error)
      {
        console.log(error);
        if(error.status==400)
          toast.error("Room already exist");

      }

    }
    
  }

function onhandleformChange(event)
  {
    setDetail({
      ...detail,
      [event.target.name]:event.target.value,
    }
    );

  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <div className="bg-neutral-900 border border-gray-700 shadow-lg rounded-3xl p-10 flex flex-col gap-8 items-center w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-white tracking-wide">
          Join or Create Room
        </h1>

        {/* Name Input */}
        <div className="w-full">
          <label
            htmlFor="name"
            className="block mb-2 text-gray-300 font-medium tracking-wide"
          >
            Enter Your Name
          </label>
          <input
          onChange={onhandleformChange}
            type="text"
            id="name"
            value={detail.userName}
            name="userName"
            placeholder="e.g., Rounak"
            className="w-full bg-black text-white px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder-gray-500"
          />
        </div>

        {/* Room ID Input */}
        <div className="w-full">
          <label
            htmlFor="roomId"
            className="block mb-2 text-gray-300 font-medium tracking-wide"
          >
            Enter Room ID
          </label>
          <input
            type="text"
            id="roomId"
           // name="roomId"

            value={detail.roomId}
            name="roomId"
            onChange={onhandleformChange}
            placeholder="e.g., 12345"
            className="w-full bg-black text-white px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder-gray-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 w-full justify-center">
          <button onClick={joinRoom} className="w-1/2 py-3 rounded-xl font-semibold bg-green-600 text-white hover:bg-green-700">
            Join Room
          </button>
          <button onClick={createRoom} className="w-1/2 py-3 rounded-xl font-semibold bg-orange-600 text-white hover:bg-orange-700">
            Create Room
          </button>
        </div>

        
      </div>
    </div>
  );
};

export default JoinCreateRoom;
