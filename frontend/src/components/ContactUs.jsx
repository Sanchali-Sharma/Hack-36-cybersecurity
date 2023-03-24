import React from 'react';
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

const ContactUs = () => {
  return (
    <>
    <div className="bg-[url('https://cdn.pixabay.com/photo/2022/05/13/06/38/hacker-7192873__480.jpg')] image object-fill">
        
    <div className="flex flex-col md:flex-row mx-auto my-9 ">
        <div className="border h-80vh rounded-xl  mx-auto w-1/3 border m-2 p-2 mt-[134px]">
           <div className="m-2 p-2"><h1 className="text-3xl font-bold text-white">Contact Us</h1></div> 
           <div className="m-2 p-2 border rounded text-center">
            <h2 className="font-bold text-white">ADDRESS:</h2>
            <p className="text-gray-300"> 198 West 21th Street , Suite 721 New York NY </p>
           <p className="text-gray-300"> 10016</p> 
           </div>

           <div className="m-2 p-2 border rounded text-center v">
            <h2 className="font-bold text-white">PHONE:</h2>
            <p className="text-gray-300"> +1234567890</p>
          
           </div>

           <div className="m-2 p-2 border rounded text-center">
            <h2 className="font-bold text-white">EMAIL:</h2>
            <p className="text-gray-300"> info@yoursite.com </p>
            
           </div>

           <div className="m-2 p-2 border rounded text-center">
            <h2 className="font-bold text-white">WEBSITE</h2>
            <p className="text-gray-300"> yoursite.com </p>
            
           </div>
           <div className="flex justify-around mt-8">
           <BsInstagram size={40} className="hover:cursor-pointer hover:scale-110 text-gray-100"></BsInstagram>
           <BsFacebook size={40} className="hover:cursor-pointer hover:scale-110 text-gray-100"></BsFacebook>
           <BsTwitter size={40} className="hover:cursor-pointer hover:scale-110 text-gray-100"></BsTwitter>
           </div>
        </div>
        <div className="border h-80vh rounded-xl mx-auto w-1/3 mt-[134px]">
          <div><h1 className="text-3xl font-bold m-2 p-2 text-white" >Get In Touch</h1></div>
            <div className="m-2 p-3 "><input className="w-3/4 p-3 border rounded  txtcol" type="text" placeholder="Name" required="true"></input></div>
            <div className="m-2 p-3 "><input className="w-3/4 p-3 border rounded txtcol" type="email" placeholder="Email" required="true"></input></div>
            <div className="m-2 p-3 "><input className="w-3/4 p-3 border rounded txtcol" type="text" placeholder="Subject" required="true"></input></div>
            <div className="m-2 p-3 "><input className="w-3/4 p-6 border rounded txtcol" type="text" placeholder="Message" required="true"></input></div>
                
            <div className="m-2 p-3 "><button class="bg-blue-500 hover:bg-blue-700 text-white rounded-xl font-bold py-2 px-4 m-2 ml-0">Send Message</button></div>
        </div>
    </div>
    </div>
    </>
  )
}

export default ContactUs