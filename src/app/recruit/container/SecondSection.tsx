import React from 'react'
import { scheduleObj } from '../MockData'
import { areaObj } from '../MockData'
import { FAQObj } from '../MockData'

const SecondSection = () => {
  return (
    <div className="bg-white p-[4rem] ">
      <div className="flex flex-col justify-center items-center text-black ">
        <div className="font-pp text-[3.2rem] italic">Schedule</div>
        <div className="flex gap-[2.8rem] w-full max-w-[97rem]">
          {scheduleObj.map(element => {
            return (
              <div
                key={element.name}
                className="flex-1 bg-grey p-[1.7rem] mt-[3.9rem] mb-[15rem] rounded-[1rem]">
                <div className="font-semibold text-[1.6rem]">
                  {element.name}
                </div>
                <div className="mt-[1.4rem] font-medium text-[1.2rem]">
                  {element.startDate}
                  <br />~{element.endDate}
                </div>
              </div>
            )
          })}
        </div>
        <div className="font-pp text-[3.2rem] italic">Area</div>
        <div className="flex gap-[2.8rem] w-full max-w-[97rem]">
          {areaObj.map(element => {
            return (
              <div
                key={element.name}
                className="flex-1 bg-grey p-[1.7rem] mt-[3.9rem] mb-[15rem] rounded-[1rem]">
                <div className="text-[1.6rem] italic font-pp">
                  {element.name}
                </div>
                <div className="mt-[1.4rem] font-medium text-[1.2rem]">
                  {element.description}
                </div>
                <div className="mt-[1rem]">
                  <a
                    className="flex items-center"
                    href={`${element.linkToSkill}`}>
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
        <div className="font-pp text-[3.2rem] italic">FAQ</div>
        <div className="w-full max-w-[97rem]">
          {FAQObj.map(element => {
            return (
              <div
                key={element.Q}
                className="flex-1 bg-grey p-[1.7rem] mt-[3.9rem] rounded-[1rem]">
                <div className="justify-between text-[1.6rem] font-semibold flex items-center">
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
                <div className="mt-[1.4rem] font-medium text-[1.6rem]">
                  {element.A}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SecondSection
