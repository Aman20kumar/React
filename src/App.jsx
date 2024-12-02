import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import Employeedashboard from './components/Dashboard/Employeedashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'

import { AuthContext } from './context/Authprovider'

const App = () => {
  
const [user, setUser] = useState(null)
const [loggedInUserData, setloggedInUserData] = useState(null)
const authData = useContext(AuthContext)

useEffect(()=> {
  const loggedInUser = localStorage.getItem('loggedInUser')

  if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
      setloggedInUserData(userData.data)
  }
},[])


const handleLogin = (email, password)=>{
  
    if (email == 'admin@example.com' && password == '123') 
    {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }
    else if (authData)
    {
      const employee = authData.employeesWithTasks.employees.find((e)=> e.email == email && e.password == password)
      if (employee){
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee',data:employee}))
      }  
      else 
    {
      alert('Wrong email or password')
    }
    }
    
}

const data = useContext(AuthContext)


  return (
    <>   
      {!user ? <Login handleLogin={handleLogin} /> : ''} 
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <Employeedashboard changeUser={setUser} data ={loggedInUserData} />: null) } 
    </>
  )
}

export default App