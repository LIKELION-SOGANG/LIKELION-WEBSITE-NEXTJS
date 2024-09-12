import React from 'react'
import LikelionGreyLogo from '../../../../public/icon/logo/likelion-grey.svg'
const Nonpassed = () => {
  return (
    <div className="text-black flex flex-col justify-center items-center w-[56.2rem]">
      <div className="mb-[3.839rem]">
        <LikelionGreyLogo />
      </div>

      <div className="text-[2.4rem] font-pretendard font-semibold text-center mb-[6.5rem] whitespace-pre-line">
        {
          '멋쟁이사자처럼 서강대학교에서\n 김경우 님의 최종 결과를 안내드립니다.'
        }
      </div>

      <div className="text-center text-[1.6rem] font-medium font-pretendard whitespace-pre-line leading-[23px]">
        {
          '안녕하세요, 멋쟁이사자처럼 서강대학교 12기 운영진입니다. \n우선 멋쟁이사자처럼 서강대학교에 많은 관심을 보내주셔서 감사합니다.\n\n제한된 선발 인원으로 인해 이번에는 아쉽게도 좋은 소식을 전하지 못하게 되었습니다. \n좋은 역량을 가지신 분임에도 불구하고, \n불합격 소식을 알려 드리게 되어 무거운 마음입니다.\n\n귀한 시간 내어 지원해주셔서 감사드리고, \n다음 기회에 더 좋은 인연으로 함께할 수 있기를 진심으로 바라겠습니다. \n\n감사합니다.'
        }
      </div>
    </div>
  )
}

export default Nonpassed
