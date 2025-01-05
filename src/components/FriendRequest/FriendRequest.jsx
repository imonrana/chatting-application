import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import profileOne from "../../assets/profile-one.png"
import SmallButton from '../SmallButton/SmallButton';

// firebase
import { getDatabase, ref, onValue, push, set, remove } from "firebase/database";
import { useSelector } from 'react-redux';
import NoDataWarning from '../NoDataWarning/NoDataWarning';

const FriendRequest = () => {
    const db = getDatabase();
    const data = useSelector((selector)=>selector.userDetails.userInfo);
    const [friendRequestList, setFriendRequestList] = useState([]);

    // firebase database red data for show friend request
    useEffect(()=>{
        const friendRequest = ref(db, 'friendRequest/');
        onValue(friendRequest, (snapshot) => {
           const requestArr = []
            snapshot.forEach((item)=>{
            if(data.uid === item.val().reciverId){
                requestArr.push({...item.val(), userId:item.key});
               
            }
           })
          setFriendRequestList(requestArr);
        });
    },[])


// accept friend request data base 

const handelFriendRequ = (item)=>{
    set(push(ref(db, "friends/")),{
       ...item
    }
).then(()=>{
    remove(ref(db, "friendRequest/" + item.userId));
})}


// reject friend request 
const handelReject = (item)=>{
    remove(ref(db, "friendRequest/" + item.userId));
}
  return (
    <section>
    <div className='w-[430px] mt-[43px] pt-5 pb-5 shadow-box rounded-b-3xl'>
  <header className='flex justify-between  mb-[17px] px-5'>
        <h2 className='font-poppins font-semibold text-xl text-black'>Friend  Request</h2>
        <BsThreeDotsVertical className='text-[20px] text-primary  '/>
    </header>

    <article  className='h-[370px] overflow-y-scroll'>
        {
            friendRequestList.length > 0 ?
            friendRequestList.map((item, index)=>(
                
                <div key={index} className='flex justify-between px-5 pb-[13px] mb-4 relative before:content-[""] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-[rgba(0,0,0,0.25)] before:h-[1px] before:w-[277px]'>
           <div className='flex'>
           <figure className='w-[50px] h-[50px] overflow-hidden '>
                <img src={profileOne} alt="profolio-one" />
            </figure>
            <div className='ml-[10px]'> 
            <h4 className='font-poppins font-semibold text-sm text-black '>
            {item.senderName}
            </h4>
            <p className='font-poppins font-medium text-xs text-[rgba(77,77,77,0.75)]'>{item.senderEmail}</p>
            </div>
           </div>
           <div className='mt-2 flex gap-2'>
                <SmallButton onClick={()=>handelFriendRequ(item)} className= "py-0.5 px-2 text-xs ml-1 rounded-md">Accept</SmallButton>
                <SmallButton onClick={()=>handelReject(item)} className= "py-0.5 px-2 text-xs rounded-md">Reject</SmallButton>
            </div>
        </div>

            ))
            :
            <NoDataWarning title = "You have 0 friend request"/>
        }
    </article>
    
    

    </div>
</section>
  )
}

export default FriendRequest