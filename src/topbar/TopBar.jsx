import React from 'react'
import { Link } from 'react-router-dom'
Link

function TopBar() {
  const user=false
  return (
    <div className='h-20 w-full   top-0 flex items-center font-josefin text-xl'>
        <div className='flex flex-[0_0_15%] pl-24'>
        <i className="text-[20px] mr-2 text-[#444] cursor-pointer fa-brands fa-square-facebook">
         
        </i>
       
        <i className="text-[20px] mr-2 text-[#444] cursor-pointer fa-brands fa-square-x-twitter"></i>
        <i className="text-[20px] mr-2 text-[#444] cursor-pointer fa-brands fa-linkedin"></i>
       
        <i className="text-[20px] mr-2 text-[#444] cursor-pointer fa-brands fa-square-instagram"></i>
       
        </div>
        <div className='flex-[0_0_70%] flex items-center justify-center'><ul className="flex justify-center m-0 p-0 list-none">
            <li className='mr-7 text-[18px] font-light cursor-pointer hover:text-gray-500'>
              <Link className='link' to="/" >Home</Link>
            </li>

            {/* <li className='mr-7 text-[18px] font-light cursor-pointer hover:text-gray-500'>   <Link className='link' to="/set" >Contact</Link></li> */}
            <li className='mr-7 text-[18px] font-light cursor-pointer hover:text-gray-500'>   <Link className='link' to="/single" >Poetries</Link></li>
            <li className='mr-7 text-[18px] font-light cursor-pointer hover:text-gray-500'>   <Link className='link' to="/write" >DailyMusings</Link></li>
            <li className='mr-7 text-[18px] font-light cursor-pointer hover:text-gray-500'>   <Link className='link' to="/set" >Profile</Link></li>

            <li className='mr-7 text-[18px] font-light cursor-pointer hover:text-gray-500'>
              
              {user}  </li> 
            </ul>
            </div>
        <div className='flex-[0_0_15%]  flex items-center justify-center'>{
          user?(
            <img className='w-12 h-12 rounded-full object-cover mr-4 cursor-pointer'
            src="/images/pho.jpg" alt=""   />

          ):(
            <ul className='flex ml-2'>
              <li className='topListIte'>
              <Link className='link ' to="/login"><img src="/images/girl.webp" className="rounded-none w-10" alt="" /></Link>
              </li>
             
              <li className='topListItem '>
              <Link className='link' to="/register"></Link>
              </li>



</ul>
          )

          }
           
        <i className="text-[18px] text-[#666] cursor-pointer fa-solid fa-magnifying-glass"></i>
        </div>
        <div></div>
    </div>
  )
}

export default TopBar