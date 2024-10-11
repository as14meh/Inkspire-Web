import React from 'react';

function Write() {
  return (
    <div className="pt-[50px]">
      <img
        src="/images/article2.jpg"
        className="ml-[150px] w-[70vw] h-[250px] rounded-[10px] object-cover mb-5" // Added mb-5 for margin-bottom
        alt=""
      />
      <form className="relative">
        <div className="ml-[150px] flex items-center mb-4"> {/* Added mb-4 for margin-bottom */}
          <label htmlFor="fileInput">
            <i className="w-[25px] h-[25px] text-[20px] border border-solid rounded-full text-[#817d7d] flex items-center justify-center cursor-pointer fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder='Title'
            className='writeInput ml-2' // Added ml-2 for margin-left
            autoFocus={true}
          />
        </div>
        <div className="ml-[150px] flex items-center mb-4"> {/* Added mb-4 for margin-bottom */}
          <textarea
            placeholder='Tell your story...'
            className='text-[30px] border-none p-5 w-[70vw] placeholder:text-[#bdb9b9] placeholder:font-normal focus:outline-none h-[100vh] font-inherit text-[20px]'
          ></textarea>
        </div>
        <button className="absolute top-5 right-[50px] text-white bg-teal-500 p-2 rounded-lg text-[16px] cursor-pointer flex items-center">Publish</button>
      </form>
    </div>
  );
}

export default Write;
