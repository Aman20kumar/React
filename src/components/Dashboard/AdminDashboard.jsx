import React from 'react'
import Header from '../others/Header'
import Createtask from '../others/Createtask'
import Alltask from '../others/Alltask'
import { data } from 'autoprefixer'

function AdminDashboard(props) {
  return (
    <div className='h-screen w-full bg-[#1C1C1C] p-10 '>
        <Header changeUser={props.changeUser}/>
        <Createtask data={data}/>
        <Alltask data={data} />
    </div>
  )
}

export default AdminDashboard