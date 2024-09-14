import React from 'react'

interface LargeInputProps {
  item: { prompt: string; limit: number }
  questionNumber: number
}

const LargeInput = ({ item, questionNumber }: LargeInputProps) => {
  return (
    <div className="relative">
      <div className="text-[1.6rem] font-medium mb-[2rem]">
        {questionNumber}. {item.prompt}
      </div>
      <textarea
        maxLength={item.limit}
        style={{ resize: 'none' }}
        className="overflow-hidden border-[1px] border-[#b7b7b7] w-full h-[15rem] rounded-[1rem] p-[1.5rem]"
      />
      <div className="absolute right-[1.3rem] bottom-[1.1rem] text-[1.2rem] font-medium">
        0 / 1000자
      </div>
    </div>
  )
}

export default LargeInput
