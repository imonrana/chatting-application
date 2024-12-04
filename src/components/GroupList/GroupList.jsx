import React from 'react'

import { CiSearch } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import SmallButton from '../SmallButton/SmallButton';


import groupImgOne from "../../assets/group_img_one.png"
import groupImgTwo from "../../assets/group_img_two.png"
import groupImgThree from "../../assets/group_img_three.png"

const GroupList = () => {
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
      <header className='flex justify-between pt-[20px] mb-[17px] px-5'>
            <h2 className='font-poppins font-semibold text-xl text-black'>Groups List</h2>
            <BsThreeDotsVertical className='text-[20px] text-primary  '/>
        </header>
        {/* group item start */}
        <article >
            <div className='flex justify-between items-center  px-5 pb-[13px] mb-4 relative before:content-[""] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-[rgba(0,0,0,0.25)] before:h-[1px] before:w-[370px]'>
                <div className='flex '>
                <figure className='w-[70px] h-[70px] overflow-hidden '>
                    <img src={groupImgOne} alt="groupImagetwo" />
                </figure>
                <div className='ml-3'> 
                <h4 className='font-poppins font-semibold text-lg text-black'>
                Friends Reunion
                </h4>
                <p className='font-poppins font-medium text-sm text-[rgba(77,77,77,0.75)]'>Hi Guys, Wassup!</p>
                </div>
                </div>
                <SmallButton  className ="px-[22px] py-1" >Join</SmallButton>

            </div>

            <div className='flex justify-between items-center  px-5 pb-[13px] mb-4 relative before:content-[""] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:bg-[rgba(0,0,0,0.25)] before:h-[1px] before:w-[370px]'>
                <div className='flex'>
                <figure className='w-[70px] h-[70px] overflow-hidden '>
                    <img src={groupImgTwo} alt="groupImageOne" />
                </figure>
                <div className='ml-3'> 
                <h4 className='font-poppins font-semibold text-lg text-black'>
                Friends Forever
                </h4>
                <p className='font-poppins font-medium text-sm text-[rgba(77,77,77,0.75)]'>Good to see you.</p>
                </div>
                </div>
                <SmallButton className ="px-[22px] py-1" >Join</SmallButton>

            </div>

            <div className='flex justify-between items-center  px-5 '>
                <div className="flex">
                <figure className='w-[70px] h-[70px] overflow-hidden '>
                    <img src={groupImgThree} alt="groupImagethree" />
                </figure>
                <div className='ml-3'> 
                <h4 className='font-poppins font-semibold text-lg text-black'>
                Crazy Cousins
                </h4>
                <p className='font-poppins font-medium text-sm text-[rgba(77,77,77,0.75)]'>What plans today?</p>
                </div>
                </div>
                <SmallButton className ="px-[22px] py-1" >Join</SmallButton>

            </div>
            
        </article>
      </div>



        {/* group list end */}

    </section>
  )
}

export default GroupList
