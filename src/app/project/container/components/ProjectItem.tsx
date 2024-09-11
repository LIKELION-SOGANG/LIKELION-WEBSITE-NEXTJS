import Image from 'next/image'
import Link from 'next/link'

interface setDataType {
  title: string
  generation: string
  year: string
  imgUrl: string
  id: number
}

export default function ProjectItem(props: setDataType) {
  return (
    <Link
      href={`/project/${props.id}`}
      scroll={false}
      className={`flex flex-col text-white font-figtree tablet:leading-none leading-tight mb-[60px] tablet:mb-[78px] cursor-pointer tablet:w-1/4 hover:scale-105 transition ease-in-out duration-200`}>
      <span className="text-[16px] tablet:text-[20px] font-bold mb-[8px]">{props.title}</span>
      <span className="text-[13px] tablet:text-[16px] font-medium mb-[8px] tablet:mb-[17px]">
        {props.generation} | {props.year}
      </span>
      <Image
        src={props.imgUrl}
        alt="project image"
        //   layout="responsive"
        width={'360'}
        height={'202'}
        className="w-full"
      />
    </Link>
  )
}
