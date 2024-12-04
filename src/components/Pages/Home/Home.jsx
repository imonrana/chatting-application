import React from 'react'
import NavigationBar from '../../NavigationBar/NavigationBar'
import GroupList from '../../GroupList/GroupList'
import Friends from '../../Friends/Friends'
import UserList from '../../UserList/UserList'
import FriendRequest from '../../FriendRequest/FriendRequest'
import MyGroup from '../../MyGroup/MyGroup'
import BlockedUser from '../../BlockedUser/BlockedUser'


const Home = () => {
  return (
    <section className='m-4'>

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


</section>
  )
}

export default Home