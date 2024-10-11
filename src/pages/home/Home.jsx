import React from 'react'
import Header from '../../header/Header'
import Sidebar from '../../sidebar/Sidebar'
import Posts from '../../posts/Posts'

function Home() {
  return (
   <>
        <Header/>
        <div className='flex'>
          <Posts/>
          <Sidebar/>
        </div>
       </>
  )
}

export default Home