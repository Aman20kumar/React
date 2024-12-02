import React, { useState } from 'react'
import { useEffect } from 'react'
import { setLocalstorage } from '../../utils/Localstorage'

function Createtask() {
  useEffect(() => {
 if(!localStorage.getItem('employeesWithTasks')){
      setLocalstorage()
      console.log(newTask);     
    }     
 },[])

  const [taskTitle, settaskTitle] = useState('')
  const [taskDescription, settaskDescription] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [assignTo, setassignTo] = useState('')
  const [category, setcategory] = useState('')

  const [newTask, setnewTask] = useState({})

  const submitHandler = (e) =>{
    e.preventDefault()

    setnewTask({taskTitle, taskDescription, taskDate, category, active:false, newTask:true, failed:false, completed:false}) 
    
    const data =JSON.parse(localStorage.getItem('employeesWithTasks'))
   
    let userFound = false;
    
    data.employees.forEach(function(elem)
    {
    
          if(assignTo==elem.firstName){
          elem.tasks.push(newTask)   
          elem.taskCounts.newTask++
          userFound = true;
          return;
          } 
     })  
          

     settaskTitle('')
     settaskDescription('')
     settaskDate('')
     setassignTo('')
     setcategory('')
     
     
     if(!userFound){
      alert('User not found')
     }

     if(userFound){
      localStorage.setItem('employeesWithTasks', JSON.stringify(data))
      console.log('Task added successfully');
      
      console.log(data);
     }

  }  
  

  return (
    <div className='p-5 bg-[#2b2a2a] mt-7 rounded '>
            <form onSubmit={(e) => submitHandler(e)} className='flex flex-wrap w-full items-start justify-between '>
             
              <div className='w-1/2 ' >
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5 '>Task Title</h3>
                    <input value={taskTitle} onChange={(e) => {settaskTitle(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400  border'  type="text" placeholder='Make a UI' />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5 '>Date</h3>
                    <input value={taskDate} onChange={(e) => {settaskDate(e.target.value)}} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 border  ' type="date" />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5 '>Assign to</h3>
                    <input value={assignTo} onChange={(e) => {setassignTo(e.target.value)}} className='border text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400  ' type="text" placeholder='employee ename' />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5 '>Category</h3>
                    <input value={category} onChange={(e) => {setcategory(e.target.value)}} className='border text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-gray-400 ' type="text" placeholder='design, dev, etx' /> 
                </div>
              </div>
                
               <div className='w-1/2'>
                <h3 className='text-sm text-gray-300 mb-0.5 '>Description</h3>
                <textarea value={taskDescription} onChange={(e) => {settaskDescription(e.target.value)}} className='border text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-gray-400  ' name="" id="" cols={30} rows={10}></textarea>
                <button type='submit' className='bg-emerald-500 py-3 px-5 hover:bg-emerald-600 rounded text-sm mt-4 w-full ' >Create Task</button>
               </div>
            </form>
        </div>
  )
}

export default Createtask