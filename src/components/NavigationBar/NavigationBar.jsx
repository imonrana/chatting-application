import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import profilePhoto from "../../assets/profile_pic.png";
import ProfileImgModal from "../Modals/ProfileImgModal/ProfileImgModal";

import { SlHome } from "react-icons/sl";
import { BsChatDotsFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import { FaCloudUploadAlt } from "react-icons/fa";

const NavigationBar = () => {
  const [profileImgUpdate, setProfileImgUpdate] = useState(false);
  const [childCropData, setChildCropData] = useState(profilePhoto);
  const data = useSelector((selector) => selector.userDetails.userInfo);
  return (
    <section>
      <aside className="bg-primary rounded-[20px] w-[186px] h-[calc(100vh-32px)]">
        <div className="py-4">

          {/* Profile img part start */}
          <figure
            onClick={() => setProfileImgUpdate(true)}
            className='w-[100px] h-[100px]  rounded-full overflow-hidden m-auto relative group
            after:content-[""] after:absolute after:top-0 after:left-0 hover:after:bg-[rgba(0,0,0,0.41)] after:h-full after:w-full cursor-pointer transition-all duration-500 '
          >
            <img src={childCropData} alt="Profile pic" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white  text-xl hidden group-hover:inline  ">
              <FaCloudUploadAlt />
            </span>
          </figure>
          {/* profile img part end */}


          {/* display name part start */}
          <div>
            <h3 className="text-center font-nunito text-white text-xl font-bold mt-5">
              {data?.displayName || "Guest"}
            </h3>
          </div>
          {/* display name part end */}


          {/* navigate icon part start */}
          <div className="pt-5">
            {/* home part start */}
            <div className=" m-auto w-fit">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white text-4xl text-primary py-5 px-14 rounded-l-[20px] inline-block"
                    : " text-4xl text-[#BAD1FF]  py-5 px-14  rounded-l-[20px] inline-block"
                }
              >
                <SlHome />
              </NavLink>
            </div>
            {/* home part end */}
            
            {/* Message part start */}
            <div className="w-fit m-auto">
              <NavLink
                to="/message"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white text-4xl text-primary font-bold py-5 px-14 rounded-l-[20px] inline-block"
                    : " text-4xl text-[#BAD1FF] font-bold  py-5 px-14  rounded-l-[20px] inline-block"
                }
              >
                <BsChatDotsFill />
              </NavLink>
            </div>
            {/* Message part end */}

            <div className="text-4xl text-[rgba(255,255,255,0.70)] font-bold py-5 px-14 w-fit m-auto rounded-l-[20px]">
              <IoMdNotificationsOutline />
            </div>
            <div className="text-4xl text-[rgba(255,255,255,0.70)] font-bold py-5 px-14 w-fit m-auto rounded-l-[20px]">
              <IoSettingsOutline />
            </div>
            <div className="text-4xl text-[rgba(255,255,255,0.70)] font-bold pt-10 px-14 w-fit m-auto rounded-l-[20px] ">
              <ImExit />
            </div>
          </div>
        </div>
      </aside>

      {profileImgUpdate && (
        <ProfileImgModal
          setChildCropData={setChildCropData}
          setProfileImgUpdate={setProfileImgUpdate}
          profileImgUpdate={profileImgUpdate}
        />
      )}
    </section>
  );
};

export default NavigationBar;
