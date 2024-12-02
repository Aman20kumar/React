import React from 'react'
import Accepttask from './Accepttask'
import Newtask from './Newtask'
import Completetask from './Completetask'
import Failedtask from './Failedtask'

function Tasklist({data}) {
 
  
  return (
    <div id='tasklist' className='overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 h-[55%] w-full  mt-10'>
        {data.tasks.map((elem, idx)=>{
          if(elem.active=true){
            return <Accepttask key={idx} data={elem}/>
          }  
          if(elem.completed=true){
            return <Completetask key={idx} data={elem}/>
          }   
          if(elem.failed=true){
            return <Failedtask key={idx} data={elem}/>
          }
          if(elem.newTask=true){
            return <Newtask key={idx} data={elem}/>
          }
          
        })}      
    </div>
  )
}

export default Tasklist