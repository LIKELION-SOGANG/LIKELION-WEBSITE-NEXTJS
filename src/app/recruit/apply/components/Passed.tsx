import React from 'react'
import LikelionGreyLogo from '../../../../public/icon/logo/likelion-grey.svg'

const Passed = () => {
  return (
    <div className="text-black flex flex-col justify-center items-center w-[56.2rem]">
      <div className="mb-[3.839rem]">
        <LikelionGreyLogo />
      </div>

      <div className="text-[2.4rem] font-pretendard font-semibold text-center mb-[6.5rem] whitespace-pre-line">
        {'김경우 님, 멋쟁이사자처럼 서강대학교 12기\n 최종 합격을 축하드려요!'}
      </div>

      <div className="text-center text-[1.6rem] font-medium font-pretendard whitespace-pre-line leading-[23px]">
        {
          '안녕하세요, 멋쟁이사자처럼 서강대학교 12기 운영진입니다.\n12기 멋쟁이사자처럼 서강대학교 [최종 합격]을 축하드립니다.\n\n그럼 12기 아기사자 활동을 시작하기에 앞서 첫 번째 공지사항 전달드립니다.\n\n1. 정규 세션시간: 매주 화요일 / 금요일 19:00~21:00\n\n2. 오리엔테이션: 3월 19일 (화요일) 19:00 마포 프론트원 - 공덕 ICT COC\n\n3. 강의 자료, 과제 등의 업로드는 Notion과 Github를 사용합니다. Notion에 가입해주시고, Notion에 가입 이메일을 아래 구글폼에 적어서 제출해주시기 바랍니다.\n\n4. 멋쟁이사자처럼 서강대학교는 회칙 제 11조에 따라 본회의 유지 및 운영에 필요한 경비 5만원을 회비로 정하고 있습니다. \n\n12기 총무계좌는 아래와 같습니다.\n3333291762013 카카오뱅크 정고은\n\n5. 멋쟁이사자처럼 12기 회원 정보를 수합합니다. 추가로 회비 입금 내역, 이후 일정 참가에 대하여 아래 구글폼을 입력해주시면 감사하겠습니다. 구글폼은 3/19(일) 오전 11:59(정오)까지 제출 부탁드립니다. \n\n  '
        }
        <a
          className="underline"
          href="https://forms.gle/YrDqQ1rSX3UBfvPh8">
          https://forms.gle/YrDqQ1rSX3UBfvPh8
        </a>
        {
          '\n\n다시 한번 멋쟁이사자처럼 서강대학교의 일원이 되신 것을 축하드리며, 앞으로 여러분과 함께 하게 될 수많은 시간들을 기대하고 있겠습니다! \n\n🦁 POSSIBILITY TO REALITY 🦁'
        }
      </div>
    </div>
  )
}

export default Passed
