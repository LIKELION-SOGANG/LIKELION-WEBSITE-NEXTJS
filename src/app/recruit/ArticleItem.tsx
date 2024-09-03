import React from 'react'
import { AreaObj, ScheduleObj } from './MockData'

interface Items {
  items: ScheduleObj[] | AreaObj[]
  title: string
}

const ArticleItem = ({ items, title }: Items) => {
  return (
    <div className="flex flex-col justify-center items-center text-black">
      <div className="font-pp text-[3.2rem] italic">{title}</div>
      <div className="flex gap-[2.8rem] w-full max-w-[97rem]">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="flex-1 bg-grey p-[1.7rem] mt-[3.9rem] mb-[15rem] rounded-[1rem]">
              <div
                className={`${title === 'Schedule' ? 'font-semibold' : 'italic font-pp'} text-[1.6rem]`}>
                {item.name}
              </div>
              <div className="mt-[1.4rem] font-medium text-[1.2rem]">
                {'date' in item ? item.date : item.description}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ArticleItem
