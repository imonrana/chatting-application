import React from 'react'
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FcGallery } from "react-icons/fc";
import { FaPaperPlane } from "react-icons/fa";
import SmallButton from '../SmallButton/SmallButton';
const ChatBoxFooter = () => {
  return (
    <div className='flex items-center gap-x-[35px] mx-[54px] mt-5 border-t-2 border-[rgba(0,0,0,0.25)] pt-[35px]'>
    <div className=' relative '>
        <textarea className=' border w-[536px] h-[45px] py-[5px] pl-5 pr-[4.25rem] bg-[#F1F1F1] rounded-lg resize-none outline-none'
        name="input-message" id="inputmessage"></textarea>
         {/* icon */}
        <div className='text-xl text-orange-400 flex gap-x-3 absolute top-[10px] right-[31px]'>
        <MdOutlineEmojiEmotions />
        <FcGallery />
        </div>
    </div>
    <SmallButton className="py-4 px-4 rounded-lg text-white text-base"><FaPaperPlane /></SmallButton>
    </div>
  )
}

export default ChatBoxFooter