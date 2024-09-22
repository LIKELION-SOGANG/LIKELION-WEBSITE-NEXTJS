import React from 'react'
import CloseXWhite from '../../../../public/icon/button/closeX-white.svg'
import { Pp } from '@/utils/Font'

interface PcOnlyProps {
  setPcOnly: React.Dispatch<React.SetStateAction<boolean>>
}

const PcOnly = ({ setPcOnly }: PcOnlyProps) => {
  return (
    <div className="w-screen h-screen bg-black fixed py-[5rem] px-[3rem] flex flex-col justify-between">
      <div className="flex justify-between ">
        <div className="font-pp text-[2rem]">
          Like<span className="italic">lion</span> So
          <span className="italic">gang</span>
        </div>
        <button
          onClick={() =>
            setPcOnly(prev => {
              return !prev
            })
          }>
          <CloseXWhite />
        </button>
      </div>
      <div className="whitespace-pre-line text-[2.4rem] font-medium font-pretendard">
        {'지원서 작성은\nPC에서만 가능합니다.'}
      </div>
      <div className="font-pp text-[2.4rem] font-extralight whitespace-pre-line flex flex-col items-end">
        <div className="mr-[2.7rem]">{'Possibility\n'}</div>
        <div className="flex">
          <p className="text-[1.4rem] font-Pp italic mr-[0.3rem]">to</p>
          <span>Reality</span>
        </div>
      </div>
    </div>
  )
}

export default PcOnly
