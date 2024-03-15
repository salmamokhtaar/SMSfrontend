import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterTeacher() {

  const [id,setId] = useState("")
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [address,setAddress] = useState("")
  const [gender,setgender] = useState("")
  const [salary,setSalary] = useState("")
  const navigate = useNavigate("")

 const handleRegisteredTeacher =(e) =>{
  e.preventDefault();
  axios.post("http://localhost:5000/create/teacher", {
      "id": id,
      "name": name,
      "email": email,
      "address": address,
      "gender": gender,
      "salary": salary
  }).then(()=>{
    toast("Registerd",{
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      onClose:()=> {
    // navigate("/teachers")

      }

    })
  }).catch((error)=> console.log(error))


 }
  return (
    <div>
        <h1 className='text-3xl font-bold text-center mt-10'>Register Teacher</h1>

     <form className='text-center pt-10 mr-[200px]'>
     <input type='text' placeholder='Enter Teacher id' 
     value={id}   onChange={(e)=>setId(e.target.value)}
  className='w-[350px] h-[50px] border-2 m-3 border-purple-600 rounded pl-6'></input>
        
        
        <input type='text' placeholder='Enter Teacher name' 
     value={name}   onChange={(e)=>setName(e.target.value)}
  className='w-[350px] h-[50px] border-2 m-3 border-purple-600 rounded pl-6'></input>
    <br></br>
    
     <input type='text' placeholder='Enter Teacher email'
      value={email}   onChange={(e)=>setEmail(e.target.value)}
    className='w-[350px] h-[50px] border-2 m-3 border-purple-600 rounded pl-6'></input>
   
    
     <input type='text' placeholder='Enter Teacher Address'
      value={address}   onChange={(e)=>setAddress(e.target.value)}
    className='w-[350px] h-[50px] border-2 m-3 border-purple-600 rounded pl-6'></input>
    <br></br>
    
     <input type='text' placeholder='Enter Teacher Gender'
      value={gender}   onChange={(e)=>setgender(e.target.value)}
    className='w-[350px] h-[50px] border-2 m-3 border-purple-600 rounded pl-6'></input>
   
     
     
     <input type='text' placeholder='Enter Teacher Salary'
      value={salary}   onChange={(e)=>setSalary(e.target.value)}
    className='w-[350px] h-[50px] border-2 m-3 border-purple-600 rounded pl-6'></input>
     
     
  
    
   
     <br></br>

     <button  onClick={handleRegisteredTeacher}
     className='bg-purple-700 text-white px-10 py-2 '>Register</button>
     </form>
     <ToastContainer />

    </div>
  )
}

export default RegisterTeacher
