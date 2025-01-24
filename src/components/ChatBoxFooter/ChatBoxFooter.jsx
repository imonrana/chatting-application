import React, { useEffect, useState } from 'react'
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FcGallery } from "react-icons/fc";
import { FaPaperPlane } from "react-icons/fa";
import SmallButton from '../SmallButton/SmallButton';
import { getDatabase, push, ref, set } from 'firebase/database';
import { useSelector } from 'react-redux';
import EmojiPicker from 'emoji-picker-react';
import moment from 'moment';
const ChatBoxFooter = () => {
const [msg, setMsg] = useState("");
const [showemoji,  setShowEmoji] = useState(false)
const db = getDatabase()
const data = useSelector((item)=> item.userDetails.userInfo);
const chatProfile = useSelector((item)=>item.chatDetails.chatInfo);

// write data to send msg

  function handelSendMsg(){
    set(push(ref(db, "singleMessage/")),{
      msg: msg,
      msgSenderId: data.uid,
      msgSenderName: data.displayName,
      msgReciverName: chatProfile.name,
      msgReciverId: chatProfile.id,
      data: moment().format(),
    }).then(()=>{
      setMsg("");
      setShowEmoji(false);
    })
  }


// for emojiPiker 


  const onEmojiClick = (event, emojiObject)=>{
    if (emojiObject) {
      setMsg((prevMsg)=> prevMsg + event.emoji);
    }
  }
  

  return (
    <div className='flex items-center gap-x-[35px] mx-[54px] mt-5 border-t-2 border-[rgba(0,0,0,0.25)] pt-[35px]'>
    <div className=' relative '>
        <textarea value={msg} onChange={(e)=>setMsg(e.target.value)}
        className=' border w-[536px] h-[45px] py-[5px] pl-5 pr-[4.25rem] bg-[#F1F1F1] rounded-lg resize-none outline-none'
        name="input-message" id="inputmessage"></textarea>
         {/* icon */}
        <div className='text-xl text-orange-400 flex gap-x-3 absolute top-[10px] right-[31px]'>
        <MdOutlineEmojiEmotions onClick={()=> setShowEmoji(!showemoji)}/>
        <FcGallery />
        </div>

        {
          showemoji && 
          <div className='absolute bottom-[50px] left-1/2 -translate-x-1/2'>
          <EmojiPicker onEmojiClick={onEmojiClick} />
           </div>
        }
    </div>
    <SmallButton onClick={handelSendMsg}
     className="py-4 px-4 rounded-lg text-white text-base"><FaPaperPlane /></SmallButton>
    </div>
  )
}

export default ChatBoxFooter