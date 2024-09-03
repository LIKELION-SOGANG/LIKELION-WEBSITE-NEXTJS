import React from 'react'
import { scheduleObj } from '../MockData'
import { areaObj } from '../MockData'
import { FAQObj } from '../MockData'
import ArticleItem from '../ArticleItem'
import FAQItem from '../FAQItem'

const SecondSection = () => {
  return (
    <div className="bg-white p-[4rem] ">
      <ArticleItem
        items={scheduleObj}
        title="Schedule"
      />

      <ArticleItem
        items={areaObj}
        title="Area"
      />

      <FAQItem
        items={FAQObj}
        title="FAQ"
      />
    </div>
  )
}

export default SecondSection
