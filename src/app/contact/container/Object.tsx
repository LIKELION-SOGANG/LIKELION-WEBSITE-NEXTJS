import React from 'react'

export default function Object() {
  return (
    <div>
      <div
        className="relative w-full h-full px-64"
        style={{ marginTop: '-150px' }}>
        <img
          className="w-[30vw] h-[30vw] md:w-[500px] md:h-[500px]"
          src="/images/contact/obj1.png"
        />
      </div>
      <div
        className="flex justify-end relative w-full h-full"
        style={{ marginTop: '-150px' }}>
        <img
          className="w-[35vw] h-[35vw] md:w-[500px] md:h-[500px] origin-top-left"
          src="/images/contact/obj2.png"
          style={{ marginRight: '-120px' }}
        />
      </div>
      <div
        className="text-center"
        style={{ marginTop: '-230px' }}>
        <div className="text-black text-[64px] font-pp font-thin">
          Connect With Us!
        </div>
      </div>
    </div>
  )
}
