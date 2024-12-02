import { data } from 'autoprefixer'
import React from 'react'

function Tasknumber({data}) {
  return (
    <div className='flex mt-10 w-screen gap-5 justify-between'>
        <div className='rounded-xl px-9 py-6 w-[45%] bg-red-400'>
            <h2 className='text-3xl font-medium'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl font-semibold'>New Task</h3>
        </div>
        <div className='rounded-xl px-9 py-6 w-[45%] bg-blue-400'>
            <h2 className='text-3xl font-medium'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl font-semibold'>Completed Task</h3>
        </div>
        <div className='rounded-xl px-9 py-6 w-[45%] bg-green-400'>
            <h2 className='text-3xl font-medium'>{data.taskCounts.active}</h2>
            <h3 className='text-xl font-semibold'>Accepted Tasks</h3>
        </div>
        <div className='rounded-xl px-9 py-6 w-[45%] bg-yellow-400'>
            <h2 className='text-3xl font-medium'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl font-semibold'>Failed Tasks</h3>
        </div>
    </div>
  )
}

export default Tasknumber