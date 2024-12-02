import React from 'react'

function Completetask({data}) {
  return (
    <div className='p-5 flex-shrink-0 h-full w-[300px] bg-yellow-600 rounded-xl '>
                <div className='flex justify-between items-center'>
                    <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
                    <h4 className='text-sm'>{data.taskDate}</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'>{data.task}</h2>
                <p className='text-sm mt-2'>{data.taskDescription}    
                </p>
                <div className='mt-2'>
                    <button className='bg-emerald-500 py-3 px-5 hover:bg-emerald-600 rounded text-sm w-full'>Completed</button>
                </div>
            </div> 
  )
}

export default Completetask