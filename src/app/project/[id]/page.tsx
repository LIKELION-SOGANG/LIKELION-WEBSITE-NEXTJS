import Image from 'next/image'
import mockImg from '../container/mockImage/mockImg4.png'
import CloseBtn from '../container/components/CloseBtn'
import LinkBtn from '../container/components/LinkBtn'
import { ModalPageProps, Project } from '@/type/project'
import { getAllProjects } from '@/client-api/api'

export default async function ModalPage(props: ModalPageProps) {
  const projectList = await getAllProjects()
  const currentProject = projectList.find(
    (project: Project) => project._id === props.params.id
  )

  return props.params.id && currentProject ? (
    <div>
      <div className="tablet:block hidden">
        <div className="fixed left-0 top-0 opacity-30 bg-black w-screen h-screen "></div>
      </div>
      <div className="tablet:fixed tablet:top-[5%] tablet:left-1/2 tablet:-translate-x-1/2 tablet:w-[600px] tablet:h-[90vh] tablet:drop-shadow-[0px_4px_100px_rgba(0,0,0,0.50)] tablet:backdrop-blur-xl tablet:rounded-3xl bg-white flex flex-col text-black px-[30px] tablet:pt-[90px] pt-[108px] pb-[30px]  font-figtree fixed top-0 left-0 w-screen h-screen overflow-y-auto">
        <div className="flex flex-col ">
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
          className="rounded-2xl mb-[30px] tablet:w-[537px] w-full tablet:h-auto "
        />
        <p className="font-pretendard tablet:text-[20px] text-[14px] mb-[60px] font-medium leading-normal">
          {currentProject.description}
        </p>
        <LinkBtn url={currentProject.github} />
        <CloseBtn />
      </div>
    </div>
  ) : (
    <></>
  )
}
