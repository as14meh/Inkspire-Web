import React from 'react'
import Sidebar from '../sidebar/Sidebar'
Sidebar

function Set() {
  return (
   <div className="flex">
    <div className="flex-9 p-5">
        <div className="flex items-center justify-between">
            <span className="text-[30px] mb-[20px] text-lightcoral">Update Account</span>
            <span className="text-red-500 text-[12px] cursor-pointer">Delete Account</span>
        </div>
        <form className='flex flex-col '>
            <label className='' >Profile Picture</label>
            <div className="flex items-center mt-2 mb-2">
                <img src="/images/back.jpg" className='h-[70px] w-[70px] rounded-[20px] object-cover' alt="" />
                <label htmlFor="fileInput">
                <i className='-6 h-6 p-1 flex justify-center items-center rounded-full ml-2 text-white bg-lightcoral cursor-pointer' class="fa-solid fa-user"></i>
                </label>
                <input type="file" id="finleInput" style={{display:"none"}}
                className='w-[30%]'/>
            </div>
            <label className='text-lg mt-5' >Username</label>
            <input type="text" className="text-gray-500 mt-2 mb-2 h-[30px] border-4 border-light-gray focus:outline-none" placeholder='Username' />
            <label className='text-lg mt-5'>Email</label>
            <input type="email" className="text-gray-500 mt-2 mb-2 h-[30px] border-4 border-light-gray focus:outline-none"  placeholder='xyz@gmail.com' />
            <label className='text-lg mt-5'>Password</label>
            <input type="Password" className="text-gray-500 mt-2 mb-4 h-[30px] w-[900px] border-4 border-light-gray focus:outline-none"  placeholder='Password' />
            <button className="self-center w-[150px] border-none rounded-lg text-white bg-teal-500 p-2 mt-5 cursor-pointer flex items-center justify-center hover:bg-[rgb(1,114,114)]">Update</button>
        </form>
    </div>
    <Sidebar/>
   </div>
  )
}

export default Set