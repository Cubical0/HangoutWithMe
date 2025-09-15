import React, { useRef } from 'react'
import { ContainerScroll } from '../ui/container-scroll-animation'
import { Spotlight } from '../ui/spotlight-new'
import { BackgroundBeamsWithCollision } from '../ui/background-beams-with-collision'

const Hero = () => {
  const discordRef = useRef<HTMLDivElement>(null);

  return (
      <div className="flex flex-col overflow-hidden">
         
          <Spotlight />
            <BackgroundBeamsWithCollision collisionTargetRef={discordRef}>
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
            Take control of your <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
Crypto Investments
              </span>
            </h1>
          </>
        }
        discordRef={discordRef}
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-300 text-center">
            Your crypto investment platform content goes here
          </p>
        </div>
              </ContainerScroll>
              </BackgroundBeamsWithCollision>
    </div>
  )
}

export default Hero