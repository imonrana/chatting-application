import React from 'react'


import { BsThreeDotsVertical } from "react-icons/bs";
import profileOne from "../../assets/profile-one.png"
import profileTwo from "../../assets/profile-two.png"
import profileThree from "../../assets/profile-three.png"
import profileFour from "../../assets/profile-four.png"
import profileFive from "../../assets/profile-5.png"
import SmallButton from '../SmallButton/SmallButton';

const BlockedUser = () => {
  return (
    <section>
    <div className='w-[330px] ml-[16px] mt-[43px] pt-5  shadow-box rounded-b-3xl'>
  <header className='flex justify-between  mb-[17px] px-5'>
        <h2 className='font-poppins font-semibold text-xl text-black'>User List</h2>
        <BsThreeDotsVertical className='text-[20px] text-primary  '/>
    </header>

    <article>
    <div className='flex justify-between px-5 pb-[13px] mb-4 relative before:content-[""] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-[rgba(0,0,0,0.25)] before:h-[1px] before:w-[277px]'>
           
           <div className='flex '>
           <figure className='w-[50px] h-[50px] overflow-hidden '>
                <img src={profileOne} alt="profolio-one" />
            </figure>
           <div className='ml-[10px]'> 
            <h4 className='font-poppins font-semibold text-sm text-black '>
            Raghav
            </h4>
            <p className='font-poppins font-medium text-xs text-[rgba(77,77,77,0.75)]'>Today, 8:56pm</p>
            </div>
           </div>
           <div>
                <SmallButton className ="px-[22px] py-1">Unblock</SmallButton>
            </div>
        </div>

        <div className='flex justify-between px-5 pb-[13px] mb-4 relative before:content-[""] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-[rgba(0,0,0,0.25)] before:h-[1px] before:w-[277px]'>
            <div className='flex'>
            <figure className='w-[50px] h-[50px] overflow-hidden '>
                <img src={profileTwo} alt="profolio-Two" />
            </figure>
           
            <div className='ml-[10px]'> 
            <h4 className='font-poppins font-semibold text-sm text-black '>
            Swathi
            </h4>
            <p className='font-poppins font-medium text-xs text-[rgba(77,77,77,0.75)]'>Today, 2:31pm</p>
            </div>
            </div>
            <div>
                <SmallButton className ="px-[22px] py-1">Unblock</SmallButton>
            </div>
            
        </div>

        <div className='flex justify-between px-5 pb-[13px] mb-4 relative before:content-[""] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-[rgba(0,0,0,0.25)] before:h-[1px] before:w-[277px]'>
            <div className='flex'>
            <figure className='w-[50px] h-[50px] overflow-hidden '>
                <img src={profileThree} alt="profolio-Three" />
            </figure>
         
            <div className='ml-[10px]'> 
            <h4 className='font-poppins font-semibold text-sm text-black '>
            Kiran
            </h4>
            <p className='font-poppins font-medium text-xs text-[rgba(77,77,77,0.75)]'>Yesterday, 6:22pm</p>
            </div>
            </div>
            <div>
                <SmallButton className ="px-[22px] py-1">Unblock</SmallButton>
            </div>
            
        </div>

        <div className='flex justify-between px-5 pb-[13px] mb-4 relative before:content-[""] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-[rgba(0,0,0,0.25)] before:h-[1px] before:w-[277px]'>
            <div className='flex '>
            <figure className='w-[50px] h-[50px] overflow-hidden '>
                <img src={profileFour} alt="profolio-four" />
            </figure>
          
            <div className='ml-[10px]'> 
            <h4 className='font-poppins font-semibold text-sm text-black '>
            Tejeshwini C
            </h4>
            <p className='font-poppins font-medium text-xs text-[rgba(77,77,77,0.75)]'>Today, 12:22pm</p>
            </div>
            </div>
            <div>
                <SmallButton className ="px-[22px] py-1">Unblock</SmallButton>
            </div>
            
        </div>


        
        <div className='flex justify-between px-5 pb-[13px] mb-4 '>
            <div className='flex gap-x-[10px]  '>
            <figure className='w-[50px] h-[50px] overflow-hidden '>
                <img src={profileFive} alt="profolio-five" />
            </figure>
            <div> 
            <h4 className='font-poppins font-semibold text-sm text-black '>
            Marvin McKinney
            </h4>
            <p className='font-poppins font-medium text-xs text-[rgba(77,77,77,0.75)]'>Today, 8:56pm</p>
            </div>
            </div>

            <div>
                <SmallButton className ="px-[22px] py-1">Unblock</SmallButton>
            </div>
            
        </div>
        </article>
        </div>
</section>
  )
}

export default BlockedUser