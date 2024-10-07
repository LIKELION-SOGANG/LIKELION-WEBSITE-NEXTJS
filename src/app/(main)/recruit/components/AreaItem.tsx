import { AreaObj } from '@/utils/recruitMockData'
import React from 'react'
//
//
//
interface Items {
  items: AreaObj[]
}
//
//
//

const AreaItem = ({ items }: Items) => {
  return (
    <div className="flex flex-col items-center mb-[12rem]  max-tablet:mb-[12.7rem]">
      <div className="font-pp max-tablet:text-[2.4rem] max-desktop:text-[3.2rem] italic mb-[3.8rem]">
        Area
      </div>
      <div className="flex gap-[2.8rem] w-full max-w-[97rem] max-tablet:flex-col">
        {items.map(item => {
          return (
            <div
              key={item.name}
              className="flex-1 bg-grey p-[1.7rem] rounded-[1rem]">
              <div className="text-[1.6rem] italic font-pp">{item.name}</div>
              <div className="mt-[1rem] font-medium text-[1.2rem]">
                {item.description}
              </div>
              <div className="mt-[1rem]">
                <a
                  className="flex items-center text-[#B7B7B7]"
                  href={`${item.linkToSkill}`}>
                  <svg
                    className="block"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="8"
                    viewBox="0 0 9 8"
                    fill="none">
                    <path
                      d="M8.06248 1V5.875C8.06248 6.02418 8.00322 6.16726 7.89773 6.27275C7.79224 6.37824 7.64916 6.4375 7.49998 6.4375C7.3508 6.4375 7.20772 6.37824 7.10223 6.27275C6.99674 6.16726 6.93748 6.02418 6.93748 5.875V2.35937L1.89795 7.39797C1.79228 7.50364 1.64895 7.56301 1.49951 7.56301C1.35007 7.56301 1.20675 7.50364 1.10107 7.39797C0.995401 7.2923 0.936035 7.14897 0.936035 6.99953C0.936035 6.85009 0.995401 6.70677 1.10107 6.60109L6.1406 1.5625H2.62498C2.4758 1.5625 2.33272 1.50324 2.22723 1.39775C2.12174 1.29226 2.06248 1.14918 2.06248 1C2.06248 0.850816 2.12174 0.707742 2.22723 0.602252C2.33272 0.496763 2.4758 0.4375 2.62498 0.4375H7.49998C7.64916 0.4375 7.79224 0.496763 7.89773 0.602252C8.00322 0.707742 8.06248 0.850816 8.06248 1Z"
                      fill="#B7B7B7"
                    />
                  </svg>
                  <div className="ml-[0.2rem] underline">
                    기술 스택 보러가기
                  </div>
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AreaItem
