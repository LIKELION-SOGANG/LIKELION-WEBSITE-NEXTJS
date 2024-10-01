import { Project } from '@/type/project'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectItem(props: Project) {
  return props._id ? (
    <Link
      href={props._id ? `/project/${props._id}` : ''}
      scroll={false}
      className={`flex flex-col text-white font-figtree tablet:leading-none leading-tight mb-[60px] tablet:mb-[0px] cursor-pointer h-[calc(48vw)] w-full tablet:h-auto tablet:w-1/4 hover:scale-105 transition ease-in-out duration-200`}>
      <span className="text-[16px] tablet:text-[20px] font-bold  pb-[8px] truncate min-h-[30px] max-w-full ">
        {props.project}
      </span>
      <span className="text-[13px] tablet:text-[16px] font-medium mb-[8px] tablet:mb-[17px]">
        {props.generation
          ? `${props.generation}th | ${props.generation + 2012}`
          : null}
      </span>
      <Image
        src={props.imageUrl ? props.imageUrl : ''}
        alt="project image"
        //   layout="responsive"
        width={'360'}
        height={'202'}
        // fill={true}
        className="w-full h-full object-cover overflow-hidden"
      />
    </Link>
  ) : (
    <div className="tablet:w-1/4 tablet:block hidden"></div>
  )
}
