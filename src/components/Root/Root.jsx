import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {useNavigate } from 'react-router-dom'

// firebase
import { getAuth, onAuthStateChanged } from "firebase/auth";
import VerifiedEmail from '../VerifiedEmail/VerifiedEmail'
import { Outlet } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';


const Root = () => {
    const auth = getAuth();
    const [verified, setVerified] = useState(()=> localStorage.getItem("isVerified"));
    const navigate = useNavigate()
    const data = useSelector(state => state.userDetails.userInfo);
 
    useEffect(()=>{
        if(!data){
          navigate("/login")
        }
      },[data,navigate])
      
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