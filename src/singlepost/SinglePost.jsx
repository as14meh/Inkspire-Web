import React from 'react'
import Sidebar from '../sidebar/Sidebar'
Sidebar

function SinglePost() {
  return (
    <div className='flex flex-grow-[9]'>
       <div className="p-5 pr-0">
        <img src="/images/article.webp" className='w-full h-[400px] rounded-[5px] overflow-hidden' alt=""  />
        <h1 className="text-center m-2 text-[28px] font-serif font-lora font-semibold" >When We Two Parted
            <div className="float-right text-[16px] ">
            <i class="ml-[10px] cursor-pointer fa-solid fa-pen-to-square text-2xl first:text-teal-500"></i>
            <i className="ml-[10px] cursor-pointer singlePostIcon fa-solid fa-delete-left text-2xl last:text-red-400"></i>
            </div>
        </h1>
        <div className="mb-5 flex justify-between text-[16px] text-[#be9656] font-varela-round">
            <span className='ml-1'>Author:<b>Astha Mehra</b></span>
            <span className='text-[#666] text-[18px] leading-[25px] ml-[20px] first-letter:ml-[20px] first-letter:text-[30px] first-letter:font-semibold'>1 hour ago</span>
        </div>
        <p className='text-[#666] text-[18px] leading-[25px] first-letter:ml-[20px] first-letter:text-[30px] first-letter:font-semibold'>
        When we two parted
In silence and tears,
Half broken-hearted
To sever for years,
Pale grew thy cheek and cold,
Colder thy kiss;
Truly that hour foretold
Sorrow to this.

The dew of the morning
Sunk chill on my brow—
It felt like the warning
Of what I feel now.
Thy vows are all broken,
And light is thy fame;
I hear thy name spoken,
And share in its shame.

They name thee before me,
A knell to mine ear;
A shudder comes o’er me—
Why wert thou so dear?
They know not I knew thee,
Who knew thee too well—
Long, long shall I rue thee,
Too deeply to tell.

In secret we met—
In silence I grieve,
That thy heart could forget,
Thy spirit deceive.
If I should meet thee
After long years,
How should I greet thee?—
With silence and tears.
        </p>
       </div>
        </div>
  )
}
export default SinglePost