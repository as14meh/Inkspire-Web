import React from 'react'

function Post() {
  return (
    
    <div className="w-[385px] mx-[25px] mb-[40px] flex flex-col">
    < img src="/images/photo3.jpg" className="w-[385px] h-[280px] object-cover rounded-[7px]" alt=""  />
    <div className="flex flex-col items-center">
        <div className="postCats">
            <span className="font-varela font-normal text-[11px] text-[#be9656] leading-[19px] mt-[15px] mr-[10px] cursor-pointer">Philosophy</span>
            <span className="font-varela font-normal text-[11px] text-[#be9656] leading-[19px] mt-[15px] mr-[10px] cursor-pointer">Philosophical</span>
        </div>
        <span className='font-josefin-sans text-[24px] font-extrabold mt-[15px] cursor-pointer'>No Man is an Island</span>
        <hr/>
        <span className="font-lora italic text-[13px] font-normal text-[#999999] mt-[15px]">2 hour ago</span>
    </div>
    <p className="font-[Varela Round] font-normal text-[14px] leading-[24px] text-[#444444] mt-[15px] overflow-hidden text-ellipsis 
      line-clamp-4">
       No man is an island,
Entire of itself,
Every man is a piece of the continent,
A part of the main.
If a clod be washed away by the sea,
Europe is the less.
As well as if a promontory were.
As well as if a manor of thy friend's
Or of thine own were:
Any man's death diminishes me,
Because I am involved in mankind,
And therefore never send to know for whom the bell tolls;
It tolls for thee.
      </p>
    </div>
    

  )
}

export default Post