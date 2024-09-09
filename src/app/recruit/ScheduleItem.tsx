import React from 'react'
import { AreaObj, ScheduleObj } from './MockData'

interface Items {
  items: ScheduleObj[]
}

const ScheduleItem = ({ items }: Items) => {
  return (
    <div className="flex flex-col justify-center items-center text-black mb-[12rem]  max-tablet:mb-[12.7rem]">
      <div className="font-pp text-[3.2rem] italic mb-[3.8rem]">Schedule</div>
      <div className="flex max-tablet:flex-col gap-[2.8rem] w-full max-w-[97rem]">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="flex-1 bg-grey p-[1.7rem] tablet:gap-[2rem] rounded-[1rem]">
              <div className="font-semibold text-[1.6rem]">{item.name}</div>
              <div className="mt-[1.4rem] font-medium text-[1.2rem]">
                {item.date}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ScheduleItem
