import React from 'react'
import chatProfilePIc from "../../assets/chat-profile-img.png"
import { BsThreeDotsVertical } from 'react-icons/bs'
import SenderMsgBox from '../SenderMsgBox/SenderMsgBox'
import ReciverMsgBox from '../ReciverMsgBox/ReciverMsgBox'
import ChatBoxFooter from '../ChatBoxFooter/ChatBoxFooter'
const ChatBox = () => {
  return (
   <div className='shadow-md w-[689px] rounded-[20px] pb-[34px]'>
    {/* chatbox profile info */}
    <header className=' mx-[52px] py-7 flex items-center justify-between border-b-2 border-[rgba(0,0,0,0.25)]'>
     <div className='flex items-center gap-x-8'> 
     <div className='w-[75px] h-[75px] rounded-full overflow-hidden'>
            <img src={chatProfilePIc} alt="chatProfilePIc" />
        </div>
        <div>
            <h2 className='font-poppins font-semibold text-2xl text-[#000000]'>Swathi </h2>
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
        <ReciverMsgBox/>
    </div>

    <div>
        <SenderMsgBox/>
    </div>
    </div>

    <div>
        <ChatBoxFooter/>
    </div>


   </div>
  )
}

export default ChatBox