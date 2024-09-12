import React from 'react'
import Progress from '../Progress'
import SmallInput from '../SmallInput'
import {
  personalInformation,
  personalPhoneNumber
} from '../../../../utils/recruitMockData'
import SelectPart from '../SelectPart'
import Button from '../Button'

const EditPersonalInfo = () => {
  return (
    <div className="w-[56.2rem] relative">
      <div className="flex flex-col gap-[5rem] mb-[5rem]">
        {personalInformation.map((item, index) => (
          <SmallInput
            key={index}
            title={item.title}
            placeholder={item.placeholder}
          />
        ))}

        <SelectPart />

        <div className="mb-[5rem]"></div>
      </div>

      <div className="absolute bottom-[1rem] w-full">
        <Button
          title="다음"
          isable={true}
        />
      </div>
    </div>
  )
}

export default EditPersonalInfo
