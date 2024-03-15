import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'

function Dashboard() {
  const [total,setTotal] = useState([])
  const [students,setStudents] = useState([])
  const [salary,setTotalSalary] = useState([])

  const getTotalTeachers =() => {
    axios.get("http://localhost:5000/total/teacher").then((response)=>{
      setTotal(response.data.total)
    }).catch((error) => console.log(error))
}
  const getTotalofStudents =() => {
    axios.get("http://localhost:5000/total/students").then((response)=>{
      setStudents(response.data.total)
    }).catch((error) => console.log(error))
}
// salary
  const getTotalofSalary =() => {
    axios.get("http://localhost:5000/teacher/total/salary").then((response)=>{
      console.log(response.data)
      setTotalSalary(response.data[0].salary)
    }).catch((error) => console.log(error))
}
useEffect(() =>{
  getTotalTeachers()
  getTotalofStudents()
  getTotalofSalary()
},[])

return (
    <div>
          <div className='flex gap-5 pt-3 ml-5'>
      <div className='w-[300px] h-[200px] border-b-4  bg-gray-400 border-purple-700 rounded pt-20 text-4xl   text-white text-center'>
      <i class="fa-solid text-purple-700  fa-circle-user "></i> 
      
        <h1>{total} Teachers</h1>
      </div>
      <div className='w-[300px] h-[200px] border-b-4  bg-gray-300  border-sky-700 rounded  pt-20 text-4xl text-white text-center'>
      <i class='fa-solid text-purple-700 fa-chalkboard-user '> </i>
      <h1>{students} Students</h1>
      </div>
      <div className='w-[300px] h-[200px] border-b-4  border-blue-700 bg-gray-400 rounded  pt-20 text-4xl text-black text-center'>
      <i class="fa-solid text-purple-700  fa-dollar-sign"></i>
        <h1>{salary} Salary</h1>
      </div>

    </div>
    </div>
  )
}

export default Dashboard
