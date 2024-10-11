import React from 'react'
import Sidebar from '../../sidebar/Sidebar';
import SinglePost from '../../singlepost/SinglePost';




function Single() {
  return (
    <div className="flex">
        <SinglePost/>
        <Sidebar/>
        
    </div>

  )
}

export default Single