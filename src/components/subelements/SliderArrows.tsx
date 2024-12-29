import React from 'react'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'

export const SliderNextArrow = ({disabled, handleNext}: {disabled: boolean,  handleNext: () => void}) => {
  return (
    <button
    onClick={handleNext}
    className={`absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-light-base/90 dark:bg-dark-base/90 p-3 shadow-md transition-all ${
      !disabled ? "opacity-100 hover:scale-110" : "cursor-not-allowed opacity-40"
    }`}
    disabled={disabled}
    aria-label="Next Button"
  >
    <IoChevronForward size={24} className="text-light-body dark:text-dark-body"/>
  </button>
  )
}

export const SliderPrevArrow = ({disabled, handlePrev}: {disabled: boolean, handlePrev: () => void}) => {
  return (
    <button
    onClick={handlePrev}
    className={`absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-light-base/90 dark:bg-dark-base/90 p-3 shadow-md transition-all ${
      !disabled ? "opacity-100 hover:scale-110" : "cursor-not-allowed opacity-40"
    }`}
    disabled={disabled }
    aria-label="Previous Button"
  >
    <IoChevronBack size={24} className="text-light-body dark:text-dark-body"/>
  </button>
  )
}