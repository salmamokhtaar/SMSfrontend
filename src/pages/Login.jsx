import React from 'react'
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import { ToastContainer ,toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function Login() {
const [username,setUsername] = useState("")
const [password,setPassword] = useState("")
const navigate = useNavigate()

const handleLogin = (e) =>{
  e.preventDefault()
  axios.post("http://localhost:5000/admin/Login", {
    "username": username,
    "password": password
  }).then((response)=>{
    if(response.data.error){
  alert("Incorrect username or password")
    }
    else{
    alert("Successfully Login")
    localStorage.setItem("login", JSON.stringify(response.data))
    navigate("/dashboard")
    }
  })
  
}




  return (
    <div className='h-screen w-full '>
      <h1 className='ml-20 text-2xl  font-bold text-purple-700'>Here is Login Page</h1>
      <div>
        <form className='w-[400px] m-10 p-5 rounded shadow-lg h-[300px] bg-gray-500'>
            <input value={username} onChange={(e)=>setUsername(e.target.value)}className='border-2 border-purple-700  w-[340px] h-[50px] px-2 mt-5' type='text' placeholder='Enter Username'></input>
            <br/>
            <br/>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} className='border-2 border-purple-700 w-[340px] h-[50px] px-2 ' type='text' placeholder='Enter Password'></input>
            <button onClick={handleLogin} className='border-2 border-gray-50 bg-purple-700 text-white  rounded px-5 py-2 m-10' type='submit' >Submit</button>
        </form>
      </div>

    </div>
  )
}

export default Login
