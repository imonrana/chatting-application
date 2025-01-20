import React from 'react'
import GroupList from '../../GroupList/GroupList'
import Friends from '../../Friends/Friends'
import UserList from '../../UserList/UserList'
import FriendRequest from '../../FriendRequest/FriendRequest'
import MyGroup from '../../MyGroup/MyGroup'
import BlockedUser from '../../BlockedUser/BlockedUser'




const Home = () => {

  return (
    <>
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
 </>
  )
}

export default Home