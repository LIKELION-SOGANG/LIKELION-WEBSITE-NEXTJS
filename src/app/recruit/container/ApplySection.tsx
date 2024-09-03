import React from 'react'
import Button from '../Button'
import SmallInput from '../SmallInput'

const ApplySection = () => {
  return (
    <div className="pt-[2rem] bg-white text-black">
      <div className="flex flex-col justify-center items-center ">
        <div className="w-[56.2rem] ">
          <div className="flex flex-row justify-between">
            <div className="font-pp text-[2rem] ">
              Like<span className="italic">Lion </span>So
              <span className="italic">gang </span>12
              <span className="italic">th </span>Re
              <span className="italic">cruitment</span>
            </div>
            <div className="p-[0.6rem_1.3rem] bg-grey text-black text-[1.3rem] font-semibold rounded-[2rem]">
              홈으로 돌아가기
            </div>
          </div>

          <div className="mb-[19rem]"></div>

          <div>
            <div className="text-[1.6rem] font-medium mb-[1.2rem]">
              처음 지원서를 작성하신다면,
            </div>
            <div>
              <Button
                title="지원서 생성하기"
                defaultColor="black"
              />
            </div>
          </div>

          <div className="mb-[7rem]"></div>

          <div>
            <div className="text-[1.6rem] font-medium mb-[1.2rem]">
              이미 작성하던 지원서가 있으시다면,
            </div>
            <div>
              <SmallInput placeholder="이메일로 발송된 고유번호를 입력해주세요." />
              <div className="mb-[1.2rem]"></div>
              <Button
                title="지원서 수정하기"
                defaultColor="grey"
              />
            </div>
          </div>

          <div className="mb-[1.2rem]"></div>
        </div>
      </div>
    </div>
  )
}

export default ApplySection
