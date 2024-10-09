import Image from 'next/image'
import mockImg from '../container/mockImage/mockImg4.png'
import CloseBtn from '../container/components/CloseBtn'
import LinkBtn from '../container/components/LinkBtn'
import { ModalPageProps, Project } from '@/type/project'
import { getAllProjects } from '@/client-api/api'
import { useLockBodyScroll } from 'react-use'

export async function generateStaticParams() {
  const projectList = await getAllProjects()

  return projectList.map((project: Project) => ({
    id: project._id
  }))
}

export default async function ModalPage(props: ModalPageProps) {
  const projectList = await getAllProjects()
  const currentProject = projectList.find(
    (project: Project) => project._id === props.params.id
  )
  // useLockBodyScroll()

  return props.params.id && currentProject ? (
    <>
      <div className="scroll-container h-[500px] overflow-scroll">
        <div className="flex flex-col">
          <span className=" tablet:text-[48px] text-[36px] font-semibold mb-[9px] leading-tight break-keep">
            {currentProject.project}
          </span>
          <span className="text-[16px] font-normal mb-[12px] leading-tight">
            {currentProject.generation}th | {currentProject.generation + 2012}
          </span>
          <p className="font-pretendard tablet:text-[20px] text-[16px] font-medium mb-[30px] leading-normal">
            Team {currentProject.team}
            <br />
            {currentProject.member}
          </p>
        </div>
        <Image
          src={currentProject.imageUrl}
          alt="project image"
          width={'537'}
          height={'314'}
          className="rounded-2xl mb-[30px] tablet:w-[537px] w-full tablet:h-auto"
        />
        <p className="font-pretendard tablet:text-[20px] text-[14px] mb-[60px] font-medium leading-normal">
          {currentProject.description}
        </p>
      </div>
      <LinkBtn url={currentProject.github} />
      <CloseBtn />
    </>
  ) : (
    <></>
  )
}
