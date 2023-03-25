import { useState ,useRef} from "react";
import React from "react";

const Sidebar = () => {
    const messageRef=useRef()
  const [showSidebar, setShowSidebar] = useState(false);
  const [message,setMessage]=useState([])
    const displayMessage=()=>{
        setMessage(e=>[...e, <div className="w-5/6 border rounded m-2 p-2 text-left left-0 ">
        <h1>UseName</h1> <span> <h1>{messageRef.current.value}</h1></span>
      </div>]) 
    }
    const sendMessage=(e)=>{
        displayMessage()
    }
  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer right-10 top-6"
          fill="#2563EB"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 right-0 w-[35vw] bg-gray-700  p-10 pl-20 text-white fixed h-full z-40    ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        {/* <h2 className="mt-20 text-4xl font-semibold text-white text-left"> </h2> */}
        {message}
        <div className="flex justify-around p-4 absolute bottom-0  w-3/4">
          
         <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your message" required ref={messageRef}></input>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={sendMessage}>Send</button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;