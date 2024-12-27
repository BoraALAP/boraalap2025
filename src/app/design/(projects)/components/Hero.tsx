import { H3, H2 } from '@/components/Reveal'
import Image from 'next/image'
import React from 'react'


export const Hero = ({title, subtitle, src}: {title: string, subtitle: string, src: string}) => {
  return (
    <section className="relative h-[80vh] w-full">
      {/* Background Image */}
      <div className="absolute inset-0 -z-0">
        <Image
          src={src}
          alt="Background"
          layout="fill"
          
          className="pointer-events-none select-none object-contain"
          priority
          placeholder="blur"
          blurDataURL={src}
        />
      </div>

      {/* Text Content */}
      <div className="relative bg-gradient-to-b from-transparent to-light-bg flex flex-col items-center justify-end h-full pb-[10vh] text-center  px-4">
        <H2>{title}</H2>
        <H3 className="text-light-body dark:text-dark-body">{subtitle}</H3>
      </div>
    </section>
  )
}
