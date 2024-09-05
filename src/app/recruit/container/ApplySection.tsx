import React from 'react'
import Button from '../Button'
import SmallInput from '../SmallInput'
import ApplyHeader from '../ApplyHeader'
import PersonalInformationForm from './PersonalInformationForm'
import PersonalStatementForm from './PersonalStatementForm'
import SaveComplete from './SaveComplete'
import EditPersonalInfo from './EditPersonalInfo'
import CheckingPass from '../CheckingPass'

const ApplySection = () => {
  return (
    <div className="pt-[2rem] bg-white text-black">
      <div className="flex flex-col justify-center items-center ">
        <div className="w-[56.2rem] ">
          <ApplyHeader />

          <div className="mb-[19rem]"></div>

          <div>
            <div className="text-[1.6rem] font-medium mb-[1.2rem]">
              처음 지원서를 작성하신다면,
            </div>
            <div>
              <Button
                title="지원서 생성하기"
                isable={true}
              />
            </div>
          </div>

          <div className="mb-[7rem]"></div>

          <div>
            <SmallInput
              title="이미 작성하던 지원서가 있으시다면,"
              placeholder="이메일로 발송된 고유번호를 입력해주세요."
            />
            <div className="mb-[1.2rem]"></div>
            <Button
              title="지원서 수정하기"
              isable={false}
            />
          </div>

          <div className="mb-[1.2rem]"></div>
        </div>

        <PersonalInformationForm />
        <PersonalStatementForm />
        <SaveComplete />
        <EditPersonalInfo />
      </div>
    </div>
  )
}

export default ApplySection
