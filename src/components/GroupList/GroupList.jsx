import React, { useEffect, useState } from 'react'

import { CiSearch } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import SmallButton from '../SmallButton/SmallButton';


import groupImgOne from "../../assets/group_img_one.png"
import CreateGroupModal from '../Modals/CreateGroupModal/CreateGroupModal';
import { getDatabase, onValue, ref } from 'firebase/database';
import { useSelector } from 'react-redux';


const GroupList = () => {
    const db = getDatabase();
    const data = useSelector((state)=> state.userDetails.userInfo);
    const [showModal, setShowModal] = useState(false)
    const [groupList, setGroupList] = useState([]);

    const sendData = (data)=>{
        setShowModal(data)
    }

       useEffect(()=>{
           const groupRef = ref(db, "groupList/");
           
           onValue(groupRef,(snapshot)=>{
               const arr = [];
               snapshot.forEach((item)=>{
                if(item.val().adminId !== data.uid){
                    arr.push(item.val());
                }
                   
               })
               setGroupList(arr);
           })
       },[]);

  return (
    <section>
        {/* search bar start*/}

        <fieldset className='relative'>
        <input className='w-[427px] pl-[78px] drop-shadow-[0px_4Px_4px_rgba(0,0,0,0.25)] rounded-[20px] py-[18px]  outline-none placeholder:font-poppins placeholder:text-base placeholder:font-medium placeholder:text-[rgba(61,61,61,0.35)] '
        type="search" name="search" id="search" placeholder='Search' />
        <CiSearch className='text-[19px] text-black absolute top-1/2 left-[23px] -translate-y-1/2' />
        <BsThreeDotsVertical  className='text-[20px] text-primary absolute top-1/2 right-[23px] -translate-y-1/2'  />
        </fieldset>
        {/* search bar end */}

        {/* group list start */}
      <div className='w-[420px]   mt-[43px] shadow-box pb-5 rounded-3xl'>
      <header className='flex justify-between pt-[20px] mb-[17px] px-5'>
            <h2 className='font-poppins font-semibold text-xl text-black'>Groups List</h2>
            <SmallButton onClick={()=>setShowModal(!showModal)} className ="px-[8px] py-1 text-base hover:bg-transparent border border-primary hover:text-black transition duration-300" >
                Create Group
            </SmallButton>
        </header>
        {/* group item start */}
        <article >
            {
                groupList.map((item)=>(
                    <div className='flex justify-between items-center  px-5 pb-[13px] mb-4 relative before:content-[""] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-[rgba(0,0,0,0.25)] before:h-[1px] before:w-[370px]'>
                    <div className='flex '>
                    <figure className='w-[70px] h-[70px] overflow-hidden '>
                        <img src={groupImgOne} alt="groupImagetwo" />
                    </figure>
                    <div className='ml-3'> 
                    <h4 className='font-poppins font-semibold text-lg text-black'>
                    {item.groupName}
                    </h4>
                    <p className='font-poppins font-medium text-sm text-[rgba(77,77,77,0.75)]'>{item.tagLine}</p>
                    </div>
                    </div>
                    <SmallButton  className ="px-[22px] py-1" >Join</SmallButton>
    
                </div>
                ))
            }
           
        </article>
      </div>
        {/* group list end */}

        {/* create Group Modal start */}
    {
        showModal &&
 <CreateGroupModal OnSendData = {sendData} />
    }
       

    </section>
  )
}

export default GroupList
