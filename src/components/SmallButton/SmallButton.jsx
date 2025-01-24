import React from 'react'

const SmallButton = ({ onClick, className, children}) => {
    return (
      <button onClick={onClick}  className={` ${className}  bg-primary rounded-md font-poppins font-semibold text-base text-white  `}>
          {children}
      </button>
    )
  }
export default SmallButton