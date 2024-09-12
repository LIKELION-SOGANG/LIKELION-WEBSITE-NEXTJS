import React from 'react'
import { scheduleObj } from '../../../utils/recruitMockData'
import { areaObj } from '../../../utils/recruitMockData'
import { FAQObj } from '../../../utils/recruitMockData'
import ScheduleItem from '../../ScheduleItem'
import FAQItem from '../../FAQItem'
import AreaItem from '../../AreaItem'

const Recruit2 = () => {
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

export default Recruit2
