import React from 'react'
import LargeInput from '../LargeInput'

const PersonalStatementForm = () => {
  const questions = [
    {
      prompt:
        '간단한 자기소개와 함께, 다양한 IT 동아리 중에서 멋쟁이사자처럼 서강대학교 12기를 선택하고 지원하시게 된 이유를 작성해주세요. ',
      limit: 500
    },
    {
      prompt:
        '파트를 선택한 이유와 관련 경험을 해본 경험이 있는지 작성해주세요. 그리고 멋쟁이사자처럼에서 이 파트로 활동하면서 어떠한 성장을 희망하는지 작성해주세요.',
      limit: 500
    },
    {
      prompt:
        '멋쟁이사자처럼 서강대학교는 협업과 팀워크를 중요한 가치로 생각하는 공동체입니다. 지원자 본인이 협업과 팀워크를 진행해보았던 경험과, 그 경험을 멋쟁이사자처럼 서강대학교에서 어떻게 적용시킬 수 있을지 작성해주세요. ',
      limit: 500
    },
    {
      prompt: '실현하고 싶은 자신만의 IT 서비스 아이디어에 대해 설명해주세요.',
      limit: 500
    }
  ]

  return (
    <div className="w-[56.2rem] flex flex-col gap-[5rem] mb-[5rem]">
      <div className="text-[1.6rem]">
        <div className="text-[#424242] font-semibold mb-[1.3rem]">지원분야</div>
        <div className="relative">
          <select className="w-full border-[1px] border-[#B7B7B7] p-[1.5rem] rounded-[1rem] appearance-none">
            <option value="">지원 분야를 선택해주세요.</option>
            <option value="">Front-End</option>
            <option value="">Back-End</option>
          </select>
          <div className="pointer-events-none absolute top-[50%] right-[2rem] trnasform translate-y-[-50%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="20"
              viewBox="0 0 13 20"
              fill="none">
              <g clip-path="url(#clip0_1272_398)">
                <path
                  d="M1.22284 7.5H11.2736C11.9689 7.5 12.3166 8.33984 11.8244 8.83203L6.80097 13.8594C6.49628 14.1641 6.00019 14.1641 5.6955 13.8594L0.672063 8.83203C0.179875 8.33984 0.527531 7.5 1.22284 7.5Z"
                  fill="#B7B7B7"
                />
              </g>
              <defs>
                <clipPath id="clip0_1272_398">
                  <rect
                    width="12.5"
                    height="20"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      {questions.map((item, index) => {
        return (
          <LargeInput
            key={index}
            item={item}
            questionNumber={index + 1}></LargeInput>
        )
      })}
    </div>
  )
}

export default PersonalStatementForm
