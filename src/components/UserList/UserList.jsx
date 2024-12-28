import React, { useEffect, useState } from 'react'

import { BsThreeDotsVertical } from "react-icons/bs";
import profileOne from "../../assets/profile-one.png"
import SmallButton from '../SmallButton/SmallButton';

// fire base 
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector } from 'react-redux';



const UserList = () => {
    const data = useSelector((item)=>item.userDetails);
    const db = getDatabase();
    const [userList, setUserList] = useState([])
    useEffect(()=>{
        const userRef = ref(db, 'users/');
        onValue(userRef, (snapshot) => {
          let dataArr = [];
          snapshot.forEach(item => {
         
            if(data.userInfo.uid != item.key){
                dataArr.push(item.val());
            }
           
            setUserList(dataArr)
          });
        });
    },[]);


  return (
    <section>
        <div className='w-[330px] ml-[16px] pt-5  shadow-box rounded-b-3xl'>
      <header className='flex justify-between  mb-[17px] px-5'>
            <h2 className='font-poppins font-semibold text-xl text-black'>User List</h2>
            <BsThreeDotsVertical className='text-[20px] text-primary  '/>
        </header>

        <article>
            {   
                    userList.map((item, index)=>(
                        <div key={index} className='flex justify-between px-5 pb-[13px] mb-4 relative before:content-[""] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-[rgba(0,0,0,0.25)] before:h-[1px] before:w-[277px]'>
    
                        <div className='flex '>
                        <figure className='w-[50px] h-[50px] overflow-hidden '>
                             <img src={profileOne} alt="profolio-one" />
                         </figure>
                        <div className='ml-[10px]'> 
                         <h4 className='font-poppins font-semibold text-sm text-black '>
                         {item.username}
                         </h4>
                         <p className='font-poppins font-medium text-xs text-[rgba(77,77,77,0.75)]'>{item.email}</p>
                         </div>
                        </div>
                        <div className='mt-2 px-[8px] '>
                             <SmallButton className ="px-[22px] py-1">+</SmallButton>
                         </div>
                     </div>
                    ))
                    
                }
          
            </article>
            </div>
    </section>
  )
}

export default UserList