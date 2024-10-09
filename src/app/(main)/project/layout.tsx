import React from 'react'
import Image from 'next/image'
import PageTitle from './container/components/PageTitle'
import PageContent from './container/components/PageContent'
import { getAllProjects } from '@/client-api/api'
import { PAGE } from '@/style/zIndex'

export default async function ProjetcLayout({
  children
}: {
  children: React.ReactNode
}) {
  const projectList = await getAllProjects()
  return (
    <>
      <main
        className={`relative`}
        style={{ zIndex: PAGE }}>
        <div className="tablet:mt-64 w-full flex flex-col items-center px-[64px]">
          <PageTitle />
          <PageContent projectList={projectList} />
        </div>
        <Image
          src="/images/project/bg.png"
          alt="background image"
          width={0}
          height={0}
          className="w-full h-auto fixed top-1/3 tablet:top-0 left-0 blur-xl -z-20 scale-[2.5] tablet:scale-125"
        />
      </main>
      {children}
    </>
  )
}
