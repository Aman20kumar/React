import React, { createContext, useEffect, useState } from 'react'
import { getLocalstorage } from '../utils/Localstorage'

export const AuthContext = React.createContext()

function Authprovider({children}) {
  //localStorage.clear()
  const [userData, setuserData] = useState(null)
  
  useEffect(() => {
    const {employeesWithTasks}= getLocalstorage()
    setuserData({employeesWithTasks})
  }, [])
  
 
 
  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default Authprovider