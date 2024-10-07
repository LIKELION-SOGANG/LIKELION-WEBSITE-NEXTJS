import React from 'react'
import ScheduleItem from '../components/ScheduleItem'
import FAQItem from '../components/FAQItem'
import AreaItem from '../components/AreaItem'
import { areaObj, FAQObj, scheduleObj } from '@/utils/recruitMockData'

const Recruit2 = () => {
  return (
    <div className="bg-white p-[4rem] text-black">
      <ScheduleItem items={scheduleObj} />
      <AreaItem items={areaObj} />
      <FAQItem items={FAQObj} />
    </div>
  )
}

export default Recruit2
