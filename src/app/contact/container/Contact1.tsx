import React from 'react'

export default function Contact1() {
  return (
    <div>
      <div className="relative w-full h-screen overflow-x-hidden overflow-y-hidden">
        <img
          className={`absolute
            mobile:left-[35vw] w-[53vw] h-[52vw] top-[-20.3vw]
            tablet:left-[12vw] tablet:w-[34vw] tablet:h-[34vw] tablet:top-[-10vw]
            desktop:left-[12vw] desktop:w-[34vw] desktop:h-[34vw] desktop:top-[-10vw]  
            `}
          src="/images/contact/obj1.png"
        />
        <img
          className={`absolute 
            mobile:w-[50vw] mobile:h-[50vw] mobile:mt-40 mobile:pt-6 mobile:left-[65vw]
            tablet:w-[45vw] tablet:h-[43vw] tablet:mt-0 tablet:pt-0 tablet:left-[66vw]
            desktop:w-[45vw] desktop:h-[43vw] desktop:mt-0 desktop:pt-0 desktop:left-[66vw] 
            `}
          src="/images/contact/obj2.png"
        />
      </div>
      <div className="text-center desktop:mt-[-24vw] tablet:mt-[-24vw] mobile:mt-[-50vh]">
        <div className="desktop:text-[6rem] tablet:text-[6rem] mobile:text-[4rem] text-black font-pp font-thin">
          Connect With Us!
        </div>
      </div>
      <div className="relative w-full h-[80vh] overflow-x-hidden overflow-y-hidden">
        <img
          className={`absolute 
            desktop:left-0 desktop:w-[31vw] desktop:h-[29vw] 
            tablet:left-0 tablet:w-[31vw] tablet:h-[29vw]
            mobile:left-[-10vw] mobile:w-[35vw] mobile:h-[34vw] top-[-1vw]`}
          src="/images/contact/obj3.png"
        />
        <img
          className={`absolute 
          desktop:w-[31vw] desktop:h-[32vw] desktop:left-[58vw] desktop:top-[10vw]
          tablet:w-[31vw] tablet:h-[32vw] tablet:left-[58vw] tablet:top-[10vw]
          mobile:w-[70vw] mobile:h-[70vw] mobile:left-[50vw] mobile:top-[40vw] 
          `}
          src="/images/contact/obj4.png"
        />
      </div>
    </div>
  )
}
