import React from 'react'
import profilePhoto from "../../assets/profile_pic.png"
import { SlHome } from "react-icons/sl";
import { BsChatDotsFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { ImExit } from "react-icons/im";


const NavigationBar = () => {
  return (
    <section>
        <aside className='w-[186px]  bg-primary rounded-[20px] pt-[38px] pb-[48px]'>
            <div>
            <figure className='w-[100px] h-[100px]  rounded-full overflow-hidden m-auto'>
                <img src={profilePhoto} alt="Profile pic" />
            </figure>
            {/* navigate icon */}
            <div className='mt-[80px]'>
            <div className='bg-white text-[43px] text-primary py-[22px] px-[50px] ml-[25px] mr-[8px] rounded-l-[20px]' >
            <SlHome />
            </div>
            
            <div className='mt-[50px] text-[43px] text-[#BAD1FF] py-[22px] px-[50px] ml-[25px] mr-[8px] rounded-l-[20px]' >
            <BsChatDotsFill />
            </div>
            <div className='mt-[50px] text-[43px] text-[rgba(255,255,255,0.70)] py-[22px] px-[50px] ml-[25px] mr-[8px] rounded-l-[20px]' >
            <IoMdNotificationsOutline />
            </div>
            <div className='mt-[50px] text-[43px] text-[rgba(255,255,255,0.70)] py-[22px] px-[50px] ml-[25px] mr-[8px] rounded-l-[20px]' >
            <IoSettingsOutline />
            </div>
            <div className='mt-[100px] text-[43px] text-[rgba(255,255,255,0.70)] py-[22px] px-[50px] ml-[25px] mr-[8px] rounded-l-[20px] drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)]' >
            <ImExit />
            </div>

            </div>
            </div>
            
        </aside>
    </section>
  )
}

export default NavigationBar