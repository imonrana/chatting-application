import React from 'react'

const Button = ({className, children}) => {
  return (
    <button className={` bg-primary py-5 ${className} `}>
        <a href="#">{children}</a>
    </button>
  )
}

export default Button