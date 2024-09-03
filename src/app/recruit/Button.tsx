import React from 'react'

interface ButtonProps {
  title: String
  defaultColor: string
}

const Button = ({ title, defaultColor }: ButtonProps) => {
  return (
    <div
      className={`flex justify-center items-center h-[5rem] rounded-[1rem] bg-${defaultColor} text-white shrink-0`}>
      <div className="w-[30.5rem] h-[1.9rem]  text-center text-[1.6rem] font-bold">
        {title}
      </div>
    </div>
  )
}

export default Button
