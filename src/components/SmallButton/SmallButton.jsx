import React from 'react'

const SmallButton = ({ onClick, className, children}) => {
    return (
      <button onClick={onClick}  className={` bg-primary  ${className} cursor-pointer   rounded-md font-poppins font-semibold text-xl text-white `}>
          {children}
      </button>
    )
  }
export default SmallButton