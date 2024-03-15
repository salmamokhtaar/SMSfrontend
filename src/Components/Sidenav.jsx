import React from 'react'
import {NavLink } from 'react-router-dom'
import { useState } from 'react'
function Sidenav({children}) {
  const[isOpen , setIsOpen] =useState(false)

  const  handleIsOpen =() => {
    setIsOpen(true)
   }
   const  handleClose =() => {
    setIsOpen(false)
   }
   const logOut = () => {
  localStorage.clear()
   }
  return (
    <div>
  <div style={{width: isOpen === true ? "100px" : ""}} className='w-[22%] h-screen fixed overflow-hidden bg-purple-700 boder-r-2 border-gray-300'>   
<i onClick={handleIsOpen} class="fa-solid fa-xmark text-black text-4xl ml-[250px] mt-2" ></i>
<i onClick={handleClose}  style={{display:isOpen === true ?"block" : "none"}} class="fa-solid fa-bars text-4xl text-black  ml-[38px] mb-[45px] -mt-8 hidden"></i>

<div style={{display:isOpen === true ? "none" : "flex" }} className='ml-12 mt-10 text-2xl flex flex-col gap-12 text-white transition-all  duration-1000'>
<NavLink to={"/dashboard"}  className='cursor-pointer  hover:underline'>
  <i class='fa-brands fa-microsoft '></i> Dashboard</NavLink>
<NavLink to={"/students"} className='cursor-pointer hover:underline'><i class='fa-solid fa-chalkboard-user '> </i> Students</NavLink>
<NavLink to={"/teachers"} className='cursor-pointer hover:underline'>
<i class="fa-solid fa-circle-user "></i> Teachers</NavLink>
<NavLink to={"/documents"} className='cursor-pointer hover:underline'>  
<i class="fa-solid fa-folder "></i> Documents</NavLink>
<NavLink to={"/"} onClick={logOut}  className='cursor-pointer hover:underline'>  
<i class="fa-solid fa-right-from-bracket"></i>Logout</NavLink>
    </div>
    <div style={{display : isOpen === true ? "flex" : "none"}} className='ml-10 mt-10 flex-col text-3xl gap-12 hidden'>
    <i class='fa-brands text-white fa-microsoft'></i>
    <i class='fa-solid  text-white  fa-chalkboard-user'> </i> 
    <i class="fa-solid  text-white fa-folder"></i>
    <i class="fa-solid  text-white fa-circle-user"></i> 
 
   </div>
   </div>
  
<div  style={{marginLeft: isOpen === true ? "150px" : "" }} id="main" className='ml-[26%] transition-all duration-500'>
  {children}
</div>

    </div>
  )
}
export default Sidenav