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
        <div className="flex-grow h-0.5 bg-black"></div>
        <div className="font-pretendard px-6 py-0 text-3xl font-semibold">
          운영진
        </div>
        <div className="flex-grow h-0.5 bg-black"></div>
      </div>
      <div className="flex text-black">
        {adult_lion?.map(member => (
          <div
            key={member.id} // id가 없으므로, index를 key로 사용합니다.
            className="flex flex-col justify-center items-center w-[16vw] h-auto">
            <Image
              src={member.emoji}
              width={200}
              height={200}
              className="block object-contain w-80 h-80 mb-8"
              alt={member.name}
            />
            <div className="font-pretendard text-3xl font-bold mb-3">
              {member.name}
            </div>
            <div className="font-pretendard text-xl font-medium">
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
        <div className="flex-grow h-0.5 bg-black"></div>
        <div className="font-pretendard px-6 py-0 text-3xl font-semibold">
          아기사자
        </div>
        <div className="flex-grow h-0.5 bg-black"></div>
      </div>
      <div className="flex flex-wrap justify-center items-start gap-12 px-8 py-16 pb-160 max-w-[70%] mx-auto my-0 text-black">
        {baby_lion?.length > 0 ? (
          baby_lion.map(lion => (
            <div
              key={lion.id}
              className="font-pretendard text-3xl font-medium">
              {lion.name}
            </div>
          ))
        ) : (
          <div className="font-pp text-4xl italic">You Are The Next !</div>
        )}
      </div>
    </div>
  )
}
