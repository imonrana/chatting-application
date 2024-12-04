import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import profileOne from "../../assets/profile-one.png"
import profileTwo from "../../assets/profile-two.png"
import profileThree from "../../assets/profile-three.png"
import profileFour from "../../assets/profile-four.png"
import SmallButton from '../SmallButton/SmallButton';


const FriendRequest = () => {
  return (
    <section>
    <div className='w-[420px] mt-[43px] pt-5 pb-[70px] shadow-box rounded-b-3xl'>
  <header className='flex justify-between  mb-[17px] px-5'>
        <h2 className='font-poppins font-semibold text-xl text-black'>Friend  Request</h2>
        <BsThreeDotsVertical className='text-[20px] text-primary  '/>
    </header>

    <article>
    <div className='flex justify-between px-5 pb-[13px] mb-4 relative before:content-[""] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-[rgba(0,0,0,0.25)] before:h-[1px] before:w-[277px]'>
           <div className='flex'>
           <figure className='w-[50px] h-[50px] overflow-hidden '>
                <img src={profileOne} alt="profolio-one" />
            </figure>
            <div className='ml-[10px]'> 
            <h4 className='font-poppins font-semibold text-sm text-black '>
            Raghav
            </h4>
            <p className='font-poppins font-medium text-xs text-[rgba(77,77,77,0.75)]'>Dinner?</p>
            </div>
           </div>
           <SmallButton className= "px-2 py-0" >Accept</SmallButton>
        </div>

        <div className='flex justify-between px-5 pb-[13px] mb-4 relative before:content-[""] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-[rgba(0,0,0,0.25)] before:h-[1px] before:w-[277px]'>
            <div className="flex">
            <figure className='w-[50px] h-[50px] overflow-hidden '>
                <img src={profileTwo} alt="protfolio-tow" />
            </figure>
            <div className='ml-[10px]'> 
            <h4 className='font-poppins font-semibold text-sm text-black '>
            Swathi
            </h4>
            <p className='font-poppins font-medium text-xs text-[rgba(77,77,77,0.75)]'>Sure!</p>
            </div>
            </div>
            <SmallButton className= "px-2 py-0" >Accept</SmallButton>
        </div>

        <div className='flex justify-between px-5 pb-[13px] mb-4 relative before:content-[""] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-[rgba(0,0,0,0.25)] before:h-[1px] before:w-[277px]'>
            <div className="flex">
            <figure className='w-[50px] h-[50px] overflow-hidden '>
                <img src={profileThree} alt="profolio-three" />
            </figure>
            <div className='ml-[10px]'> 
            <h4 className='font-poppins font-semibold text-sm text-black '>
            Kiran
            </h4>
            <p className='font-poppins font-medium text-xs text-[rgba(77,77,77,0.75)]'>Hi.....</p>
            </div>
            </div>
            <SmallButton className= "px-2 py-0" >Accept</SmallButton>
        </div>

        <div className='flex justify-between px-5 pb-[13px] mb-4 '>
            <div className='flex'>
            <figure className='w-[50px] h-[50px] overflow-hidden '>
                <img src={profileFour} alt="protfolio-four" />
            </figure>
            <div className='ml-[10px]'> 
            <h4 className='font-poppins font-semibold text-sm text-black '>
            Tejeshwini C
            </h4>
            <p className='font-poppins font-medium text-xs text-[rgba(77,77,77,0.75)]'>I will call him today.</p>
            </div>
            </div>
            <SmallButton className= "px-2 py-0" >Accept</SmallButton>
        </div>


    </article>
    </div>
</section>
  )
}

export default FriendRequest