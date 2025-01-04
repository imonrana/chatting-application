import React, { useEffect, useState } from 'react'


import { BsThreeDotsVertical } from "react-icons/bs";
import profileOne from "../../assets/profile-one.png"
import SmallButton from '../SmallButton/SmallButton';
import { getDatabase, onValue, ref } from 'firebase/database';
import { useSelector } from 'react-redux';

const BlockedUser = () => {
const db = getDatabase();
const [blockList, setBlockList] = useState([]);
const data = useSelector((selector)=> selector.userDetails.userInfo);

// red data for show daynamicallay block user

useEffect(()=>{
    const blockRef = ref(db, "block/")
    
    onValue(blockRef,(snapshot)=>{
        const arr = [];
        snapshot.forEach((item)=>{
            console.log(item.val())
            console.log(data.uid, "hello")
        if(data.uid == item.val().blockById)
            arr.push(item.val())
        })
        setBlockList(arr)
    })
},[])

  return (
    <section>
    <div className='w-[330px] ml-[16px] mt-[43px] pt-5  shadow-box rounded-b-3xl'>
  <header className='flex justify-between  mb-[17px] px-5'>
        <h2 className='font-poppins font-semibold text-xl text-black'>User List</h2>
        <BsThreeDotsVertical className='text-[20px] text-primary  '/>
    </header>

    <article>
    {
        blockList.map((item)=>(
    <div className='flex justify-between px-5 pb-[13px] mb-4 relative before:content-[""] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-[rgba(0,0,0,0.25)] before:h-[1px] before:w-[277px]'>
           
           <div className='flex '>
           <figure className='w-[50px] h-[50px] overflow-hidden '>
                <img src={profileOne} alt="profolio-one" />
            </figure>
           <div className='ml-[10px]'> 
            <h4 className='font-poppins font-semibold text-sm text-black '>
            {
             item.block 
            } 
            </h4>
             <p className='font-poppins font-medium text-xs text-[rgba(77,77,77,0.75)]'>{item.blockEmail}</p>
            </div>
           </div>
           <div>
                <SmallButton className ="px-[22px] py-1">Unblock</SmallButton>
            </div>
        </div>
    ))
}
        </article>
        </div>
</section>
  )
}

export default BlockedUser