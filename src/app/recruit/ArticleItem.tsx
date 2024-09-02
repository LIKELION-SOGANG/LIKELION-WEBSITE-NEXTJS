import React from 'react'
import { AreaObj, FAQObj, ScheduleObj } from './MockData'

interface CardItemProps {
  item: ScheduleObj | AreaObj | FAQObj
  title: string
}

const ArticleItem = ({ item, title }: CardItemProps) => {
  return (
    <div>
      <div className="font-pp text-[3.2rem] italic">{title}</div>
    </div>
  )
}

export default ArticleItem
