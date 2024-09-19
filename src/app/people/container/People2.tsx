import React from 'react'
import TabItem from '../components/TabItem'

export default function SecondSection() {
  const selectedTab = 7
  const mockMembers = [
    {
      mockAdultLion: [
        {
          id: 1,
          name: '정인영',
          emoji: '/images/people/MockImages/정인영.svg',
          part: 'Front-end',
          is_president: true,
          is_vice_president: false
        },
        {
          id: 2,
          name: '임정연',
          emoji: '/images/people/MockImages/임정연.svg',
          part: 'Back-end',
          is_president: false,
          is_vice_president: true
        },
        {
          id: 3,
          name: '김유이',
          emoji: '/images/people/MockImages/김유이.svg',
          part: 'Back-end',
          is_president: false,
          is_vice_president: false
        },
        {
          id: 4,
          name: '오은택',
          emoji: '/images/people/MockImages/오은택.svg',
          part: 'Back-end',
          is_president: false,
          is_vice_president: false
        },
        {
          id: 5,
          name: '이선명',
          emoji: '/images/people/MockImages/이선명.svg',
          part: 'Front-end',
          is_president: false,
          is_vice_president: false
        },
        {
          id: 6,
          name: '장세환',
          emoji: '/images/people/MockImages/장세환.svg',
          part: 'Front-end',
          is_president: false,
          is_vice_president: false
        },
        {
          id: 7,
          name: '정고은',
          emoji: '/images/people/MockImages/정고은.svg',
          part: 'Front-end',
          is_president: false,
          is_vice_president: false
        }
      ],
      mockBabyLion: [
        { id: 1, name: '김경우' },
        { id: 2, name: '김별' },
        { id: 3, name: '김서아' },
        { id: 4, name: '유민우' },
        { id: 5, name: '최보현' },
        { id: 6, name: '김경우' },
        { id: 7, name: '김별' },
        { id: 8, name: '김서아' },
        { id: 9, name: '유민우' },
        { id: 10, name: '최보현' },
        { id: 11, name: '김경우' },
        { id: 12, name: '김별' },
        { id: 13, name: '김서아' },
        { id: 14, name: '유민우' },
        { id: 15, name: '최보현' },
        { id: 16, name: '김경우' },
        { id: 17, name: '김별' },
        { id: 18, name: '김서아' },
        { id: 19, name: '유민우' },
        { id: 20, name: '최보현' }
      ],
      mockGeneration: '11th'
    }
  ]

  const mockGenerations = [
    {
      id: 1,
      number: 6,
      suffix: 'th'
    },
    {
      id: 2,
      number: 7,
      suffix: 'th'
    },
    {
      id: 3,
      number: 8,
      suffix: 'th'
    },
    {
      id: 4,
      number: 9,
      suffix: 'th'
    },
    {
      id: 5,
      number: 10,
      suffix: 'th'
    },
    {
      id: 6,
      number: 11,
      suffix: 'th'
    },
    {
      id: 7,
      number: 12,
      suffix: 'th'
    }
  ]

  const leftGenerations = mockGenerations.filter(gen => gen.id < selectedTab)
  const rightGenerations = mockGenerations.filter(gen => gen.id > selectedTab)
  const selectedGeneration = mockGenerations.find(gen => gen.id === selectedTab)

  return (
    <section>
      <div className="relative w-full bg-white">
        <div className="flex justify-center items-end overflow-hidden">
          <div className="flex justify-end w-[33%]">
            {leftGenerations.map(gen => (
              <div
                key={gen.id}
                className="font-pp p-[1rem] cursor-pointer hover:text-black text-[3.2rem] tablet:text-[3.6rem] text-[#B7B7B7] mb-[0rem] italic">
                {gen.number}
                {gen.suffix}
              </div>
            ))}
          </div>
          <div
            key={selectedGeneration?.id}
            className="font-pp p-[1rem] cursor-pointer text-[4.8rem] tablet:text-[9.6rem] text-black mb-[-0.8rem] tablet:mb-[-3rem] italic">
            {selectedGeneration?.number}
            {selectedGeneration?.suffix}
          </div>
          <div className="flex justify-start w-[33%]">
            {rightGenerations.map(gen => (
              <div
                key={gen.id}
                className="font-pp p-[1rem] cursor-pointer hover:text-black text-[3.2rem] tablet:text-[3.6rem] text-[#B7B7B7] mb-[0rem] italic">
                {gen.number}
                {gen.suffix}
              </div>
            ))}
          </div>
        </div>
        <TabItem data={mockMembers} />
      </div>
    </section>
  )
}
