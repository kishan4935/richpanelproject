
import { title } from 'process'
import React from 'react'

interface InputProps {
    title: string,
    placeholder?: string,
    type: string,
    value?: any,
    onChange?: (e:any)=> void,
}

const Input: React.FC<InputProps> = ({title, placeholder, type, value, onChange}) => {
  return (
    <div className={`flex my-4 ${type=='checkbox' ?' flex-row-reverse gap-2 ' : 'flex-col'}`}>
      <label>{title}</label>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        className="border-[#e8e8e8] border-[1px] px-4 py-2 rounded-md"
      />
    </div>
  );
}

export default Input