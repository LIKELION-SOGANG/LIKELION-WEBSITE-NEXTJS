import React from 'react'
import ApplyHeader from '../ApplyHeader'
import SmallInput from '../SmallInput'
import Button from '../Button'
import Progress from '../Progress'

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
        <Progress />

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
