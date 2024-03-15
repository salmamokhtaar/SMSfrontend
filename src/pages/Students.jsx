import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Students() {
  const [studnet, setStudent] = useState([]);
  const [page, setPage] =  useState(0)


  // get student data
  const handleStudent = () => {
    axios.get(`http://localhost:5000/get/student?page=${page}`).then((response)=> {
      setStudent(response.data);
    }).catch((error)=> console.log(error))
  };
  const deleteStudent = (id) => {
    axios.delete(`http://localhost:5000/delete/student/${id}`).then(()=>{
      alert("Student Has Been Deleted..");
      handleStudent();
    }).catch((error) => console.log(error))
  }

  useEffect(()=> {
    handleStudent();
  },[page])
  const handleSearch=(id) =>{
    const key=id.target.value
   if(key){
    axios.get(`http://localhost:5000/student/search/${key}`).then((response) =>{
      setStudent(response.data)
    }).catch((error) => console.log(error))
   }
   else
   handleStudent(); 
  }
  const handleNextButton = () =>{
    setPage(page+1)
  }
  const handlePrevios = () =>{
    if(page>0){
      setPage(page-1)
  
    }
  }
  
  return (
    <div>

    <div className='py-5 flex justify-between'>
      <Link to={'/addstudent'} className='bg-purple-600 text-white px-5 py-3 rounded mb-3'>Add Student</Link>
      <form className='mr-5'>
        <input onChange={handleSearch} className='h-[50px] w-[350px] border-black border-2 pl-5' type="text" placeholder='Search Student' />
      </form>
    </div>
    <table className='w-full'>
      <thead className='bg-gray-200'>
        <tr className='text-1xl'>
         <th className='p-3'>ID</th>
         <th>Name</th>
         <th>Address</th>
         <th>Gender</th>
         <th>Date</th>
         <th>Edit</th>
         <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
           studnet.length>0 ?         studnet.map((ele)=> {
         return (
          <tr className='text-center'>
            <td>{ele.id}</td>
            <td>{ele.name}</td>
            <td>{ele.address}</td>
            <td>{ele.gender}</td>
            <td> {new Date (ele.createdAt).toDateString()}</td>

            <td><Link to={`/updatestudent/${ele._id}`}><i class="fa-regular fa-pen-to-square ml-5 text-purple-600 cursor-pointer"></i></Link></td>
            <td><i onClick={() => deleteStudent(ele._id)} className='fa-sharp fa-solid fa-trash ml-5 text-purple-600 cursor-pointer '></i></td>
         
            </tr>
            )
          })
          :<p>thers no data yet</p>

        }
            
             
      </tbody>
    </table>
    <div className='flex gap-12 justify-between mt-20 absolute b-4 '>
    
    <button onClick={handlePrevios} 
    className='bg-blue-500 px-4 py-2 text-white rounded'>Previous</button>
    <button onClick={handleNextButton} 
    className='bg-blue-500 px-4 py-2 text-white rounded'>Next</button>

    </div>
    </div>
  )
}

export default Students