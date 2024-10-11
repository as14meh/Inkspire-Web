import React from 'react'

function Header() {
  return (
    <div className='mt-15 '>
        <div className="flex flex-col items-center font-lora text-[#444]">
          <span className='absolute top-[18%] text-[15px] '>"Expressions Unleashed"</span>
            <span className='absolute top-[20%] text-[50px] font-bold'>Inkspire Web</span>
        </div>
        <img className='w-full h-[450px] mt-[80px] object-cover' src="/images/background.jpg" alt="" />
    </div>
  )
}

export default Header