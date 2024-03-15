import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Documents() {
  const [model ,setModel] = useState()
  const [file ,setFile] = useState()
  const [read ,setRead] = useState([])
  const navigate = useNavigate()

  const handleDocument = () => {
    axios.get("http://localhost:5000/teacher/read").then((response)=> {
      setRead(response.data);
    }).catch((error)=> console.log(error))
  };
  useEffect(()=> {
    handleDocument();
  })

  
  const handleModel = () => {
    setModel(true)

  }
  const closeModel = (e) => {
    e.preventDefault()
    setModel(false)
  }
  

  const handleRegisterDocument = (e) => {
    const formData = new FormData()
    formData.append("file", file)
    e.preventDefault()
    axios.post("http://localhost:5000/teacher/documents", formData).then(()=>{
      alert("Document has been registered")
   navigate("/documents")

    }).catch((error) => console.log(error) )
   
  }



  return <>
    <div className='p-6 mb-10'>
      <NavLink onClick={handleModel}   className='bg-purple-500 p-3 m-3' >Upload Document</NavLink>
    </div>
    {/* form */}
    <div style={{display : model === true ? "flex" : ""}}  className='hidden justify-center  '>
    <form className='p-10 bg-gray-300 w-[400px] h-[200px] text-white '>

        <input onChange={(event) => setFile(event.target.files[0])}
         className='h-[50px] w-[350px] border-purple-700 border-2 file-bg-red-500 file:border-0 file:text-white  pl-5' type="file"  placeholder='' 
         accept='.pdf' />
        <br/>
        <br/>``
        <button onClick={closeModel} className='mr-10 bg-purple-500 px-5 py-3 text-white text-lg'>Close</button>

        <button  onClick={handleRegisterDocument}
          className='bg-rose-500 px-5 py-3 text-white text-lg'>Upload</button>
             </form>
    </div>

    <div className='reading'>
      {   read.map((item)=>{
        return  <embed src={`http://localhost:5000/alldocs/${item.file}`}  width="800px" height="1000px" />

      })    
     

     }

    </div>
    </>
  
}

export default Documents
