import React, { useEffect, useState } from 'react'

import { CiSearch } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import SmallButton from '../SmallButton/SmallButton';


import groupImgOne from "../../assets/group_img_one.png"
import CreateGroupModal from '../Modals/CreateGroupModal/CreateGroupModal';
import { getDatabase, onValue, push, ref, set } from 'firebase/database';
import { useSelector } from 'react-redux';
import NoDataWarning from '../NoDataWarning/NoDataWarning';
import { Bounce, toast, ToastContainer } from 'react-toastify';


const GroupList = () => {
    const db = getDatabase();
    const data = useSelector((state)=> state.userDetails.userInfo);
    const [showModal, setShowModal] = useState(false);
    const [groupList, setGroupList] = useState([]);
    const [sendRequest, setSendRequest] = useState([]);
    const [acceptRequest, setAcceptRequest] = useState([]);

// show modal
    const sendData = (data)=>{
        setShowModal(data)
    }

    // red data for show groupList

       useEffect(()=>{
           const groupRef = ref(db, "groupList/");
           
           onValue(groupRef,(snapshot)=>{
               const arr = [];
               snapshot.forEach((item)=>{
                if(item.val().adminId !== data.uid){
                    arr.push({...item.val(), groupListId : item.key});
                }
               
               })
               setGroupList(arr);
           })
       },[]);
       
     
// send data for group join request
function handelJoinRequest(item) {
    set(ref(db, "groupJoinRequest/" + item.groupListId ),{
        ...item,
        requestSenderId: data.uid,
        requestSenderName: data.displayName,
    }).then(()=>{
        toast('Join Request sent Success!')
        
    })
}

// red group join data for dynamic button
// send join request
useEffect(()=>{
    const groupJoinRequestRef = ref(db, "groupJoinRequest/");
    onValue(groupJoinRequestRef, (snapshot)=>{
        const arr = []
        snapshot.forEach((item) => {
            if (data.uid === item.val().requestSenderId) {
                
                arr.push({requestId: item.val().requestSenderId, groupId:item.key});
            }
        });
        setSendRequest(arr);
    })
},[data.uid])

// accept join request

useEffect(()=>{
const acceptRequestRef = ref(db, "groupList/");
onValue(acceptRequestRef, (snapshot)=>{
     const arr = []
    snapshot.forEach((item)=>{
        const memberList = item.val().memberList
        if(memberList){
            if (data.uid == Object.keys(item.val().memberList) ) {
                 arr.push(...Object.values(item.val().memberList))
            }
        }
    })
   setAcceptRequest(arr)
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
        {/* react tostyfy start*/}
                <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
                />
                {/* react tostyfy end*/}
      <header className='flex justify-between pt-[20px] mb-[17px] px-5'>
            <h2 className='font-poppins font-semibold text-xl text-black'>Groups List</h2>
            <SmallButton onClick={()=>setShowModal(!showModal)} className ="px-[8px] py-1 text-base hover:bg-transparent border border-primary hover:text-black transition duration-300" >
                Create Group
            </SmallButton>
        </header>
        {/* group item start */}
        <article className='h-[252px] overflow-y-scroll' >
            {
                groupList.length>0 ?
                
                groupList.map((item, index)=>(
                    <div key={index} className=' flex justify-between items-center  px-5 pb-[13px] mb-4 relative before:content-[""] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-[rgba(0,0,0,0.25)] before:h-[1px] before:w-[370px]'>
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
                    {
                        sendRequest.find((req)=> {
                            return req.requestId === data.uid && req.groupId === item.groupListId
                        })?
                        <SmallButton className ="px-[22px] py-1" >Sent</SmallButton>
                        :
                        acceptRequest.find((req)=>{
                            return req.memberId === item.adminId+data.uid && req.groupListId === item.groupListId
                        })
                        ?
                        <SmallButton className ="px-[22px] py-1" >Joined</SmallButton>
                        :
                        <SmallButton onClick={()=>handelJoinRequest(item)}  className ="px-[22px] py-1" >Join</SmallButton>
                    }
                    
    
                </div>
                ))
                :
                <NoDataWarning title={"You have 0 group"}/>
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
