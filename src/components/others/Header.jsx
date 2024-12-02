import { data } from 'autoprefixer'
import React from 'react'
import { setLocalstorage } from '../../utils/Localstorage'

function Header(props) {
  const logoutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    //window.location.reload()
  }
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>
            Hello <br/><span className='text-4xl font-semibold'>{props.user} 👋</span> 
        </h1>
        <button onClick={logoutUser} className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-xl ' >Log Out</button>
    </div>
  )
}

export default Header