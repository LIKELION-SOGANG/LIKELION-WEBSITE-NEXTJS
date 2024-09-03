import React from 'react'

interface SmallInputProps {
  placeholder: string
}

const SmallInput = ({ placeholder }: SmallInputProps) => {
  return (
    <input
      className="border-[1px] border-[#B7B7B7] w-full h-[5rem] shrink-0 rounded-[1rem]  p-[1.6rem_1.4rem]"
      placeholder={placeholder}></input>
  )
}

export default SmallInput
