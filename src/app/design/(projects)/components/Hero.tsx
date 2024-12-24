import { H3, H2 } from '@/components/Reveal'
import React from 'react'

export const Hero = ({title, subtitle}: {title: string, subtitle: string}) => {
  return (
    <div className="flex h-[800px] flex-col justify-end gap-10 bg-black bg-gradient-to-b from-transparent to-light-bg px-[5vw] py-32">
          <div className="flex flex-col items-center justify-start gap-6">
            <H2 className="text-center text-[40px] font-medium leading-10 text-light-body">
              {title}
            </H2>
            <H3 className="text-center text-lg font-medium leading-normal">
              {subtitle}
            </H3>
          </div>
        </div>
  )
}
