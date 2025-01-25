import React from 'react'

const SmallButton = ({ onClick, className, children}) => {
    return (
      <button onClick={onClick}  className={` ${className}  bg-primary hover:bg-red-500 rounded-md font-poppins font-semibold text-base text-white  `}>
          {children}
      </button>
    )
  }
export default SmallButton