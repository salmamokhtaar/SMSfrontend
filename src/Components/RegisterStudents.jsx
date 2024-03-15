import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterStudent() {
    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [address,setAddress] = useState("");
    const [gender,setGender] = useState("");

    const navigate = useNavigate();

    const handlePost = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/create/student",{
            "id": id,
            "name": name,
            "address": address,
            "gender": gender
        }).then(()=>{
            toast("Registered..");
            navigate("/students")
        }).catch((error)=> console.log(error));
    }
  return (
    <div>
        <h1 className='ml-32 font-bold'>Register Student</h1>
    <form className='mr-5 text-center pt-20'>
        <input value={id} onChange={(e)=> setId(e.target.value)} className='h-[50px] w-[450px] m-3 border-blue-600 border-2 pl-5' type="text" placeholder='Enter ID' />
        <input value={name} onChange={(e)=> setName(e.target.value)} className='h-[50px] w-[450px] m-3 border-purple-600 border-2 pl-5' type="text" placeholder='Enter Student Name' />
        <br/>
        <input value={address} onChange={(e)=> setAddress(e.target.value)} className='h-[50px] w-[450px] m-3 border-rose-600 border-2 pl-5' type="text" placeholder='Enter Student Address' />
        <input value={gender} onChange={(e)=> setGender(e.target.value)} className='h-[50px] w-[450px] m-3 border-yellow-300 border-2 pl-5' type="text" placeholder='Enter Student Gender' />
        <br/>
        <button onClick={handlePost} className='text-white bg-purple-600 px-10 py-2  rounded-md'>Save</button>
      </form>
    </div>
  )
}

export default RegisterStudent