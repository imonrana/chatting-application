import React, { useEffect, useState } from 'react'
import profilePhoto from "../../assets/profile_pic.png"
import { SlHome } from "react-icons/sl";
import { BsChatDotsFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import { FaCloudUploadAlt } from "react-icons/fa";
import ProfileImgModal from '../Modals/ProfileImgModal/ProfileImgModal';
import { getAuth } from 'firebase/auth';
import { NavLink} from 'react-router-dom';


const NavigationBar = () => {

  const auth = getAuth()
  const [profileImgUpdate, setProfileImgUpdate] = useState(false);
 const [childCropData, setChildCropData] = useState(profilePhoto)

  return (
    <section>
        <aside className='w-[186px]  bg-primary rounded-[20px] pt-[38px] pb-[48px]'>
            <div>
            <figure 
             onClick={()=>setProfileImgUpdate(true)}
            className='w-[100px] h-[100px]  rounded-full overflow-hidden m-auto relative group
            after:content-[""] after:absolute after:top-0 after:left-0 hover:after:bg-[rgba(0,0,0,0.41)] after:h-full after:w-full cursor-pointer transition-all duration-500 '>
                <img src={childCropData} alt="Profile pic" />
                <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white  text-xl hidden group-hover:inline  '>
                <FaCloudUploadAlt />
                </span>
            </figure>
            {/* profile Name */}
            <div>
              <h3 className='text-center font-nunito text-white text-xl font-bold mt-5'>{auth.currentUser.displayName}</h3>
            </div>

            {/* navigate icon */}
            <div className='mt-[60px]'>
            <div className='mt-[50px]' >
            <NavLink to="/" className= {({isActive})=> isActive ? "bg-white text-[43px] text-primary py-[22px] px-[50px] ml-[25px] mr-[8px] rounded-l-[20px] inline-block": " text-[43px] text-[#BAD1FF]  py-[22px] px-[50px] ml-[25px] mr-[8px] rounded-l-[20px] inline-block"}>
            <SlHome/>
            </NavLink>
            </div>
            <div className='mt-[50px]' >
            <NavLink to="/message" className= {({isActive})=> isActive ? "bg-white text-[43px] text-primary py-[22px] px-[50px] ml-[25px] mr-[8px] rounded-l-[20px] inline-block": " text-[43px] text-[#BAD1FF]  py-[22px] px-[50px] ml-[25px] mr-[8px] rounded-l-[20px] inline-block"}>
            <BsChatDotsFill />
            </NavLink>
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
        
        {
          profileImgUpdate &&
        
          <ProfileImgModal setChildCropData = {setChildCropData} setProfileImgUpdate = {setProfileImgUpdate} profileImgUpdate = {profileImgUpdate}/>
        }
    </section>
  )
}

export default NavigationBar