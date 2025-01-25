import React from 'react'
import { BsFillTriangleFill } from "react-icons/bs";
import msgImg from "../../assets/profile-one.png"
import { useSelector } from 'react-redux';
import moment from 'moment';


const MsgBox = ({message}) => {

  const data = useSelector((item)=>item.userDetails.userInfo);




  return (
    <div>
      {
        message.map((item, index)=>(
          data.uid === item.msgSenderId ?

          <div key={index} className='mx-[54px] my-14 text-right'>
          {/* text-msg */}
          <div>
          <div className='bg-[#F1F1F1] px-5 min-w-[131px] max-w-[328px] py-[13px] rounded-[10px]  inline-block relative'>
              <p className='font-poppins font-medium text-base text-center text-[#000000]'>{ item?.msg || "Hey There !"}</p>
              <BsFillTriangleFill className='absolute bottom-0 -right-[6px] text-[#f1f1f1] text-[13px]' />
          </div>
          <p className='font-poppins font-medium text-xs text-[rgba(0,0,0,0.25)] pt-1'>{moment(item?.date).fromNow()}</p>
          </div>
          
  
          {/* <div className='pt-7'>
          <div className='bg-[#F1F1F1] px-5 min-w-[131px] max-w-[328px] py-[13px] rounded-[10px]  inline-block relative'>
              <p className='font-poppins font-medium text-b ase text-center text-[#000000]'>How are you doing?</p>
              <BsFillTriangleFill className='absolute bottom-0 -right-[6px] text-[#f1f1f1] text-[13px]' />
          </div>
          <p className='font-poppins font-medium text-xs text-[rgba(0,0,0,0.25)] pt-1'>Today, 2:01pm</p>
          </div> */}
  
          {/* photo msg */}
          {/* <div className=' flex justify-end'>
          <div className='w-[250px] h-[350px] bg-[#F1F1F1] px-2 py-2 rounded-lg mt-7'>
              <img className='rounded-lg w-full h-full'
              src={msgImg} alt="msgImg"/>
          </div>
          </div> */}
      </div>
      :
      <div key={index} className='mx-[54px] mt-14'>
                 {/* text-msg */}
                 <div>
                 <div className='bg-[#F1F1F1] px-5 min-w-[131px] max-w-[328px] py-[13px] rounded-[10px]  inline-block relative'>
                     <p className='font-poppins font-medium text-base text-center text-[#000000]'> {item?.msg || "Hey There !" }</p>
                     <BsFillTriangleFill className='absolute bottom-0 -left-[7px] text-[#f1f1f1] text-[13px]' />
                 </div>
                 <p className='font-poppins font-medium text-xs text-[rgba(0,0,0,0.25)] pt-1'>{moment(item?.date).fromNow()}</p>
                 </div>
         
                 {/* <div className='pt-7'>
                 <div className='bg-[#F1F1F1] px-5 min-w-[131px] max-w-[328px] py-[13px] rounded-[10px]  inline-block relative'>
                     <p className='font-poppins font-medium text-base text-center text-[#000000]'>How are you doing?</p>
                     <BsFillTriangleFill className='absolute bottom-0 -left-[7px] text-[#f1f1f1] text-[13px]' />
                 </div>
                 <p className='font-poppins font-medium text-xs text-[rgba(0,0,0,0.25)] pt-1'>Today, 2:01pm</p>
                 </div> */}
         
                 {/* photo msg */}
         
                 {/* <div className='w-[250px] h-[350px] bg-[#F1F1F1] px-2 py-2 rounded-lg mt-7 '>
                     <img className='rounded-lg w-full h-full'
                     src={msgImg} alt="msgImg"/>
                 </div> */}
             </div>
        ))
      }
    </div>
    
  )
}

export default MsgBox