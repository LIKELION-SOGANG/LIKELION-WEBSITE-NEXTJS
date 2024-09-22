'use client'

import React, { useState } from 'react'
import Recruit1 from './container/Recruit1'
import Recruit2 from './container/Recruit2'
import PcOnly from './container/PcOnly'

export default function RecruitPage() {
  const [pcOnly, setPcOnly] = useState(false)
  return (
    <>
      {pcOnly ? (
        <PcOnly setPcOnly={setPcOnly} />
      ) : (
        <div>
          <Recruit1 setPcOnly={setPcOnly} /> <Recruit2 />
        </div>
      )}
    </>
  )
}
