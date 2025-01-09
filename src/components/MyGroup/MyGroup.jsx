import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import profileOne from "../../assets/profile-one.png"
import { getDatabase, onValue, ref } from 'firebase/database';
import { useSelector } from 'react-redux';


const MyGroup = () => {

    const db = getDatabase();
    const data = useSelector((state)=> state.userDetails.userInfo);
    const [myGroupList, setMyGroupList] = useState([]);

       useEffect(()=>{
           const groupRef = ref(db, "groupList/");
           
           onValue(groupRef,(snapshot)=>{
               const arr = [];
               snapshot.forEach((item)=>{
                if(item.val().adminId == data.uid){
                    arr.push(item.val());
                }
                   
               })
               setMyGroupList(arr);
           })
       },[]);
  return (
    <section>
    <div className='w-[330px] ml-[16px] mt-[43px] pt-5 pb-[70px] shadow-box rounded-b-3xl'>
  <header className='flex justify-between  mb-[17px] px-5'>
        <h2 className='font-poppins font-semibold text-xl text-black'>My Groups</h2>
        <BsThreeDotsVertical className='text-[20px] text-primary  '/>
    </header>

    <article>
        {
            myGroupList.map((item)=>(
                <div className='flex justify-between px-5 pb-[13px] mb-4 relative before:content-[""] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-[rgba(0,0,0,0.25)] before:h-[1px] before:w-[277px]'>
            <div className="flex">
            <figure className='w-[50px] h-[50px] overflow-hidden '>
                <img src={profileOne} alt="profolio-one" />
            </figure>
            <div className='ml-[10px]'> 
            <h4 className='font-poppins font-semibold text-sm text-black '>
            {item.groupName}
            </h4>
            <p className='font-poppins font-medium text-xs text-[rgba(77,77,77,0.75)]'>{item.tagLine}</p>
            </div>
            </div>
            <div className='mt-2 '>
                <p className='font-poppins font-medium text-[10px] text-[rgba(0,0,0,0.5)]'>Today, 8:56pm</p>
            </div>
        </div>
            ))
        }
    
    </article>
    </div>
</section>
  )
}

export default MyGroup