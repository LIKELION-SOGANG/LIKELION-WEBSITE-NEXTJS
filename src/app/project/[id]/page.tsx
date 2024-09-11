import Image from 'next/image'
import mockImg from '../container/mockImage/mockImg4.png'
import CloseBtn from '../container/components/CloseBtn'
import LinkBtn from '../container/components/LinkBtn'

interface Props {
  params: {
    id: string
  }
}

export default function ModalPage(props: Props) {
  return props.params.id ? (
    <div>
      <div className="tablet:block hidden">
        <div className="fixed left-0 top-0 opacity-30 bg-black w-screen h-screen "></div>
      </div>
      <div className="tablet:absolute tablet:top-[10%] tablet:left-1/2 tablet:-translate-x-1/2 tablet:w-[600px] tablet:h-[862px] tablet:drop-shadow-[0px_4px_100px_rgba(0,0,0,0.50)] tablet:backdrop-blur-xl tablet:rounded-3xl bg-white flex flex-col text-black px-[30px] tablet:pt-[90px] pt-[108px] font-figtree fixed top-0 left-0 w-screen  h-screen  ">
        <div className="flex flex-col">
          <span className=" tablet:text-[48px] text-[36px] font-semibold mb-[9px] leading-tight ">
            YouCheck
          </span>
          <span className="text-[16px] font-normal mb-[12px] leading-tight">
            11th | 2023
          </span>
          <p className="font-pretendard tablet:text-[20px] text-[16px] font-medium mb-[30px] leading-normal">
            Team 효자동개발자
            <br />
            정고은 이선명 정인영 임정연 장세환 오은택 김유이
          </p>
        </div>
        <Image
          src={mockImg}
          alt="project image"
          width={'0'}
          height={'0'}
          className="rounded-2xl mb-[30px] tablet:w-[537px] w-full tablet:h-[314px] h-[calc(63%)*(201/333)]"
        />
        <p className="font-pretendard tablet:text-[20px] text-[14px] font-medium leading-normal">
          어머님, 그리고 당신은 멀리 북간도에 계십니다. 딴은 밤을 세워 우는
          벌레는 부끄러운 이름을 슬퍼하는 까닭입니다. 계절이 지나가는 하늘에는
          가을로 가득 차 있습니다.
        </p>
        <LinkBtn url="https://naver.com" />
        <CloseBtn />
      </div>
    </div>
  ) : (
    <></>
  )
}
