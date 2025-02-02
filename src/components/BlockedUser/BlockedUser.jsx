import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import SmallButton from '../SmallButton/SmallButton';
import NoDataWarning from '../NoDataWarning/NoDataWarning';

import { getDatabase, onValue, push, ref, remove, set } from 'firebase/database';

import profileOne from "../../assets/profile-one.png"
import { BsThreeDotsVertical } from "react-icons/bs";




const BlockedUser = () => {

const db = getDatabase();
const data = useSelector((selector)=> selector.userDetails.userInfo);
const [blockList, setBlockList] = useState([]);



// red data for show daynamicallay block user
useEffect(()=>{
    const blockRef = ref(db, "block/");
    
    onValue(blockRef,(snapshot)=>{
        const arr = [];
        snapshot.forEach((item)=>{
        if(data.uid == item.val().blockById){
            arr.push({...item.val(), blockListId:item.key});
        }
        })
        setBlockList(arr);
    })
},[])


// unblock blocked friend and remove data form block
function handelUnblock(item) {
   set(push(ref(db, "friends/")),{
    senderId: item.blockById,
    senderName:item.blockBy,
    senderEmail:item.blockByEmail,
    reciverId:item.blockId,
    reciverName:item.block,
    reciverEmail:item.blockEmail,
   }).then(()=>{
    remove(ref(db,"block/" + item.blockListId))
   })
}


// JSX start
  return (
    <section>
    <div className='w-[330px] ml-[16px]  pt-3 pb-5  shadow-box rounded-b-3xl'>
  <header className='flex justify-between  mb-4 px-4'>
        <h2 className='font-poppins font-semibold text-xl text-black'>Block List</h2>
        <BsThreeDotsVertical className='text-[20px] text-primary  '/>
    </header>

    <article className='h-56 overflow-y-scroll scrollbar-thin scrollbar-thumb-primary scrollbar-track-slate-100  hover:scrollbar-thumb-red-400 active:scrollbar-thumb-red-500'>
    {
        blockList.length>0 ?
        blockList.map((item)=>(
    <div key={item.blockListId} className='flex items-center justify-between px-5 pb-[13px] mb-4 relative before:content-[""] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-[rgba(0,0,0,0.25)] before:h-[1px] before:w-[277px]'>
           
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
             <p className='font-poppins font-medium text-xs text-[rgba(77,77,77,0.75)]'>{item.blockEmail.slice(0,17) + (item.blockEmail.length>17 ? "..." : "")}</p>
            </div>
           </div>
           <div>
                <SmallButton onClick={()=>handelUnblock(item)} className ="px-3 py-1 !text-base">Unblock</SmallButton>
            </div>
        </div>
    ))
    :
    <NoDataWarning title={"You have 0 Blocked user"}/>
}
        </article>
        </div>
</section>
  )
}

export default BlockedUser