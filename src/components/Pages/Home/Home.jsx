import React from 'react'
import GroupList from '../../GroupList/GroupList'
import Friends from '../../Friends/Friends'
import UserList from '../../UserList/UserList'
import FriendRequest from '../../FriendRequest/FriendRequest'
import MyGroup from '../../MyGroup/MyGroup'
import BlockedUser from '../../BlockedUser/BlockedUser'




const Home = () => {

  return (
    <section className='space-y-3'>
 <div className='flex h-[calc(50vh-20px)]'>
 <GroupList/>
  <Friends/>
  <UserList/>
 </div>

 <div className='flex h-[calc(50vh-20px)]'>
  <FriendRequest/>
  <MyGroup/>
  <BlockedUser/>
 </div>
 </section>
  )
}

export default Home