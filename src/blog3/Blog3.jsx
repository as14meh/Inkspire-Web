import React from 'react'

function Post() {
  return (
    
    <div className="w-[385px] mx-[25px] mb-[40px] flex flex-col">
    < img src="/images/photo4.jpeg" className="w-[385px] h-[280px] object-cover rounded-[7px]" alt=""  />
    <div className="flex flex-col items-center">
        <div className="postCats">
            <span className="font-varela font-normal text-[11px] text-[#be9656] leading-[19px] mt-[15px] mr-[10px] cursor-pointer">Philosophy</span>
            <span className="font-varela font-normal text-[11px] text-[#be9656] leading-[19px] mt-[15px] mr-[10px] cursor-pointer">Philosophical</span>
        </div>
        <span className='font-josefin-sans text-[24px] font-extrabold mt-[15px] cursor-pointer'>Because I could not stop for Death</span>
        <hr/>
        <span className="font-lora italic text-[13px] font-normal text-[#999999] mt-[15px]">2 hour ago</span>
    </div>
    <p className="font-[Varela Round] font-normal text-[14px] leading-[24px] text-[#444444] mt-[15px] overflow-hidden text-ellipsis 
      line-clamp-4">
  Because I could not stop for Death,
He kindly stopped for me;
The carriage held but just ourselves
And Immortality.

We slowly drove, he knew no haste,
And I had put away
My labor, and my leisure too,
For his civility.

We passed the school where children played,
Their lessons scarcely done;
We passed the fields of gazing grain,
We passed the setting sun.

We paused before a house that seemed
A swelling of the ground;
The roof was scarcely visible,
The cornice but a mound.
      </p>
    </div>
    

  )
}

export default Post