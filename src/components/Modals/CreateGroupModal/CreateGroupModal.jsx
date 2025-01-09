import React, { useState } from 'react'
import SmallButton from '../../SmallButton/SmallButton'
import { getDatabase, push, ref, set } from 'firebase/database'
import { useSelector } from 'react-redux';


const CreateGroupModal = ({OnSendData}) => {
    const db = getDatabase();
    const data = useSelector((state)=> state.userDetails.userInfo);


    const [groupName, setGroupName] = useState("")
    const [tagLine, setTagLine] = useState("")

    const handelData = ()=>{
        OnSendData(false);
    }

const handelCreateGroup = ()=>{
    set(push(ref(db, "groupList/")),{
        groupName: groupName,
        tagLine: tagLine,
        adminId: data.uid,
    }).then(()=>{
        alert("Group Create Success")
    })
}
    
  return (
    <div className='absolute top-0 left-0 w-dvw h-dvh flex justify-center items-center'>
        <div className=' w-[500px] bg-gray-400  py-3 space-y-2 '>
            <div  >
            <label  htmlFor="CreateGroup">Group Name:</label>
            <input onChange={(e)=> setGroupName(e.target.value)}  className=' py-2' type="text" placeholder='Enter Group Name' />
            </div>
            <div >
            <label  htmlFor="CreateGroup">Tag Line:</label>
            <input onChange={(e)=> setTagLine(e.target.value)} className=' py-2 ' type="text" placeholder='Enter Tag Line' />
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