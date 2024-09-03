import React from 'react'
import ApplyHeader from '../ApplyHeader'
import SmallInput from '../SmallInput'
import Button from '../Button'

const PersonalInformationForm = () => {
  const personalInformation = [
    { title: '이름', placeholder: '지원자의 이름을 입력해주세요.' },
    {
      title: '학번',
      placeholder: '서강대학교 학번을 입력해주세요 .ex) 20220001'
    },
    {
      title: '이메일',
      placeholder: '이메일 주소를 입력해주세요. ex) likelionsg@gmail.com'
    },
    {
      title: '전화번호',
      placeholder: '연락가능한 전화번호를 입력해주세요. ex) 010-1234-5678'
    }
  ]

  return (
    <div className="w-[56.2rem] ">
      <div className="w-[56.2rem]">
        <div className="flex justify-between mt-[2.7rem] mb-[4rem]">
          <div className="flex items-center justify-center font-bold">
            <div className="w-[2.4rem] h-[2.4rem] mr-[0.5rem] bg-black rounded-[50%] text-white flex items-center justify-center text-[1.2rem] ">
              1
            </div>
            <div>인적사항 입력</div>
          </div>

          <div className="flex justify-center items-center ">
            <div className="m-[0_1.4rem] w-[12.2rem] h-[1px] bg-black"></div>
          </div>

          <div className="flex items-center font-bold">
            <div className="w-[2.4rem] h-[2.4rem] mr-[0.5rem] bg-black rounded-[50%] text-white flex items-center justify-center text-[1.2rem] ">
              2
            </div>
            <div>지원서 작성</div>
          </div>

          <div className="flex justify-center items-center">
            <div className="m-[0_1.4rem] w-[12.2rem] h-[1px] bg-black"></div>
          </div>

          <div className="flex items-center font-bold">
            <div className="w-[2.4rem] h-[2.4rem] mr-[0.5rem] bg-black rounded-[50%] text-white flex items-center justify-center text-[1.2rem]">
              3
            </div>
            <div>지원서 저장</div>
          </div>
        </div>

        <div className="flex flex-col gap-[5rem] mb-[5rem]">
          {personalInformation.map((item, index) => (
            <SmallInput
              key={index}
              title={item.title}
              placeholder={item.placeholder}
            />
          ))}
        </div>

        <div className="pb-[1rem]">
          <div></div>
          <Button title="입력한 이메일로 고유 번호 전송" />
        </div>
      </div>
    </div>
  )
}

export default PersonalInformationForm
