import React, { useEffect, useState } from 'react'
import NavigationBar from '../../NavigationBar/NavigationBar'
import GroupList from '../../GroupList/GroupList'
import Friends from '../../Friends/Friends'
import UserList from '../../UserList/UserList'
import FriendRequest from '../../FriendRequest/FriendRequest'
import MyGroup from '../../MyGroup/MyGroup'
import BlockedUser from '../../BlockedUser/BlockedUser'
import { useSelector } from 'react-redux'
import {  Link, useNavigate } from 'react-router-dom'

// firebase
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Button from '../../Button/Button'
import VerifiedEmail from '../../VerifiedEmail/VerifiedEmail'

const Home = () => {
  const auth = getAuth();
  const [verified, setVerified] = useState(false)
  const navigate = useNavigate()
  const data = useSelector(state => state.userDetails.userInfo);


useEffect(()=>{
  if(!data){
    navigate("/login")
  }
}
)


onAuthStateChanged(auth, (user) => {
  if (user.emailVerified) {
    setVerified(true)
  } else {
    setVerified(false)
  }
});



  return (

 
  <section className='m-4'>
{
  verified ?
  <div className='flex gap-x-[20px]'>
  <div>
  <NavigationBar/>
  </div>

  <div>
 <div className='flex'>
 <GroupList/>
  <Friends/>
  <UserList/>
 </div>
 <div className='flex'>
  <FriendRequest/>
  <MyGroup/>
  <BlockedUser/>
 </div>
  </div>
  
  </div>

:
<VerifiedEmail/>
}
</section>
  )
}

export default Home