import React from 'react'

function Post() {
  return (
    
    <div className="w-[385px] mx-[25px] mb-[40px] flex flex-col">
    < img src="/images/photo2.jpg" className="w-[385px] h-[280px] object-cover rounded-[7px]" alt=""  />
    <div className="flex flex-col items-center">
        <div className="postCats">
            <span className="font-varela font-normal text-[11px] text-[#be9656] leading-[19px] mt-[15px] mr-[10px] cursor-pointer">Music</span>
            <span className="font-varela font-normal text-[11px] text-[#be9656] leading-[19px] mt-[15px] mr-[10px] cursor-pointer">Life</span>
        </div>
        <span className='font-josefin-sans text-[24px] font-extrabold mt-[15px] cursor-pointer'>The Summer days</span>
        <hr/>
        <span className="font-lora italic text-[13px] font-normal text-[#999999] mt-[15px]">1 hour ago</span>
    </div>
    <p className="font-[Varela Round] font-normal text-[14px] leading-[24px] text-[#444444] mt-[15px] overflow-hidden text-ellipsis 
      line-clamp-4">
       Shall I compare thee to a summer's day?
Thou art more lovely and more temperate:
Rough winds do shake the darling buds of May,
And summer's lease hath all too short a date:
Sometime too hot the eye of heaven shines,
And often is his gold complexion dimm'd;
And every fair from fair sometime declines,
By chance, or nature's changing course, untrimm'd;
But thy eternal summer shall not fade,
Nor lose possession of that fair thou owest;
Nor shall Death brag thou wander'st in his shade,
When in eternal lines to time thou growest;
So long as men can breathe, or eyes can see,
So long lives this, and this gives life to thee.
      </p>
    </div>
    

  )
}

export default Post