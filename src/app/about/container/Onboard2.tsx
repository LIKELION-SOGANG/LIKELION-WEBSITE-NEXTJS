import React from 'react'

export default function Onboard2() {
  return (
    <section>
      <div className="flex justify-center items-center w-full h-screen bg-white">
        <div className="text-black text-HeaderPC">
          멋쟁이사자처럼 대학은 국내외 <span className="font-black">121개</span>{' '}
          대학이 참여하는{' '}
          <span className="font-black">국내 최대 규모의 IT 창업 동아리</span>
          입니다.{' '}
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-screen bg-white">
        <div className="text-center text-black text-HeaderPC">
          <span className="font-black">“내 아이디어를 내 손으로 실현한다”</span>
          는 모토로, <br />
          누구든지 자신이 원하는 IT 서비스를 구현할 수 있도록
          <br /> 각종 스터디와 네트워킹, 행사를 지원하고 있습니다.
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-screen bg-white">
        <div className="text-black flex flex-col items-center">
          <div className="text-4xl">WE ARE</div>
          <div className="font-pp cursor-pointer text-8xl">
            Like<span className="italic">lion</span> So
            <span className="italic">gang</span>
          </div>
          <div className="mt-32 text-center text-3xl">
            멋쟁이사자처럼 서강대학교는 대면 교육 세션, 데모데이 등 다채로운
            활동을 통해
            <br /> 매년 구성원들의{' '}
            <span className="font-black">폭발적인 성장</span>을 이끌어내고
            있습니다.
            <br />
            그 성과로, 대학생 1500명이 참여한 작년 ‘멋쟁이사자처럼 전국 연합
            해커톤’에서
            <br /> <span className="font-black">동상 수상 팀을 배출</span>
            했습니다.
          </div>
        </div>
      </div>
    </section>
  )
}
