import React from 'react'

const Progress = () => {
  return (
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
  )
}

export default Progress
