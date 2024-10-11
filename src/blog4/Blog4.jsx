import React from 'react'

function Post() {
  return (
    
    <div className="w-[385px] mx-[25px] mb-[40px] flex flex-col">
    < img src="/images/photo5.jpeg" className="w-[385px] h-[280px] object-cover rounded-[7px]" alt=""  />
    <div className="flex flex-col items-center">
        <div className="postCats">
            <span className="font-varela font-normal text-[11px] text-[#be9656] leading-[19px] mt-[15px] mr-[10px] cursor-pointer">Reverie</span>
            <span className="font-varela font-normal text-[11px] text-[#be9656] leading-[19px] mt-[15px] mr-[10px] cursor-pointer">fancy</span>
        </div>
        <span className='font-josefin-sans text-[24px] font-extrabold mt-[15px] cursor-pointer'>The Raven</span>
        <hr/>
        <span className="font-lora italic text-[13px] font-normal text-[#999999] mt-[15px]">2 hour ago</span>
    </div>
    <p className="font-[Varela Round] font-normal text-[14px] leading-[24px] text-[#444444] mt-[15px] overflow-hidden text-ellipsis 
      line-clamp-4">
 Once upon a midnight dreary,
While I pondered, weak and weary,
Over many a quaint and curious
Volume of forgotten lore—
While I nodded, nearly napping,
Suddenly there came a tapping,
As of some one gently rapping,
Rapping at my chamber door.
"'T is some visitor," I muttered,
"Tapping at my chamber door
Only this and nothing more."

Ah, distinctly I remember,
It was in the bleak December,
And each separate dying ember
Wrought its ghost upon the floor.
Eagerly I wished the morrow;
Vainly I had sought to borrow
From my books surcease of sorrow
Sorrow for the lost Lenore—
For the rare and radiant maiden
Whom the angels name Lenore—
Nameless here for evermore.

And the silken, sad, uncertain
Rustling of each purple curtain
Thrilled me,—filled me with fantastic
Terrors, never felt before;
So that now, to still the beating
Of my heart, I stood repeating,
" 'T is some visitor entreating
Entrance at my chamber door
Some late visitor entreating
Entrance at my chamber door;
This it is and nothing more."
      </p>
    </div>
    

  )
}

export default Post