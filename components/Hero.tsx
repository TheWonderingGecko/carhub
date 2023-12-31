'use client'

import Image from 'next/image'
import { Custombutton } from '@/components'

const Hero = () => {
  const handleScroll = () => {}
  return (
    <div className=" hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          {' '}
          Find, book, rent a car—quick and super easy!{' '}
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <Custombutton
          title="Get Started"
          ContainerStyles="bg-primary-blue text-white rounded-full mt-10"
          HandleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" className="object-contain" fill />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  )
}
export default Hero
