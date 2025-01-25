import React from 'react'

const Button = ({ onClick, className, children}) => {
  return (
    <button onClick={onClick}  className={` bg-primary py-5 ${className} cursor-pointer rounded font-bold hover:bg-red-500 border  transition-all duration-300 `}>
        {children}
    </button>
  )
}

export default Button