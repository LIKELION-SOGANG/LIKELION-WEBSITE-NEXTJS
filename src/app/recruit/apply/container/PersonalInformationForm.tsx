import React, { useState } from 'react'
import SmallInput from '../components/SmallInput'
import Button from '../components/Button'
import {
  personalInformation,
  personalPhoneNumber
} from '@/utils/recruitMockData'

interface PersonalStatementFormProps {
  onClickStep: () => void
}

const PersonalInformationForm = ({
  onClickStep
}: PersonalStatementFormProps) => {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    studentNumbder: '',
    email: '',
    phone: ''
  })

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(personalInfo)
    const { name, value } = e.target

    setPersonalInfo(prev => {
      return { ...prev, [name]: value }
    })
  }

  return (
    <div className="w-[56.2rem] ">
      <div className="flex flex-col gap-[5rem] mb-[5rem]">
        {personalInformation.map((item, index) => (
          <SmallInput
            onChangeInput={onChangeInput}
            name={item.name}
            key={index}
            title={item.title}
            value={personalInfo[item.name as keyof typeof personalInfo]}
            placeholder={item.placeholder}
          />
        ))}

        <SmallInput
          onChangeInput={onChangeInput}
          name="phone"
          value={personalInfo.phone}
          title={personalPhoneNumber.title}
          placeholder={personalPhoneNumber.placeholder}
        />
      </div>

      <div
        onClick={onClickStep}
        className="pb-[1rem] mt-[19.6rem] cursor-pointer">
        <Button
          title="입력한 이메일로 고유 번호 전송"
          isable={true}
        />
      </div>
    </div>
  )
}

export default PersonalInformationForm
