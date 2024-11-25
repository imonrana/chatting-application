import React from 'react'

const Button = ({ onClick, className, children}) => {
  return (
    <button onClick={onClick}  className={` bg-primary py-5 ${className} cursor-pointer `}>
        {children}
    </button>
  )
}

export default Button