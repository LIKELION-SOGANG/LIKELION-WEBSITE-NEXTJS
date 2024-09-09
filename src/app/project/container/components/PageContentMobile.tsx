import ProjectItem from './ProjectItem'
import TapBtn from './TapBtn'
import chunkArray from '../utils/chunkArray'
import { tabList, projectList } from '../utils/mockData'

export default function PageContentMobile() {
  const slicedProjectList = chunkArray(projectList, 3)

  return (
    <>
      <div className="flex gap-[7px] ">
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
    </>
  )
}
