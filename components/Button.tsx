'use client'

import React, { ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode,
    style: string,
    type? : string,
    onClick: (e?:any)=> void
}

const Button: React.FC<ButtonProps> = ({children, style, type, onClick}) => {
  return (
    <button className={`py-3 px-2 rounded-md w-full text-white my-2 ${style}`} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button