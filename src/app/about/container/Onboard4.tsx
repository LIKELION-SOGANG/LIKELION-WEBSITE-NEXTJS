import Image from 'next/image'
import React from 'react'

const companies = ['samsung', 'coupang', 'kaist', 'lg', 'naver', 'shinsegae']

export default function Onboard4() {
  return (
    <div className="w-auto h-screen flex flex-col items-center justify-center bg-white">
      <div className="font-pp cursor-pointer text-6xl font-normal">
        From Like<span className="italic">lion</span> So
        <span className="italic">gangs</span>
      </div>
      <div className="text-3xl mt-10">
        멋쟁이사자처럼 서강대학교 알럼나이들의 Possibility to Reality
      </div>
      <div className="overflow-hidden">
        <div
          className={`w-max flex mt-[15rem] flex justify-start items-center gap-[8rem] overflow-hidden`}>
          {companies.map((el, i) => (
            <img
              className="w-[16rem]"
              key={i}
              src={`icon/logo/company/${el}.png`}
              alt="possibility"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
