import React, { useEffect } from 'react'
import {Route,Routes} from 'react-router-dom'
import Sidenav from './Components/Sidenav'
import Dashboard from './pages/Dashboard'
import Students from './pages/Students'
import Teachers from './pages/Teachers'
import Documents from './pages/Documents'
import Login from './pages/Login'
import RegisterTeacher from './Components/RegisterTeacher'
import RegisterStudent from './Components/RegisterStudents'
import UpdateTeacher from './Components/UpdateTeacher';
import UpdateStudent from './Components/UpdateStudent'
import { useNavigate } from 'react-router-dom'
function App() {
  const navigate=useNavigate()
  const isAuth= localStorage.getItem('login')

  const handleRefresh = () =>{
    if(!isAuth) {
      navigate("/")
    }

  }
useEffect  (() =>{
  handleRefresh()
},[])


  return <>
  { isAuth ?


    <Sidenav>

    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/students' element={<Students/>}/>
      <Route path='/teachers' element={<Teachers/>}/>
      <Route path='/documents' element={<Documents/>}/>
      <Route path='/addteacher' element={<RegisterTeacher/>}/>
      <Route path='/addstudent' element={<RegisterStudent/>}/>
      <Route path='/updateteacher/:id' element={<UpdateTeacher/>} />
      <Route path='/updatestudent/:id' element={<UpdateStudent/>} />
    </Routes>
    </Sidenav>
    : 
    <Routes>
            <Route path='/' element={<Login/>} />

    </Routes>

  }
    </>
  
}

export default App
