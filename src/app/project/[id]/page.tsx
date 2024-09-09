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
      <div className="fixed left-0 top-0 opacity-30 bg-black w-screen h-screen "></div>
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[862px] drop-shadow-[0px_4px_100px_rgba(0,0,0,0.50)] backdrop-blur-xl rounded-3xl bg-white flex flex-col text-black px-12 pt-[90px] font-figtree  ">
        <div className="flex flex-col">
          <span className=" text-[48px]  font-semibold mb-[9px] leading-tight ">
            YouCheck
          </span>
          <span className="text-[16px] font-normal mb-[12px] leading-tight">
            11th | 2023
          </span>
          <p className="font-pretendard text-[20px] font-medium mb-[30px] leading-normal">
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
          className="rounded-2xl mb-[30px] w-[537px] h-[314px]"
        />
        <p className="font-pretendard text-[20px] font-medium leading-normal">
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
