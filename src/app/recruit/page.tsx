'use client'

import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import Recruit1 from './container/Recruit1'
import Recruit2 from './container/Recruit2'
import PcOnly from './container/PcOnly'

export default function RecruitPage() {
  const [pcOnly, setPcOnly] = useState(false)
  const detectRef = useRef<HTMLDivElement | null>(null)
  const backgroundRef = useRef<HTMLDivElement | null>(null)

  const onIntersection = (entries: IntersectionObserverEntry[]) => {
    const firstEntry = entries[0]
    if (firstEntry.isIntersecting) {
      /* 코드 작성 */
      backgroundRef.current?.style.setProperty('background', 'white')
    } else {
      backgroundRef.current?.style.setProperty('background', 'none')
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
          className="transition-all duration-1000 ease-in-out">
          <Recruit1 setPcOnly={setPcOnly} />
          <Recruit2 detectRef={detectRef} />
        </div>
      )}
    </>
  )
}
