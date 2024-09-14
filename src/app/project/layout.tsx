import React from 'react'
import TapBtn from './container/components/TapBtn'
import Image from 'next/image'
import PageTitle from './container/components/PageTitle'
import PageContent from './container/components/PageContent'

export default function ProjectLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="tablet:mt-64 w-full flex flex-col items-center px-[64px]">
        <PageTitle />
        <PageContent />
      </div>
      <Image
        src="/images/project/bg.png"
        alt="background image"
        width={0}
        height={0}
        className="w-full h-auto fixed top-1/3 tablet:top-0 left-0 blur-xl -z-20 scale-[2.5] tablet:scale-125"
      />
      {children}
    </>
  )
}
