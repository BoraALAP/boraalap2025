import React from 'react'
import { IoClose } from 'react-icons/io5'

export const CloseButton = ({setClose}: {setClose: (isOpen: boolean) => void}) => {
  return (
    <div className='group hover:cursor-pointer hover:bg-light-softBody dark:hover:bg-dark-softBody rounded-full h-fit p-2 transition-all duration-300'>
      <IoClose className='h-6 w-6 group-hover:text-light-base dark:group-hover:text-dark-base' onClick={() => setClose(false)} />
    </div>
  )
}
