import { Reveal } from '@/components/Reveal'
import Image from 'next/image'
import React from 'react'

export const ImageContainer = ({src, alt}: {src: string, alt: string}) => {
  return (
    <Reveal>
      <div className="relative w-full h-auto max-w-[1100px] rounded-xl md:rounded-3xl mx-auto overflow-hidden ">
        <Image src={src} alt={alt} width={1100} height={1100}  priority placeholder="blur" blurDataURL={src} className="pointer-events-none select-none [-webkit-user-drag:none] [-webkit-touch-callout:none]" /> 
      </div>
    </Reveal>
  )
}
