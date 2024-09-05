import React from 'react'
import Button from './Button'

const SaveButton = () => {
  return (
    <div className="">
      <div className="text-[1.4rem] font-medium">
        * ‘지원서 저장하기’를 누르면 인적사항에 입력한 이메일로 지원서 저장
        내용이 발송됩니다.
        <br />* 저장 후에도 마감 기한 전까지 고유 번호를 활용해 지원서 수정이
        가능합니다. <br />* 마지막으로 저장된 지원서가 최종 제출본이 됩니다.
        <br />* 서류 접수 마감 기한인 2024.03.08 (금) 23:59 전까지 꼭 제출을
        완료하시기 바랍니다.
      </div>

      <div className="mb-[1rem] mt-[2.4rem]">
        <Button
          title="지원서 저장하기"
          isable={true}
        />
      </div>
    </div>
  )
}

export default SaveButton
