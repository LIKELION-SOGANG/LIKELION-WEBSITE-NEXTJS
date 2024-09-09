import React from 'react'
import { scheduleObj } from '../MockData'
import { areaObj } from '../MockData'
import { FAQObj } from '../MockData'
import ScheduleItem from '../ScheduleItem'
import FAQItem from '../FAQItem'
import AreaItem from '../AreaItem'

const SecondSection = () => {
  return (
    <div className="bg-white p-[4rem] text-black">
      <ScheduleItem items={scheduleObj} />

      <AreaItem items={areaObj} />

      <FAQItem
        items={FAQObj}
        title="FAQ"
      />
    </div>
  )
}

export default SecondSection
