import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

const VerifiedEmail = () => {
  return (
    <div className='mt-[100px] w-[500px] mx-auto'>
        <h1 className='text-center text-red-500 text-3xl font-sans font-bold'>
            Please cheek your inbox & Verified your Email. Then try Again to login
        </h1>
       <Link to ="/login"> <Button className="bg-red-500 text-white font-bold font-nunito text-2xl px-[122px] py-[20px] w-full rounded-xl mt-5 hover:bg-red-400 transition-all duration-500">Go Back To Login Page</Button></Link>
    </div>
  )
}

export default VerifiedEmail