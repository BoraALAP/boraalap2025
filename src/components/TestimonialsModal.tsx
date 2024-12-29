"use client"

import Image, { StaticImageData } from 'next/image'
import { H3, H4, P } from './Reveal'
import { CloseButton } from './subelements/CloseButton'

export const TestimonialsModal = ({quote, name, title, image, setIsOpen}: {quote?: string[], name: string, title: string, image: StaticImageData, setIsOpen: (isOpen: boolean) => void}) => {

  return (
    <div className='h-screen w-screen fixed top-0 left-0 right-0 bottom-0 z-40  p-[5vw] pb-[calc(5vw+100px)] flex items-center justify-center' id="testimonials-modal">
      <div className={`z-50 max-h-full  flex max-w-[640px] flex-col gap-6 rounded-2xl bg-light-base dark:bg-dark-base p-8`} 
      >
        <div className="flex flex-col gap-2">
          <div className="inline-flex justify-between">
            <div className="flex flex-row gap-4 items-center">

              <Image
                className="h-14 w-14 rounded-full"
                src={image}
                alt={name}
                width={54}
                height={54}
              />
              <div className="flex flex-col gap-1">
                <H3 className="text-lg font-medium text-light-body dark:text-dark-body">{name}</H3>
                <H4 className="text-base font-semibold text-light-softBody dark:text-dark-softBody">
                  {title}
                </H4>
              </div>
            </div>

            <CloseButton setClose={setIsOpen} />
          </div>
        </div>
        <div className="overflow-y-auto flex flex-col gap-2">
            {quote && quote.map((q, index) => <P key={index} className="max-w-none  flex-col gap-2">{q}</P>)}
        </div>
      </div>
      <div className='absolute top-0 bottom-0 left-0 right-0 dark:bg-light-base/25 bg-dark-base/25' onClick={() => setIsOpen(false)}/>
    </div>
  )
}
