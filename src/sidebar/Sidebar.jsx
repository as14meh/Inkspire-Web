import React from 'react'

function Sidebar() {
  return (
    <div className='flex flex-[3] h-fit m-5 pb-7.5 bg-[#fdfbfb] rounded-[10px] flex-col items-center'>
        <div className="flex flex-col items-center">
            <span className="m-2.5 p-1.25 w-4/5 border-t border-b border-gray-400 text-center font-varela text-xs leading-5 text-gray-800 font-extrabold">About Me</span>
            <img src="/images/back.jpg"/>
            <p className='mt-2  text-center font-josefin font-light text-sm font-'  >Hello! I’m Astha Mehra, a passionate poetry enthusiast who loves to express emotions and experiences through my writing. My poems explore themes of love, nature, and life’s complexities.</p>
        </div>
        <div className="flex flex-col items-center">
            <span className="m-2.5 p-1.5 w-4/5 border-t border-t-[#a7a4a4] border-b border-b-[#a7a4a4] text-center font-varela text-xs leading-5 text-[#222222] flex justify-center font-extrabold">Categories</span>
            <ul className="list-none mb-7.5  text-center font-josefin ">
                <li className="inline-block w-1/2 mt-4 cursor-pointer  ">Life</li>
                <li className="inline-block w-1/2 mt-4  cursor-pointer">Music</li>
                <li className="inline-block w-1/2 mt-4   cursor-pointer">Style</li>
                <li className="inline-block w-1/2  mt-4 cursor-pointer ">Sports</li>
                <li className="inline-block w-1/2 mt-4 cursor-pointer">Cinema</li>
                <li className="inline-block w-1/2 mt-4  cursor-pointer">Tech</li>
            </ul>
        </div>
        <div className="inline-block w-1/2 mt-4 cursor-pointer">
            <span className="m-2.5 p-1.5 w-4/5 border-t border-t-[#a7a4a4] border-b border-b-[#a7a4a4]  font-varela text-xs leading-5 text-[#222222] font-extrabold text-center">Follow Me</span>
            <div className="mt-4 w-[250px]  flex items-center">
            <i className="text-base mx-2 cursor-pointer fa-brands fa-square-facebook"></i>
        
       <i className="text-base mx-2 fa-brands fa-square-x-twitter"></i>
       <i className="text-base mx-2 fa-brands fa-linkedin"></i>
      
       <i className="text-base mx-2 fa-brands fa-square-instagram"></i>
            </div>

        </div>
    </div>
  )
}

export default Sidebar