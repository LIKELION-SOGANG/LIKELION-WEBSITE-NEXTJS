'use client'

import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import Recruit1 from './container/Recruit1'
import Recruit2 from './container/Recruit2'
import PcOnly from './container/PcOnly'
//
//
//

export default function RecruitPage() {
  const [pcOnly, setPcOnly] = useState(false)

  const detectRef = useRef<HTMLDivElement | null>(null)
  const backgroundRef = useRef<HTMLDivElement | null>(null)
  const recruit1ImgRef = useRef<HTMLDivElement | null>(null)

  const onIntersection = (entries: IntersectionObserverEntry[]) => {
    const firstEntry = entries[0]
    if (firstEntry.isIntersecting) {
      backgroundRef.current?.style.setProperty('background', 'white')
      recruit1ImgRef.current?.style.setProperty('opacity', '0');
      
    } else {
      backgroundRef.current?.style.setProperty('background', 'black');
      recruit1ImgRef.current?.style.setProperty('opacity', '1');
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection)

    if (detectRef.current) {
      observer.observe(detectRef.current)
    }

    return () => {
      if (detectRef.current) {
        observer.unobserve(detectRef.current)
      }
    }
  }, [])
  return (
    <>
      {pcOnly ? (
        <div>
          <PcOnly setPcOnly={setPcOnly} />
        </div>
      ) : (
        <div
          ref={backgroundRef}
          className="transition-all duration-500 ease-in-out bg-black">
          <Recruit1 setPcOnly={setPcOnly} recruit1ImgRef={recruit1ImgRef}/>
          <Recruit2 detectRef={detectRef} />
        </div>
      )}
    </>
  )
}