import React, { useEffect, useState } from 'react'

import { BsThreeDotsVertical } from "react-icons/bs";
import profileOne from "../../assets/profile-one.png"
import SmallButton from '../SmallButton/SmallButton';

// fire base import
import { getDatabase, ref, onValue, push, set, remove } from "firebase/database";
import { useSelector } from 'react-redux';
import NoDataWarning from '../NoDataWarning/NoDataWarning';


const UserList = () => {

    const data = useSelector((item)=>item.userDetails);
    const db = getDatabase();
    const [userList, setUserList] = useState([]);
    const [friendRequestList, setFriendRequestList] = useState([]);
    const [friendsList, setFriendsList] = useState([]);
    const [blockList, setBlockList] = useState([]);
    const [searchQuery, setSearchQuery] = useState([]);
    const [searchData, setSearchData] = useState("")


// read firebase data for user list
    useEffect(()=>{
        const userRef = ref(db, 'users/');
        onValue(userRef, (snapshot) => {
          let dataArr = [];
          snapshot.forEach(item => {
         
            if(data.userInfo.uid != item.key  ){
                dataArr.push({...item.val() , uid:item.key});
            }
           
            setUserList(dataArr);
          });
        });
    },[]);


// wirte firebase data for send friend request

const sendFriendRequest = (item)=> {
  set(push(ref(db, 'friendRequest/')), {
    senderId: data.userInfo.uid,
    senderName: data.userInfo.displayName,
    senderEmail: data.userInfo.email,
    reciverId: item.uid,
    reciverName: item.username,
    reciverEmail: item.email,
  }); 
}



// red firebase friend Request data for concate reciver & sender Id for friend request.

useEffect(()=>{
  const friendRequestRef = ref(db, 'friendRequest/');
  onValue(friendRequestRef, (snapshot) => {
   const dataArr = [];
    snapshot.forEach(item => {
     dataArr.push({combinedId: item.val().senderId + item.val().reciverId, frndReqId:item.key});
     
    });
    setFriendRequestList(dataArr);
  });
},[])



// red firebase friend Request data for concate reciver & sender Id for friends.

useEffect(()=>{
  const friendsRef = ref(db, 'friends/');
  onValue(friendsRef, (snapshot) => {
   const dataArr = [];
    snapshot.forEach(item => {
     dataArr.push(item.val().senderId + item.val().reciverId);
     
    });
    setFriendsList(dataArr);
  });
},[])


// red block data for concate block and block by 

useEffect(()=>{
 
  const blockRef = ref(db, "block/");

  onValue(blockRef, (snapshot)=>{
    const arr = []
    snapshot.forEach((item)=>{
      const concateId = item.val().blockId + item.val().blockById;
      arr.push(concateId);
    })
    setBlockList(arr);
  })
 
},[])

// cancel Friend Request

const handelCancelRequest = (item)=>{
const request = friendRequestList.find(
  (req)=>req.combinedId === data.userInfo.uid + item.uid
);

if (request) {
  remove(ref(db, "friendRequest/" + request.frndReqId));
}
}

// Search Functionality for userList

function handelSearch(e) {
  const data = e.target.value;
  setSearchData(data);

if (data == 0) {
  setSearchData("")
  setSearchQuery([]) 
}else{
  let arr = [];
  userList.filter((user)=>{
    const searchItem = user.username.toLowerCase().includes(data.toLowerCase());
    if (searchItem) {
      arr.push(user)
      
    }
    setSearchQuery(arr)
  })
}
  
}




  return (
    <section>
        <div className='w-[330px]  ml-[16px] pb-5 shadow-box rounded-b-3xl'>
      <header className='flex justify-between  py-3 px-3  bg-white'>
            <h2 className='font-poppins font-semibold text-xl text-black'>User List</h2>
            <BsThreeDotsVertical className='text-xl text-primary  '/>
        </header>
        <div  className='mx-5 mb-5'>
          <input onChange={handelSearch} 
          className=' font-poppins placeholder:font-poppins placeholder:font-medium   border-2 border-gray-400 outline-none w-full py-1 px-5 rounded-lg shadow-lg ' 
           type="search" name="search" placeholder='Search by user name'/>
          </div>
        <article className='h-44 overflow-y-scroll'>
            {   
            searchData && searchQuery.length === 0 ?
            <NoDataWarning title ="No Matching Data Found"/>
            :
            searchQuery.length > 0 ?
            searchQuery.map((item, index)=>(
              <div key={index} className='flex justify-between items-center px-5 pb-[13px] mb-4 relative before:content-[""] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-[rgba(0,0,0,0.25)] before:h-[1px] before:w-[277px]'>
              <div className='flex '>
              <figure className='w-[50px] h-[50px] overflow-hidden '>
                   <img src={profileOne} alt="profolio-one" />
               </figure>
              <div className='ml-[10px]'> 
               <h4 className='font-poppins font-semibold text-sm text-black '>
               {item.username }
               
               </h4>
               <p className='font-poppins font-medium text-xs text-[rgba(77,77,77,0.75)]'>{item.email.slice(0,17) + (item.email.length >17 ?  "..." : "")}</p>
               </div>
              </div>
              <div className='mt-2 px-[8px] '>
                 
                   {
                    blockList.includes(data.userInfo.uid+ item.uid) ||
                    blockList.includes(item.uid + data.userInfo.uid) ?
                    <SmallButton  className ="px-3 py-1 cursor-default !text-base ">Block</SmallButton>
                    :
                    friendsList.includes(data.userInfo.uid + item.uid) ||
                    friendsList.includes(item.uid + data.userInfo.uid)
                    ?
                    <SmallButton  className ="px-2 py-1 cursor-default !text-[16px]">Friends</SmallButton>
                    :
                    friendRequestList.some((req)=> req.combinedId == data.userInfo.uid + item.uid)
                    ?
                    <SmallButton onClick={()=> handelCancelRequest(item)} className ="px-2 py-1 cursor-pointer text-xs   ">Cancel Request</SmallButton>
                    :
                   friendRequestList.some((req)=> req.combinedId == item.uid + data.userInfo.uid)
                    ?
                    <SmallButton  className ="px-2 py-2 cursor-default text-xs   ">Pendding</SmallButton>
                    : 
                    <SmallButton onClick={()=> sendFriendRequest(item)} className ="px-[22px] py-1 cursor-pointer">+</SmallButton>

                   }
                    
                  
               </div>
           </div>
          ))
            :
            
            
                    userList.map((item, index)=>(
                        <div key={index} className='flex justify-between items-center px-5 pb-[13px] mb-4 relative before:content-[""] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-[rgba(0,0,0,0.25)] before:h-[1px] before:w-[277px]'>
                        <div className='flex '>
                        <figure className='w-[50px] h-[50px] overflow-hidden '>
                             <img src={profileOne} alt="profolio-one" />
                         </figure>
                        <div className='ml-[10px]'> 
                         <h4 className='font-poppins font-semibold text-sm text-black '>
                         {item.username }
                         
                         </h4>
                         <p className='font-poppins font-medium text-xs text-[rgba(77,77,77,0.75)]'>{item.email.slice(0,17) + (item.email.length >17 ?  "..." : "")}</p>
                         </div>
                        </div>
                        <div className='mt-2 px-[8px] '>
                           
                             {
                              blockList.includes(data.userInfo.uid+ item.uid) ||
                              blockList.includes(item.uid + data.userInfo.uid) ?
                              <SmallButton  className ="px-3 py-1 cursor-default !text-base ">Block</SmallButton>
                              :
                              friendsList.includes(data.userInfo.uid + item.uid) ||
                              friendsList.includes(item.uid + data.userInfo.uid)
                              ?
                              <SmallButton  className ="px-2 py-1 cursor-default !text-[16px]">Friends</SmallButton>
                              :
                              friendRequestList.some((req)=> req.combinedId == data.userInfo.uid + item.uid)
                              ?
                              <SmallButton onClick={()=> handelCancelRequest(item)} className ="px-2 py-1 cursor-pointer text-xs   ">Cancel Request</SmallButton>
                              :
                             friendRequestList.some((req)=> req.combinedId == item.uid + data.userInfo.uid)
                              ?
                              <SmallButton  className ="px-2 py-2 cursor-default text-xs   ">Pendding</SmallButton>
                              : 
                              <SmallButton onClick={()=> sendFriendRequest(item)} className ="px-[22px] py-1 cursor-pointer">+</SmallButton>

                             }
                              
                            
                         </div>
                     </div>
                    ))
                    
                }
          
            </article>
            </div>
    </section>
  )
}

export default UserList