import React from 'react'
import LargeInput from '../LargeInput'
import SelectPart from '../SelectPart'
import { questions } from '../MockData'
import SelectTimeDay from '../SelectTimeDay'
import SmallInput from '../SmallInput'
import SaveButton from './../SaveButton'

const PersonalStatementForm = () => {
  return (
    <div className="w-[56.2rem] flex flex-col gap-[5rem]">
      <SelectPart />

      {questions.map((item, index) => {
        return (
          <LargeInput
            key={index}
            item={item}
            questionNumber={index + 2}></LargeInput>
        )
      })}

      <SelectTimeDay />

      <SmallInput
        title="7. GitHub 계정이 있다면 링크를 올려주세요. (선택)"
        placeholder="ex) https://github.com/likelionsg"
      />

      <div className="mb-[4.7rem]"></div>

      <SaveButton />
    </div>
  )
}

export default PersonalStatementForm
