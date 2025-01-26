import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import {useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavigationBar from '../NavigationBar/NavigationBar';
import VerifiedEmail from '../VerifiedEmail/VerifiedEmail'

import { getAuth, onAuthStateChanged } from "firebase/auth";




const Root = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const data = useSelector(state => state.userDetails.userInfo);
    const [verified, setVerified] = useState(()=> localStorage.getItem("isVerified"));
 

// cheek valid user
    useEffect(()=>{
        if(!data){
          navigate("/login")
        }
      },[data,navigate])

  // cheek Email Verified
   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if ( user.emailVerified) {
          setVerified(true);
          localStorage.setItem("isVerified", "true")
        } else {
          setVerified(false)
          localStorage.setItem("isVerified", "false")
        }
      });
   },[auth]);



   
  return (
<section  className='relative p-3'>
{
  verified ?
  <div className='flex gap-x-[20px]'>
  <div>
  <NavigationBar/>
  </div>

  <div>
    
<Outlet/>
    
  </div>
  
  </div>

:
<VerifiedEmail/>
}
</section>
  )
}

export default Root