import { ONBOARD } from '@/style/zIndex'
import React from 'react'

export default function Onboard1() {
  return (
    <section className={`relative z-[${ONBOARD}]`}>
      <div className="text-white w-full h-[100vh] bg-black">
        <img
          className="absolute top-0 origin-top-left scale-[.45] blur-[10px]"
          src="images/about/obj1.png"
          alt="object"
        />
        <img
          className="absolute origin-top-right scale-[.55] top-[25rem] mobile:scale-[.25] mobile:top-[-10rem]"
          src="images/about/obj2.png"
          alt="object"
        />
        <img
          className="absolute origin-top-left w-[80vw] left-[rem] top-[70vh] mobile:w-[30vw] mobile:left-[10rem] mobile:top-[60vh]"
          src="images/about/obj3.png"
          alt="object"
        />
        <div className="font-pp text-[28vw] flex items-end flex items-end absolute top-[25vh] right-[50%] translate-x-[50%]">
          <span>Like</span>
          <span className="italic">lion</span>
        </div>
        <img
          className="absolute right-20 top-[85vh]"
          src="images/about/caption-possible-white.svg"
          alt="possible-caption"
        />
      </div>
      <div className="text-white w-full h-[100vh] bg-black flex items-center overflow-x-hidden">
        <div className="bg-white text-black text-2xl tablet:text-4xl font-medium -rotate-[10deg] w-[300vw] whitespace-nowrap -translate-x-[10rem]">
          ✶ NOW RECRUITING{' '}
          <span className="font-pp font-normal">
            Like<span className="italic">lion</span> 12th{' '}
          </span>
          MEMBER ✶ NOW RECRUITING{' '}
          <span className="font-pp font-normal">
            Like<span className="italic">lion</span> 12th{' '}
          </span>
          MEMBER ✶ NOW RECRUITING{' '}
          <span className="font-pp font-normal">
            Like<span className="italic">lion</span> 12th{' '}
          </span>
          MEMBER ✶ NOW RECRUITING{' '}
          <span className="font-pp font-normal">
            Like<span className="italic">lion</span> 12th{' '}
          </span>
          MEMBER
        </div>
      </div>
    </section>
  )
}
