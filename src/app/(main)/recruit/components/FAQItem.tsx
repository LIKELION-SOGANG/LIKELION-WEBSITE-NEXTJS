import { FAQObj } from '@/utils/recruitMockData'
import React from 'react'

interface Items {
  items: FAQObj[]
}

const FAQItem = ({ items }: Items) => {
  return (
    <div className="flex flex-col justify-center items-center text-black">
      <div className="font-pp text-[2.4rem] tablet:text-[3.2rem] italic">
        FAQ
      </div>
      <div className="w-full max-w-[97rem]">
        {items.map(element => {
          return (
            <div
              key={element.Q}
              className="flex-1 bg-grey p-[1.7rem] mt-[3.9rem] rounded-[1rem]">
              <div className="justify-between text-[1.5rem] tablet:text-[1.6rem] font-semibold flex items-center">
                <div className="">{element.Q}</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    fill="none">
                    <path
                      d="M9.11719 15.8828C9.60547 16.3711 10.3984 16.3711 10.8867 15.8828L18.3867 8.38281C18.875 7.89453 18.875 7.10156 18.3867 6.61328C17.8984 6.125 17.1055 6.125 16.6172 6.61328L10 13.2305L3.38281 6.61719C2.89453 6.12891 2.10156 6.12891 1.61328 6.61719C1.125 7.10547 1.125 7.89844 1.61328 8.38672L9.11328 15.8867L9.11719 15.8828Z"
                      fill="black"
                    />
                  </svg>
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
