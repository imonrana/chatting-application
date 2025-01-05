import React from 'react'

const SmallButton = ({ onClick, className, children}) => {
    return (
      <button onClick={onClick}  className={` bg-primary rounded-md font-poppins font-semibold text-xl text-white  ${className} `}>
          {children}
      </button>
    )
  }
export default SmallButton