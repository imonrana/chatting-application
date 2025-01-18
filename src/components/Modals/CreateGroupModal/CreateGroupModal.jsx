import React, { useState } from 'react'
import SmallButton from '../../SmallButton/SmallButton'
import { getDatabase, push, ref, set } from 'firebase/database'
import { useSelector } from 'react-redux';
import { Bounce, toast, ToastContainer } from 'react-toastify';


const CreateGroupModal = ({OnSendData}) => {
    const db = getDatabase();
    const data = useSelector((state)=> state.userDetails.userInfo);

    const [groupName, setGroupName] = useState("");
    const [tagLine, setTagLine] = useState("");
    const [groupNameErro, setGroupNameErro]=useState("");
    const [tagNameErro, setTagNameErro]=useState("");
   

    const handelData = ()=>{
        OnSendData(false);
    }

    function handelGroupName(e) {
       setGroupName(e.target.value)
       setGroupNameErro("")
    }

    function handelTagName(e) {
        setTagLine(e.target.value)
        setTagNameErro("")
     }


const handelCreateGroup = ()=>{
    if (groupName && tagLine) {
        set(push(ref(db, "groupList/")),{
            groupName: groupName,
            tagLine: tagLine,
            adminId: data.uid,
        }).then(()=>{
            toast('Group Create Successfully')
            setGroupName("");
            setTagLine("");
        })
    }
    else{
        if(!groupName){
            setGroupNameErro("please input group name")
        }else if (!tagLine) {
            setTagNameErro("please input group name")
        }

    }
}

  return (
    <div className='absolute top-0 left-0 w-dvw h-dvh flex justify-center items-center z-10'>
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
        <div className='  w-[500px] bg-gradient-to-r from-indigo-500 to-purple-500  rounded-lg  py-5 space-y-5 '>
            
            <div className='px-5 relative'>
            <label className='block text-white text-base font-bold pb-1'  htmlFor="CreateGroup">Group Name:</label>
            <input className='py-2 w-[270px] px-2'
            value={groupName}
            onChange={handelGroupName} type="text" placeholder='Enter Group Name' />
            <p className='text-red-500 font-poppins text-base absolute  bottom-[-24px] left-[22px]'>{groupNameErro}</p>
            </div>

            <div className='px-5 relative' >
            <label className='block text-white text-base font-bold py-1'  htmlFor="CreateGroup">Tag Line:</label>
            <input  className='py-2 px-2 w-[270px]'
            value={tagLine}
             onChange={handelTagName} type="text" placeholder='Enter Tag Line' />
             <p className='text-red-500 font-poppins text-base absolute  bottom-[-24px] left-[22px]'>{tagNameErro}</p>
            </div>
            
            <div className='space-x-2 mx-auto w-fit py-2'>
            <SmallButton onClick={handelCreateGroup}  className="py-1 px-2 font-poppins text-base">Create</SmallButton>
            <SmallButton onClick={handelData}  className="py-1 px-2 font-poppins text-base">Go Back</SmallButton>
            </div>
            
        </div>
    </div>
  )
}

export default CreateGroupModal