import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDatabase, onValue, push, ref, remove, set } from 'firebase/database';

import { msgChatInfo } from '../Slices/MsgChatSlice';
import NoDataWarning from '../NoDataWarning/NoDataWarning';
import SmallButton from '../SmallButton/SmallButton';
import profileOne from "../../assets/profile-one.png";

import { BsThreeDotsVertical } from "react-icons/bs";





const Friends = (props) => {
    const {active} = props
    const db = getDatabase();
    const data = useSelector((item)=>item.userDetails.userInfo);
    const dispatch = useDispatch();
    const [friends, setFriends] = useState([]);


// handel show friends data
useEffect(()=>{
    const friendsRef = ref(db,"friends/");
    onValue(friendsRef, (snapshot)=>{
        let arr = [];
        snapshot.forEach((item)=>{
            if(data.uid == item.val().reciverId || data.uid == item.val().senderId ){
                arr.push({...item.val(), friendsId: item.key});
            }
        })
        setFriends(arr);
    })
},[]);


//  handel unfriend
const handelUnfriend =  (item)=>{
    remove(ref(db, "friends/" + item.friendsId))
}


// wirte data for block friends 
function handelBlock(item){
    if(data.uid == item.reciverId){
        set(push(ref(db, "block/")),{
            block: item.senderName,
            blockId:item.senderId,
            blockEmail:item.senderEmail,
            blockBy:item.reciverName,
            blockById:item.reciverId,
            blockByEmail:item.reciverEmail
        }).then(()=>{
            remove(ref(db, "friends/" + item.friendsId ))
        });
    }else{
           set(push(ref(db, "block/")),{
            block: item.reciverName,
            blockId:item.reciverId,
            blockEmail:item.reciverEmail,
            blockBy:item.senderName,
            blockById: item.senderId,
            blockByEmail: item.senderEmail,
           }).then(()=>{
            remove(ref(db, "friends/" + item.friendsId ))
        });
        }  
}


// select Active Chat 
function handelMsg(item) {
    let activeChat = {}
    if (data.uid === item.senderId) {
        activeChat = {
                status: "single",
                id: item.reciverId,
                name: item.reciverName,
                }
    }else{
        activeChat = {
                status: "single",
                id: item.senderId,
                name:item.senderName,
            }
    }
     dispatch(msgChatInfo(activeChat));
    localStorage.setItem("msgChatInfo", JSON.stringify(activeChat));
}



  return (
    <section>
        <div className='w-[330px] ml-[16px] pt-3 pb-5 shadow-box rounded-b-3xl'>
      <header className='flex justify-between  mb-[17px] px-3'>
            <h2 className='font-poppins font-semibold text-xl text-black'>Friends</h2>
            <BsThreeDotsVertical className='text-[20px] text-primary  '/>
        </header>

        <article className='h-56 overflow-y-scroll scrollbar-thin scrollbar-thumb-primary scrollbar-track-slate-100  hover:scrollbar-thumb-red-400 active:scrollbar-thumb-red-500'>
        {
            friends.length>0 ?
            friends.map((item, index)=>(
                <div key={index} className='flex justify-between px-5 pb-[13px] mb-4 relative before:content-[""] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-[rgba(0,0,0,0.25)] before:h-[1px] before:w-[277px]'>
                <div className="flex">
                <figure className='w-[50px] h-[50px] overflow-hidden '>
                    <img src={profileOne} alt="profolio-one" />
                </figure>
                <div className='ml-[10px]'> 
                <h4 className='font-poppins font-semibold text-sm text-black '>
                {data.uid == item.reciverId ? item.senderName : item.reciverName}
                </h4>
                <p className='font-poppins font-medium text-xs text-[rgba(77,77,77,0.75)]'>
                    {data.uid == item.reciverId ? item.senderEmail.slice(0, 12) + (item.senderEmail.length>12 ? "..." : "") : item.reciverEmail.slice(0, 12) + (item.reciverEmail.length >12 ? "..." : "")}
                </p>
                </div>
                </div>
                
                <div className="mt-2 flex gap-2">
                    {active === "message" ?
                        // for message
                        <SmallButton onClick={()=>handelMsg(item)} className= "py-0.5 px-2 text-xs ml-1 rounded-md">Message</SmallButton>
                      :
                      <>
                      {/* for home page */}
                      <SmallButton onClick={()=>handelUnfriend(item)} className= "py-0.5 px-2 text-xs ml-1 rounded-md">Unfriend</SmallButton>
                      <SmallButton onClick={()=>handelBlock(item)} className= "py-0.5 px-2 text-xs rounded-md">Block</SmallButton>
                      </>
                    }
                </div>
            </div>
            ))
            :
            <NoDataWarning title="You have 0 friends"/>
        }
        </article>
        </div>
    </section>
  )
}
export default Friends