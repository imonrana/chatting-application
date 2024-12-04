import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import profileOne from "../../assets/profile-one.png"
import profileTwo from "../../assets/profile-two.png"
import profileThree from "../../assets/profile-three.png"
import profileFour from "../../assets/profile-four.png"


const MyGroup = () => {
  return (
    <section>
    <div className='w-[330px] ml-[16px] mt-[43px] pt-5 pb-[70px] shadow-box rounded-b-3xl'>
  <header className='flex justify-between  mb-[17px] px-5'>
        <h2 className='font-poppins font-semibold text-xl text-black'>My Groups</h2>
        <BsThreeDotsVertical className='text-[20px] text-primary  '/>
    </header>

    <article>
    <div className='flex justify-between px-5 pb-[13px] mb-4 relative before:content-[""] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-[rgba(0,0,0,0.25)] before:h-[1px] before:w-[277px]'>
            <div className="flex">
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
            <div className='mt-2 '>
                <p className='font-poppins font-medium text-[10px] text-[rgba(0,0,0,0.5)]'>Today, 8:56pm</p>
            </div>
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
            <div className='mt-2 ml-[70px]'>
                <p className='font-poppins font-medium text-[10px] text-[rgba(0,0,0,0.5)]'>Today, 2:31pm</p>
            </div>
        </div>

        <div className='flex justify-between px-5 pb-[13px] mb-4 relative before:content-[""] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-[rgba(0,0,0,0.25)] before:h-[1px] before:w-[277px]'>
          <div className='flex'>
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
            <div className='mt-2 ml-[70px]'>
                <p className='font-poppins font-medium text-[10px] text-[rgba(0,0,0,0.5)]'>Yesterday, 6:22pm</p>
            </div>
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
            <div className='mt-2 justify-self-end'>
                <p className='font-poppins font-medium text-[10px] text-[rgba(0,0,0,0.5)]'>Today, 12:22pm</p>
            </div>
        </div>


    </article>
    </div>
</section>
  )
}

export default MyGroup