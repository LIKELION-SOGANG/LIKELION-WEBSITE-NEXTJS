import React from 'react'
import Image from 'next/image'
import PageTitle from './container/components/PageTitle'
import PageContent from './container/components/PageContent'
import { getAllProjects } from '@/client-api/api'
import { PAGE } from '@/style/zIndex'
import { Metadata } from 'next'
//
//
//
export const metadata: Metadata = {
  title: 'Our Projects · 서강대 멋사',
  description:
    '서강대학교 멋쟁이사자처럼의 Output이자 역대 프로젝트 리스트 페이지입니다.'
}
//
//
//
export default async function ProjetcLayout({
  children
}: {
  children: React.ReactNode
}) {
  const projectList = await getAllProjects()
  if (!projectList) return null
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
