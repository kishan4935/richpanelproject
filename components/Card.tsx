

import React, { ReactNode } from 'react'

interface CardProps {
    children: ReactNode
}

const Card: React.FC<CardProps> = ({children}) => {
  return <div className="rounded-lg bg-white p-10 min-w-[420px]">{children}</div>;
}

export default Card