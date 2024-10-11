import React from 'react'
import Post from '../post/Post/'
import Blog2 from '../blog2/Blog2'
import Blog3 from '../blog3/Blog3'
import Blog4 from '../blog4/Blog4'


function Posts() {
  return (
    <div className="flex flex-wrap m-5" style={{ flexGrow: 9 }}>
    <Post/>
    <Blog2/>
    <Blog3/>
    <Blog4/>

   
  
</div>
  )
}

export default Posts