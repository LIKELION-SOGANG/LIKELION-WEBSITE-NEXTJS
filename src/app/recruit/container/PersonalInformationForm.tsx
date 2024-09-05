import React from 'react'
import ApplyHeader from '../ApplyHeader'
import SmallInput from '../SmallInput'
import Button from '../Button'
import Progress from '../Progress'
import { personalInformation, personalPhoneNumber } from '../MockData'

const PersonalInformationForm = () => {
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

          <SmallInput
            title={personalPhoneNumber.title}
            placeholder={personalPhoneNumber.placeholder}
          />
        </div>

        <div className="pb-[1rem]">
          <div></div>
          <Button
            title="입력한 이메일로 고유 번호 전송"
            isable={true}
          />
        </div>
      </div>
    </div>
  )
}

export default PersonalInformationForm
