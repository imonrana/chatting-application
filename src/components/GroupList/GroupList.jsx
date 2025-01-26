import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getDatabase, onValue, push, ref, set } from 'firebase/database';

import SmallButton from '../SmallButton/SmallButton';
import CreateGroupModal from '../Modals/CreateGroupModal/CreateGroupModal';
import NoDataWarning from '../NoDataWarning/NoDataWarning';

import groupImgOne from "../../assets/group_img_one.png"
import { CiSearch } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Bounce, toast, ToastContainer } from 'react-toastify';


const GroupList = () => {

    const db = getDatabase();
    const data = useSelector((state)=> state.userDetails.userInfo);
    const [showModal, setShowModal] = useState(false);
    const [groupList, setGroupList] = useState([]);
    const [joinReq, setJoinReq] = useState([]);
    const [acceptRequest, setAcceptRequest] = useState([]);


// show modal 
    const handelModal = (onshowModal)=>{
        setShowModal(onshowModal)
    }


    // show groupList data
    useEffect(()=>{
        const groupListRef = ref(db, "groupList/");
        onValue(groupListRef, (snapshot)=>{
            let array = [];
            snapshot.forEach((item)=>{
                if(data.uid !== item.val().adminId){
                    array.push({...item.val(), groupId: item.key})
                }
            })
            setGroupList(array)
        })

    },[data.uid])



// handel group member join request
function handelGroupJoin(item) {
    set(push(ref(db, "groupJoinRequest/")),{
        groupId: item.groupId,
        groupAdminId : item.adminId,
        groupAdminName: item.adminName,
        groupName:item.groupName,
        requestSenderName: data.displayName,
        requestSenderId: data.uid,
    })
}


// handel red group Join Request for dynamic sent button
useEffect(()=>{
    const joinReqRef = ref(db, "groupJoinRequest/");
    onValue(joinReqRef, (snapshot)=>{
        let array = [];
        snapshot.forEach((item)=>{
            if(item.val().requestSenderId === data.uid){
                array.push({...item.val(), joinId:item.key})
            }
        })
        setJoinReq(array)
    }) 
},[data.uid]);



// handel red accept join request data for dymanic joined button
useEffect(()=>{
    const reqRef = ref(db, "groupList/");
    onValue(reqRef, (snapshot)=>{
        let array = []
        snapshot.forEach((item)=>{
        const memberList = item.val()?.memberList;
        for(const key in memberList){
        if (memberList.hasOwnProperty(key)) {
            array.push(memberList[key])
        }
        }
        })
        setAcceptRequest(array)
    })
}, [data.uid])



  return (
    <section>
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

        {/* search bar start*/}
        <fieldset className='relative'>
        <input className='w-[427px] px-14 drop-shadow-[0px_4Px_4px_rgba(0,0,0,0.25)] rounded-[20px] py-3  outline-none placeholder:font-poppins placeholder:text-base placeholder:font-medium placeholder:text-[rgba(61,61,61,0.35)]'
        type="search" name="search" id="search" placeholder='Search' />
        <CiSearch className='text-xl text-black absolute top-1/2 left-[23px] -translate-y-1/2' />
        <BsThreeDotsVertical  className='text-xl text-primary absolute top-1/2 right-[23px] -translate-y-1/2'  />
        </fieldset>
        {/* search bar end */}

        {/* group list start */}
      <div className='w-[420px]   mt-2 shadow-box pb-5 rounded-3xl'>

        {/* header part start */}
      <header className='flex justify-between pt-4 mb-4 px-4'>
            <h2 className='font-poppins font-semibold text-xl text-black'>Groups List</h2>
            <SmallButton onClick={()=>setShowModal(!showModal)} className ="px-[8px] py-1 !text-base hover:bg-transparent border border-primary hover:text-black transition duration-300" >
                Create Group
            </SmallButton>
        </header>
        {/* header part end */}

        {/* group item start */}
        <article className=' h-40 overflow-y-scroll' >
            {
                groupList.length>0 ?
                groupList.map((item, index)=>(
                    <div key={index} className=' flex justify-between items-center  px-5 pb-[13px] mb-4 relative before:content-[""] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-[rgba(0,0,0,0.25)] before:h-[1px] before:w-[370px]'>
                    <div className='flex '>
                    <figure className='w-[50px] h-[50px] overflow-hidden '>
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
                       joinReq.find((req)=> req.requestSenderId === data.uid && req.groupId === item.groupId)
                        ?
                        <SmallButton className ="px-[22px] py-1" >Sent</SmallButton>
                        :
                        acceptRequest.find((req)=> req.groupMemberId === item.adminId + data.uid && req.groupId === item.groupId)
                        ?
                        <SmallButton className ="px-[22px] py-1" >Joined</SmallButton>
                        :
                        <SmallButton onClick={()=>handelGroupJoin(item)}  className ="px-[22px] py-1" >
                            <lord-icon
                                      src="https://cdn.lordicon.com/sbnjyzil.json"
                                      trigger="hover"
                                      delay="1500"
                                      stroke="bold"
                                      colors="primary:#ffffff,secondary:#ffffff "
                                      style={{width:"30px", height:"30px"}}
                                      >
                                  </lord-icon>
                        </SmallButton>
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
 <CreateGroupModal onShowModal = {handelModal} />
    }
    </section>
  )
}

export default GroupList
