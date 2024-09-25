'use client'

import { useEffect, useState } from 'react'
import chunkArray from '../utils/chunkArray'
import ProjectItem from './ProjectItem'
import TabBtn from './TabBtn'
import { Project } from '@/type/project'

const tabList = [6, 7, 8, 9, 10, 11, 12]

export default function PageContent({
  projectList
}: {
  projectList: Project[]
}) {
  const [currentTab, setCurrentTab] = useState(11)
  const [currentList, setCurrentList] = useState(
    projectList.filter(project => project.generation === 11)
  )
  useEffect(() => {
    setCurrentList(
      projectList.filter(project => project.generation === currentTab)
    )
  }, [currentTab, projectList])

  const slicedProjectList = chunkArray(currentList, 3)

  const onClickTab = (generation: number) => {
    setCurrentTab(generation)
  }

  return (
    <>
      <div className="hidden tablet:block w-full">
        <div className="w-full flex flex-col items-center"></div>
        <div className="flex gap-[7px] justify-center ">
          {tabList.map(tab => (
            <TabBtn
              key={tab}
              generation={tab}
              isSelected={tab === currentTab}
              onClickTab={onClickTab}
            />
          ))}
        </div>
        <div className="w-full mt-[64px]">
          {slicedProjectList.map((innerList, index) => (
            <div
              key={index}
              className={`w-full h-[calc(18vw)] flex gap-10 mb-[calc(7vw)]  ${index % 2 === 0 ? '' : 'justify-end'}`}>
              {innerList.map((project, index) => (
                <ProjectItem
                  key={index}
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
                <TabBtn
                  key={tab}
                  generation={tab}
                  isSelected={tab === currentTab}
                  onClickTab={onClickTab}
                />
              ))}
          </div>
          <div className="flex flex-col flex-1">
            {projectList.map((project, index) => (
              <ProjectItem
                key={index}
                {...project}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
