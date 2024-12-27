import { Reveal } from '@/components/Reveal'
import Image from 'next/image'
import React from 'react'

export const FullImageContainer = ({src, alt}: {src: string, alt: string}) => {
  return (
    <Reveal>
      <div className="relative w-full h-auto   ">
         <Image src={src} alt={alt} width={3000} height={1100}  priority placeholder="blur" blurDataURL={src} className="pointer-events-none select-none [-webkit-user-drag:none] [-webkit-touch-callout:none]"  /> 
      </div>
    </Reveal>
  )
}
