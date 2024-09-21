import React from 'react'
import { FAQObj } from '../../../utils/recruitMockData'
import ArrowLink from '../../../../public/icon/button/FAQ-arrow-button.svg'

interface Items {
  items: FAQObj[]
}

const FAQItem = ({ items }: Items) => {
  return (
    <div className="flex flex-col justify-center items-center text-black">
      <div className="font-pp max-tablet:text-[2.4rem] text-[3.2rem] italic">
        FAQ
      </div>
      <div className="w-full max-w-[97rem]">
        {items.map(element => {
          return (
            <div
              key={element.Q}
              className="flex-1 bg-grey p-[1.7rem] mt-[3.9rem] rounded-[1rem]">
              <div className="justify-between text-[1.6rem] font-semibold flex items-center">
                <div className="">{element.Q}</div>
                <div>
                  <ArrowLink />
                </div>
              </div>
              <div className="mt-[1.4rem] font-medium text-[1.6rem] whitespace-pre-line">
                {element.A}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FAQItem
