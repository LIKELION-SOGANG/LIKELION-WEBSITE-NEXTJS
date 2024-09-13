import React from 'react'
import Image from 'next/image'

export default function TabContents({ data }) {
  // const { adult_lion, baby_lion, generation } = data[0]

  const adult_lion = data[0].mockAdultLion
  const baby_lion = data[0].mockBabyLion
  const generation = data[0].mockGeneration

  return (
    <div>
      <div className="flex items-center text-center text-black mx-8 my-0 mt-16">
        <div className="flex-grow Desktop:h-[0.2rem] mobile:h-[0.1rem] bg-black"></div>
        <div className="font-pretendard px-6 py-0 font-semibold Desktop:text-[2.4rem] mobile:text-[1.6rem]">
          운영진
        </div>
        <div className="flex-grow Desktop:h-[0.2rem] mobile:h-[0.1rem] bg-black"></div>
      </div>
      <div className="flex justify-center text-black mt-[9.5rem] mb-[18rem]">
        {adult_lion?.map(member => (
          <div
            key={member.id}
            className="flex flex-col justify-center items-center w-[16vw] h-auto">
            <Image
              // src={member.emoji}
              src="/images/people/people_mock.svg"
              width={200}
              height={200}
              className="block object-contain w-80 h-80 mb-8"
              alt={member.name}
            />
            <div className="font-pretendard Desktop:text-[2rem] mobile:text-[1.6rem] font-bold mb-0">
              {member.name}
            </div>
            <div className="font-pretendard Desktop:text-[1.4rem] mobile:text-[1.2rem] font-medium">
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
      <div className="flex items-center text-center text-black mx-8 my-0 mt-16">
        <div className="flex-grow Desktop:h-[0.2rem] mobile:h-[0.1rem] bg-black"></div>
        <div className="font-pretendard px-6 py-0 Desktop:text-[2.4rem] mobile:text-[1.6rem] font-semibold">
          아기사자
        </div>
        <div className="flex-grow Desktop:h-[0.2rem] mobile:h-[0.1rem] bg-black"></div>
      </div>
      <div className="flex flex-wrap justify-center items-start gap-12 px-8 py-16 pb-[18rem] max-w-[90%] mx-auto my-0 text-black pb-[18rem]">
        {baby_lion?.length > 0 ? (
          baby_lion.map(member => (
            <div
              key={member.id}
              className="font-pretendard Desktop:text-[2rem] mobile:text-[1.4rem] font-medium">
              {member.name}
            </div>
          ))
        ) : (
          <div className="font-pp Desktop:text-[3.5rem] mobile:text-[2.4rem] italic">
            You Are The Next !
          </div>
        )}
      </div>
    </div>
  )
}
