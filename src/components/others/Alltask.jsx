import React, { useContext } from 'react'
import { AuthContext } from '../../context/Authprovider'

function Alltask() {

    const authdata = useContext(AuthContext)
    
 
  return (
    <div className=' h-[50%]  bg-[#1c1c1c] p-5 mt-5 rounded '>

      <div className='mb-2 rounded bg-red-400 py-2 px-4 flex justify-between'>
                        <h2 className='w-1/5 text-lg font-medium '>Employee Name</h2>
                        <h3 className='w-1/5 text-lg font-medium '> New Task</h3>
                        <h5 className='w-1/5 text-lg font-medium '>Active Task</h5> 
                        <h5 className='w-1/5 text-lg font-medium '>Completed Task</h5>
                        <h5 className='w-1/5 text-lg font-medium '>Failed Task</h5>
                    </div>
      <div className=' overflow-auto'>
            {authdata.employeesWithTasks.employees.map (function(elem,idx){
            return <div key={idx} className='mb-2 rounded border-2 border-emerald-500 py-2 px-4 flex justify-between'>
            <h2 className='w-1/5 text-lg font-medium '>{elem.firstName}</h2>
            <h3 className='w-1/5 text-lg font-medium text-blue-200'>{elem.taskCounts.newTask}</h3>
            <h5 className='w-1/5 text-lg font-medium text-yellow-200'>{elem.taskCounts.active}</h5>
            <h5 className='w-1/5 text-lg font-medium text-green-200'>{elem.taskCounts.completed}</h5>
            <h5 className='w-1/5 text-lg font-medium text-red-400'>{elem.taskCounts.failed}</h5> 
        </div>
})}  
                    </div>

        
    </div>
  )
}

export default Alltask