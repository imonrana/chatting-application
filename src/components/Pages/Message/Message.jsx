import React from 'react'
import ChatBox from '../../ChatBox/ChatBox'
import Friends from '../../Friends/Friends'
import MyGroup from '../../MyGroup/MyGroup'
import { CiSearch } from 'react-icons/ci'
import { BsThreeDotsVertical } from 'react-icons/bs'

const Message = () => {
  return (
    <>
    <section className='flex gap-x-7'>
    <div className='space-y-4'>
         {/* searchbar part start*/}
        <fieldset className='relative'>
        <input className='w-[347px] pl-[78px] drop-shadow-[0px_4Px_4px_rgba(0,0,0,0.25)] rounded-[20px] py-[18px]  outline-none placeholder:font-poppins placeholder:text-base placeholder:font-medium placeholder:text-[rgba(61,61,61,0.35)] '
        type="search" name="search" id="search" placeholder='Search' />
        <CiSearch className='text-[19px] text-black absolute top-1/2 left-[23px] -translate-y-1/2' />
        <BsThreeDotsVertical  className='text-[20px] text-primary absolute top-1/2 right-[23px] -translate-y-1/2'  />
        </fieldset>
        {/* searchbar part end */}

        <div className='-ml-2.5'><MyGroup active = 'message'/></div>
        <div><Friends active = "message"/></div>
      </div>

      <div>
        <ChatBox/>
      </div>
    </section>
    </>
  )
}

export default Message