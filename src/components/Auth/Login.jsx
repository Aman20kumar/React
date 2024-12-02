import React, { useState } from 'react'

function Login({handleLogin}) {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        console.log('email is ',email)
        console.log('password is ',password)

        setEmail('')
        setPassword('')
    }

  return (
    <div className='h-screen w-screen flex items-center justify-center'>
          <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                            <input 
                                value={(email)}
                                onChange={(e)=> {
                                setEmail(e.target.value) 
                                 }} 
                            required  className='border-2 border-emerald-600 rounded-full px-5 py-4 text-xl text-white outline-none bg-transparent placeholder:text-gray-400  ' type="email" placeholder='Enter your email' 
                            />  
                            <input 
                            value={(password)}
                            onChange={(e)=> {
                                setPassword(e.target.value)
                            }}
                            className='border-2 border-emerald-600 rounded-full px-5 py-4 text-xl text-white outline-none bg-transparent placeholder:text-gray-400  mt-3' type="password" placeholder='Enter your password' />
                <button className='border-2 bg-emerald-600 rounded-full px-5 py-4 text-xl text-white outline-none  placeholder:text-white  mt-5 border-none'>Login</button>
            </form>
            </div>  
    </div>
  )
}

export default Login