import React from 'react'
import Image from 'next/image'

export default function CreditPage() {
  return (
    <main>
      <div className="bg-black w-full h-full">
        <div className="flex flex-col justify-center font-pp text-white">
          <h3 className=" text-center text-[3rem] pt-64">CREDITS</h3>
          <ul className="flex flex-col gap-20 py-[4vw] px-[20vw] ml-[11vw]">
            <li className="flex justify-between ml-24 pl-4">
              <p className="text-right text-[1.9rem] pr-10 w-1/3">Design</p>
              <p className="text-[1.9rem] leading-10 w-2/3">
                Sunmyeong Lee
                <br />
                Koeun Jeong
              </p>
            </li>

            <li className="flex justify-between ml-24 pl-4">
              <p className="text-right text-[1.9rem] pr-10 w-1/3 whitespace-nowrap">
                Front-End Develop
              </p>
              <p className="text-[1.9rem] leading-10 w-2/3">
                Inyoung Jung
                <br />
                Sunmyeong lee
                <br />
                Koeun jeong
                <br />
                Sehwan jang
              </p>
            </li>

            <li className="flex justify-between ml-24 pl-4">
              <p className="text-right text-[1.9rem] pr-10 w-1/3 whitespace-nowrap">
                Back-End Develop
              </p>
              <p className="text-[1.9rem] leading-10 w-2/3">
                Yuyi Kim
                <br />
                Jeongyeon Lim
              </p>
            </li>
          </ul>
          <p className="text-center text-[2.7rem]">✽</p>
          <div>
            <div className="flex justify-center gap-8 pt-12 mt-4">
              <Image
                src="/images/credit/sgLogo-Black.png"
                alt="Sogang University logo"
                width={60}
                height={40}
                layout="fixed"
                style={{ objectFit: 'contain' }}
              />
              <p className="text-[4.5rem]">
                Like<span className="italic">lion</span> So
                <span className="italic">gang</span>
              </p>
            </div>
            <p className="text-center text-[1.2rem] pt-12">
              Likelion Sogang, a leading IT startup club at Sogang University,
              empowers members to bring their ideas to life,
              <br />
              fostering innovation, and achieving notable success with the
              motto, "Let's actualize our ideas with our own hands!"
            </p>
            <p className="text-center text-[1.2rem] pt-12 pb-40">
              © Likelion Sogang. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
