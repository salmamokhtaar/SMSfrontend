import React from 'react'
import {useState, useEffect} from 'react'
import axios from "axios"
import {useParams,useNavigate} from "react-router-dom"


function UpdateStudent() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setgender] = useState("");
   
  
    const params = useParams();
    const navigate = useNavigate();
    
       // get single data 
   const handleSingleData = () => {
  axios.get(`http://localhost:5000/student/update/single/${params.id}`).then((response)=> {
        setId(response.data[0].id);
        setName(response.data[0].name);
        setAddress(response.data[0].address);
        setgender(response.data[0].gender);
      
      
      }).catch((error)=> console.log(error))
    };
  
    useEffect(()=> {
      handleSingleData();
    },[])
  
    
  //  // put 
    const handleUpdate = (e) => {
      e.preventDefault()
      axios.put(`http://localhost:5000/update/student/${params.id}`,{
        "id": id,
        "name": name,
        "address": address,
        "gender": gender,
      
      }).then(()=> {
        alert("Updated Successfully...");
        navigate("/students")
      }).catch((error)=> console.log(error))
    }
  return (
    <div>
    <h1 className='ml-32 font-bold'>Update Student</h1>
    <form className=' text-center pt-20 mr-[200px]'>
    <input value={id} onChange={(e) => setId(e.target.value) } className='h-[50px] w-[450px] m-3 border-blue-600 border-2 pl-5' type="text" placeholder='Enter Student ID' />
    <br/>

    <input value={name} onChange={(e)=> setName(e.target.value)} className='h-[50px] w-[450px] m-3 border-green-600 border-2 pl-5' type="text" placeholder='Enter Student Name' />
    <br/>
    <br/>

    <input value={address} onChange={(e) => setAddress(e.target.value)} className='h-[50px] w-[450px] m-3 border-black border-2 pl-5 ' type="text" placeholder='Enter Student Address' />
   

    <br/>

    <input value={gender} onChange={(e) => setGender(e.target.value)} className='h-[50px] w-[450px] m-3 border-purple-900 border-2 pl-5' type="text" placeholder='Enter Teacher Gender' />
  
    <br/>
    <button onClick={handleUpdate} className='text-white bg-purple-600 px-10 py-2  rounded-md'>Update</button>
  </form>
</div>

  )
}

export default UpdateStudent
