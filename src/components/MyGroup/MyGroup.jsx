import React, { useEffect, useState } from 'react'
import Button from '../Button/Button';
import profileOne from "../../assets/profile-one.png"
import { getDatabase, onValue,  ref, remove, update } from 'firebase/database';
import { useSelector } from 'react-redux';
import NoDataWarning from '../NoDataWarning/NoDataWarning';
import SmallButton from '../SmallButton/SmallButton';
import { Bounce, toast, ToastContainer } from 'react-toastify';



const MyGroup = (props) => {
    const {active} = props
    const db = getDatabase();
    const data = useSelector((state)=> state.userDetails.userInfo);
    const [myGroupList, setMyGroupList] = useState([]);
    const [showJoin, setShowJoin] = useState(false)
    const [joinRequest, setJoinRequest]=useState([])

    // Red data for my group
       useEffect(()=>{
           const groupRef = ref(db, "groupList/");
           
           onValue(groupRef,(snapshot)=>{
               const arr = [];
               snapshot.forEach((item)=>{
          
                if(item.val().adminId.includes(data.uid) || (item.val().memberList && Object.keys(item.val().memberList).includes(data.uid))){
                    arr.push({...item.val(), myGroupId:item.key});
                }
                 
               })
               setMyGroupList(arr);
           })
       },[]);

// read data for join request

useEffect(()=>{
    const joingroupRef = ref(db, "groupJoinRequest/");
    
    onValue(joingroupRef,(snapshot)=>{
        const arr = [];
        snapshot.forEach((item)=>{
         if(item.val().adminId == data.uid){
             arr.push({...item.val(), joingroupId:item.key});
         }
            
        })
        setJoinRequest(arr);
    })
},[]);

// handel group request approve

function handelApprove(item) {
    const combainedGroupId = item.adminId + item.requestSenderId;
    update(ref(db, "groupList/" + item.groupListId + "/" +  "memberList/" + item.requestSenderId),{
        memberId: combainedGroupId,
        memberName: item.requestSenderName,
        groupListId: item.groupListId,
    }).then(()=>{
            remove(ref(db, "groupJoinRequest/" + item.joingroupId));
        }).then(()=>{
            toast.success("Join Request Approved")
        })
}

  return (
   <section>
    <div className=' w-[330px] ml-6  pt-3 pb-5 shadow-box rounded-b-3xl'>
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
  <header className=' mb-2  px-3 '>
        <div className='flex justify-between'>
            <h2 className='font-poppins font-semibold text-xl text-black'> { active === "message" &&  (showJoin ? "Join Request" : "Groups List")  || (showJoin ? "Join Request" : "My Groups") }</h2>
            <Button onClick={()=>setShowJoin(!showJoin)}
            className='!py-2 px-2 text-white text-sm '>{showJoin ? "View my Group" : "View join request"}</Button>
        </div>
       
    </header>
    
    <article className={ `${active === "message" ? "h-36" : "h-56" } overflow-y-scroll`}>
        {
            showJoin ? 
            // view join request
            <div >
                {
                     joinRequest.map((item, index)=>(
                        <div key={index} className=' shadow-box py-2 px-4'>
                         <div key={item.joingroupId} className='flex justify-between px-5 pb-[13px] mb-4 relative before:content-[""] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-[rgba(0,0,0,0.25)] before:h-[1px] before:w-[277px]'>
                    <div className="flex">
                    <figure className='w-[50px] h-[50px] overflow-hidden '>
                        <img src={profileOne} alt="profileOne" />
                    </figure>
                    <div className='ml-[10px]'> 
                    <h4 className='font-poppins font-semibold text-sm text-black '>
                    {item.requestSenderName}
                    </h4>
                    <p className='font-poppins font-medium text-xs ]'> Want to join <span className='text-black text-base font-bold'>{item.groupName}</span></p>
                    </div>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-x-5'>
                <SmallButton onClick={()=>handelApprove(item)} className='!text-base py-2 px-4 self-center'>Approve</SmallButton>
                <SmallButton className='!text-base py-2 px-4 self-center'>Reject</SmallButton>
                </div>    
                </div>
                 ))
                }
            </div>
        :
        // my group
        <div>
        {
            myGroupList.length >0 ?

            myGroupList.map((item)=>(
                <div key={item.myGroupId} className='flex justify-between px-5 pb-[13px] mb-4 relative before:content-[""] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-[rgba(0,0,0,0.25)] before:h-[1px] before:w-[277px]'>
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
            :
            <NoDataWarning title={"You have 0 group"}/>
        }
        </div>
         }
    </article>

    {/* view join request part */}

    </div>
</section>
  )
}

export default MyGroup