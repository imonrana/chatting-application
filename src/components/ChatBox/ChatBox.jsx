import React, { useEffect, useState } from 'react'
import chatProfilePIc from "../../assets/chat-profile-img.png"
import { BsThreeDotsVertical } from 'react-icons/bs'
import MsgBox from '../MsgBox/MsgBox'
import ChatBoxFooter from '../ChatBoxFooter/ChatBoxFooter'
import { useSelector } from 'react-redux'
import { getDatabase, onValue, ref } from 'firebase/database'
const ChatBox = () => {
    const db = getDatabase();
    const data = useSelector((item)=> item.userDetails.userInfo);
     const activeData = useSelector((item)=>item.chatDetails.activeData);
     const [message, setMessage] = useState([]);


// get MSG dynamically
useEffect(()=>{
    const msgRef = ref(db, "singleMessage/")
    onValue(msgRef, (snapshot)=>{
        const arr = []
       snapshot.forEach((item)=>{
        if(
        (data.uid === item.val().msgSenderId && activeData.id === item.val().msgReciverId)
        ||
        (data.uid === item.val().msgReciverId && activeData.id === item.val().msgSenderId )
        ){
            arr.push(item.val())
        }
       })
       setMessage(arr);
    })
},[activeData])


  return (
   <div className='shadow-md rounded-[20px] pb-6'>
    {/* chatbox profile info */}
    <header className=' mx-[52px] py-7 flex items-center justify-between border-b-2 border-[rgba(0,0,0,0.25)]'>
     <div className='flex items-center gap-x-8'> 
     <div className='w-[75px] h-[75px]  rounded-full overflow-hidden relative'>
            <img src={chatProfilePIc} alt="chatProfilePIc"/>
            <div className="bg-blue-500 h-2 w-2 rounded-full absolute bottom-[14px] right-[9px]"></div>
        </div>
        <div>
            <h2 className='font-poppins font-semibold text-2xl text-[#000000]'>{activeData?.name || "Sewty"} </h2>
            <p className='font-poppins font-normal text-sm text-[rgba(0,0,0,0.85)]'>Online</p>
        </div>
     </div>
     <div>
        <BsThreeDotsVertical className='text-[25px] text-[#5F35F5]'/>
     </div>
    </header>

    {/* msg part start */}
    <div className='h-[350px] overflow-y-scroll'>
    <div>
        <MsgBox message = {message}/>
    </div>
    </div>

    <div>
        <ChatBoxFooter/>
    </div>


   </div>
  )
}

export default ChatBox