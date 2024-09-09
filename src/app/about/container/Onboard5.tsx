import React from 'react'

export default function Onboard5() {
  return (
    <div>
      <div className="flex flex-col text-white justify-center items-center bg-black w-full h-[160vh]">
        <div className="font-pp text-5xl">Timeline</div>
        <div className="text-2xl mt-[3rem]">
          멋쟁이사자처럼 서강대학교는 3월부터 11월까지 다양한 활동을 함께
          합니다.
        </div>
        <img
          className="bg-black h-[130vh] mt-[3rem]"
          src="images/about/curriculumn.png"
          alt="curriculmn-pc"
        />
      </div>
      <div className="flex flex-col text-white justify-center items-center bg-black w-full h-screen">
        <div className="font-pp text-5xl">Lion Sprint</div>
        <div className="text-2xl mt-[3rem]">
          매주 화요일, 금요일에 진행되는 정기 세션에서 다양한 기술 스택을 배우고
          있습니다.
        </div>
        <div className="w-3/5 flex flex-col items-center justify-center mt-24 gap-[2rem]">
          <div className="font-pp text-3xl font-thin">Front-End</div>
          <div className="bg-white w-full h-[0.5px]"></div>
          <div className="flex gap-[1rem]">
            <div className="flex justify-center items-center w-[8vw] h-[8vw] bg-white rounded-[50%] p-4">
              <img
                className="w-[5vw]"
                src="images/about/html.png"
                alt="sprint-front"
              />
            </div>
            <div className="flex justify-center items-center w-[8vw] h-[8vw] bg-white rounded-[50%] p-4">
              <img
                className="w-[5vw]"
                src="images/about/css.png"
                alt="sprint-front"
              />
            </div>
            <div className="flex justify-center items-center w-[8vw] h-[8vw] bg-white rounded-[50%] p-4">
              <img
                className="w-[5vw]"
                src="images/about/js.png"
                alt="sprint-front"
              />
            </div>
            <div className="flex justify-center items-center w-[8vw] h-[8vw] bg-white rounded-[50%] p-4">
              <img
                className="w-[5vw]"
                src="images/about/react.png"
                alt="sprint-front"
              />
            </div>
            <div className="flex justify-center items-center w-[8vw] h-[8vw] bg-white rounded-[50%] p-4">
              <img
                className="w-[5vw]"
                src="images/about/git.png"
                alt="sprint-front"
              />
            </div>
            <div className="flex justify-center items-center w-[8vw] h-[8vw] bg-white rounded-[50%] p-4">
              <img
                className="w-[5vw]"
                src="images/about/github.png"
                alt="sprint-front"
              />
            </div>
          </div>
        </div>
        <div className="w-3/5 flex flex-col items-center justify-center mt-52 gap-[2rem]">
          <div className="font-pp text-3xl font-thin">Back-End</div>
          <div className="bg-white w-full h-[0.5px]"></div>
          <div className="flex gap-[1rem]">
            <div className="flex justify-center items-center w-[8vw] h-[8vw] bg-white rounded-[50%] p-4">
              <img
                className="w-[5vw]"
                src="images/about/html.png"
                alt="sprint-front"
              />
            </div>
            <div className="flex justify-center items-center w-[8vw] h-[8vw] bg-white rounded-[50%] p-4">
              <img
                className="w-[5vw]"
                src="images/about/python.png"
                alt="sprint-front"
              />
            </div>
            <div className="flex justify-center items-center w-[8vw] h-[8vw] bg-white rounded-[50%] p-4">
              <img
                className="w-[5vw]"
                src="images/about/django.png"
                alt="sprint-front"
              />
            </div>
            <div className="flex justify-center items-center w-[8vw] h-[8vw] bg-white rounded-[50%] p-4">
              <img
                className="w-[5vw]"
                src="images/about/aws.png"
                alt="sprint-front"
              />
            </div>
            <div className="flex justify-center items-center w-[8vw] h-[8vw] bg-white rounded-[50%] p-4">
              <img
                className="w-[5vw]"
                src="images/about/git.png"
                alt="sprint-front"
              />
            </div>
            <div className="flex justify-center items-center w-[8vw] h-[8vw] bg-white rounded-[50%] p-4">
              <img
                className="w-[5vw]"
                src="images/about/github.png"
                alt="sprint-front"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
