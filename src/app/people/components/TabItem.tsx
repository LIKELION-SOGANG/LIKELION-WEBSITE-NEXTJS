import React from 'react'
import Image from 'next/image'

export default function TabItem({ data }) {
  const adult_lion = data[0].mockAdultLion
  const baby_lion = data[0].mockBabyLion
  const generation = data[0].mockGeneration

  return (
    <div>
      <div className="flex items-center text-center text-black mx-8 my-0 mt-16">
        <div className="flex-grow h-[0.1rem] tablet:h-[0.2rem] bg-black"></div>
        <div className="font-pretendard px-6 py-0 font-semibold text-[1.6rem] tablet:text-[2.4rem]">
          운영진
        </div>
        <div className="flex-grow h-[0.1rem] tablet:h-[0.2rem] bg-black"></div>
      </div>
      <div className="overflow-x-auto w-full mt-[3rem] tablet:mt-[9.5rem] tablet:mb-[16rem] scrollbar-hide">
        <div className="flex justify-start items-center text-black whitespace-nowrap mx-[4rem]">
          {adult_lion?.map(member => (
            <div
              key={member.id}
              className="flex flex-col justify-center items-center w-[16vw] min-w-[12rem] tablet:min-w-[18rem] h-auto mx-4">
              <Image
                src={member.emoji}
                width={160}
                height={160}
                className="block object-contain w-[10rem] h-[10rem] tablet:w-[16rem] tablet:h-[16rem] mb-8"
                alt={member.name}
              />
              <div className="font-pretendard text-[1.6rem] tablet:text-[2rem] font-bold mb-0">
                {member.name}
              </div>
              <div className="font-pretendard text-[1.2rem] tablet:text-[1.4rem] font-medium">
                {generation} / {member.part}
              </div>
              {member.is_president ? (
                <div className="mt-[0.4rem] font-semibold">대표</div>
              ) : member.is_vice_president ? (
                <div className="mt-[0.4rem] font-semibold">부대표</div>
              ) : (
                <div className="mt-[2.0rem] font-semibold"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center text-center text-black mx-8 my-0 mt-16">
        <div className="flex-grow h-[0.1rem] tablet:h-[0.2rem] bg-black"></div>
        <div className="font-pretendard px-6 py-0 text-[1.6rem] tablet:text-[2.4rem] font-semibold">
          아기사자
        </div>
        <div className="flex-grow h-[0.1rem] tablet:h-[0.2rem] bg-black"></div>
      </div>

      <div className="flex flex-wrap justify-center items-start gap-12 px-8 py-16 pb-[18rem] max-w-[90%] mx-auto my-0 text-black pb-[18rem]">
        {baby_lion?.length > 0 ? (
          baby_lion.map(member => (
            <div
              key={member.id}
              className="font-pretendard text-[1.4rem] text-center tablet:text-[2rem] font-medium min-w-[4rem] tablet:min-w-[5rem]">
              {member.name}
            </div>
          ))
        ) : (
          <div className="font-pp text-[2.4rem] tablet:text-[3.5rem] italic">
            You Are The Next !
          </div>
        )}
      </div>
    </div>
  )
}
