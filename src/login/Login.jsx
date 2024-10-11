import React from 'react'
import Register from '../register/Register'
import { Link } from 'react-router-dom'



function Login() {
  return (
 <div className="flex flex-col items-center justify-center h-[calc(100vh-50px)] bg-cover" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("/images/back.jpg")' }}>
  
    <form className="mt-5 flex flex-col">
        <label className='my-2'>Email</label>
        <input type="text" className="p-2 bg-white border-none rounded-lg focus:outline-none" placeholder='Enter your Email'/>
        <label className='my-2' >Password</label>
        <input type="password" className="p-2 bg-white border-none rounded-lg focus:outline-none" placeholder='Enter your Password'/>
       
        <button className="mt-5 cursor-pointer bg-red-500 text-white p-2 rounded-lg text-center" >Login</button>
      
        <Link to="/register">
        <button className='absolute top-24 right-5 bg-teal-500 cursor-pointer p-2 text-white rounded-lg'>Register
       
        </button>
        </Link>
       
    </form>
 </div>
  )
}

export default Login