import React,{useState, useEffect} from 'react'
import axios from "axios"
import {useParams,useNavigate} from "react-router-dom"

function UpdateTeacher() {

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [salary, setSalery] = useState("");

  const params = useParams();
  const navigate = useNavigate();
  
     // get single data 
 const handleSingleData = () => {
    axios.get(`http://localhost:5000/teacher/update/single/${params.id}`).then((response)=> {
      setId(response.data[0].id);
      setName(response.data[0].name);
      setAddress(response.data[0].address);
      setEmail(response.data[0].email);
      setGender(response.data[0].gender);
      setSalery(response.data[0].salary);
    
    }).catch((error)=> console.log(error))
  };

  useEffect(()=> {
    handleSingleData();
  },[])

  
//  // put 
  const handleUpdate = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:5000/update/teacher/${params.id}`,{
      "id": id,
      "name": name,
      "address": address,
      "email": email,
      "gender": gender,
      "salary": salary
    }).then(()=> {
      alert("Updated Successfully...");
      navigate("/teachers")
    }).catch((error)=> console.log(error))
  }


  return (
    <div>
        <h1 className='ml-32 font-bold'>Update Teacher</h1>
        <form className='mr-5 text-center pt-20'>
        <input value={id} onChange={(e) => setId(e.target.value) } className='h-[50px] w-[450px] m-3 border-blue-600 border-2 pl-5' type="text" placeholder='Enter ID' />

        <input value={name} onChange={(e)=> setName(e.target.value)} className='h-[50px] w-[450px] m-3 border-green-600 border-2 pl-5' type="text" placeholder='Enter Teacher Name' />
        <br/>

        <input value={address} onChange={(e) => setAddress(e.target.value)} className='h-[50px] w-[450px] m-3 border-black border-2 pl-5' type="text" placeholder='Enter Teacher Address' />
        <input value={email} onChange={(e) => setEmail(e.target.value)} className='h-[50px] w-[450px] m-3 border-pink-500 border-2 pl-5' type="text" placeholder='Enter Teacher Email' />

        <br/>

        <input value={gender} onChange={(e) => setGender(e.target.value)} className='h-[50px] w-[450px] m-3 border-purple-900 border-2 pl-5' type="text" placeholder='Enter Teacher Gender' />
        <input value={salary} onChange={(e) => setSalery(e.target.value)} className='h-[50px] w-[450px] m-3 border-red-800 border-2 pl-5' type="text" placeholder='Enter Teacher Salery' />
        <br/>
        <button onClick={handleUpdate} className='text-white bg-purple-600 px-10 py-2  rounded-md'>Update</button>
      </form>
    </div>
  )
}

export default UpdateTeacher