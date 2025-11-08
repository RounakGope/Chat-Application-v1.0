import React from "react";

const JoinCreateRoom = () => {
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
            type="text"
            id="name"
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
            placeholder="e.g., 12345"
            className="w-full bg-black text-white px-4 py-3 rounded-xl border border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder-gray-500"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 w-full justify-center">
          <button className="w-1/2 py-3 rounded-xl font-semibold bg-green-600 text-white hover:bg-green-700">
            Join Room
          </button>
          <button className="w-1/2 py-3 rounded-xl font-semibold bg-orange-600 text-white hover:bg-orange-700">
            Create Room
          </button>
        </div>

        <p className="text-sm text-gray-500 text-center mt-4">
          Minimal dual-tone interface — black & white theme 🖤
        </p>
      </div>
    </div>
  );
};

export default JoinCreateRoom;
