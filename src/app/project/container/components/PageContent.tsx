import chunkArray from '../utils/chunkArray'
import { projectList, tabList } from '../utils/mockData'
import ProjectItem from './ProjectItem'
import TapBtn from './TapBtn'

export default function PageContent() {
  const slicedProjectList = chunkArray(projectList, 3)

  return (
    <>
      <div className="hidden tablet:block w-full">
        <div className="w-full flex flex-col items-center"></div>
        <div className="flex gap-[7px] justify-center ">
          {tabList.map(tab => (
            <TapBtn
              key={tab.text}
              {...tab}
            />
          ))}
        </div>
        <div className="w-full mt-[64px]">
          {slicedProjectList.map((innerList, index) => (
            <div
              key={index}
              className={`w-full flex gap-10  ${index % 2 === 0 ? '' : 'justify-end'}`}>
              {innerList.map(project => (
                <ProjectItem
                  key={project.id}
                  {...project}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="block tablet:hidden w-screen min-h-screen bg-black">
        <div className="px-[30px] pt-[126px] flex gap-[20px] h-full">
          <div className="sticky left-0 top-[126px] h-[calc(100vh-126px)] flex flex-col gap-[24px] pr-[20px] border-solid border-0 border-r border-[#B7B7B7]">
            {tabList
              .slice(0)
              .reverse()
              .map(tab => (
                <TapBtn
                  key={tab.text}
                  {...tab}
                />
              ))}
          </div>
          <div className="flex flex-col flex-1">
            {projectList.map(project => (
              <ProjectItem
                key={project.id}
                {...project}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
