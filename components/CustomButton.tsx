"use client"

import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({title, containerStyles, textStyles}: CustomButtonProps) => {
  return (
   <button
        className={`bg-primary_purple px-5 py-3 hover:bg-secondary_purple
                     || ${containerStyles}
                  `}
        type='button'
   >
        <span className={`text-primary_white
                            || ${textStyles}
                        `}>
          {title}
        </span>
        
   </button>
  )
}

export default CustomButton