"use client"

import { navLinks } from '@/constants'
import Link from 'next/link'
import { useState } from 'react'
import CustomButton from './CustomButton'
import { motion } from 'framer-motion'

const Navbar = () => {

  const [open, setOpen] = useState(false)

  const topVariant = {
    opened: {
        rotate: 45
    },
    closed: {
        rotate: 0
    }
   };

  const midVariant = {
    opened: {
      opacity: 0
    },
    closed: {
      opacity: 1
    }
  };

  const botVariant = {
    opened: {
      rotate: -45
    },
    closed: {
      rotate: 0
    }
  };

  return (
    <header className='w-full padding border-gray-200'>
        <nav className='flex justify-between items-center'>
           <h3 className='text-2xl'>Artoku</h3>
           <div className='max-md:hidden flex justify-center items-center'>

                {navLinks.map((link, index) => (
                  <div key={index}>
                    
                    <Link 
                         href={link.url}
                         className='xl:px-5 px-2 text-[12px] hover:text-slate-600 active:text-slate-400 xl:text-sm'
                    >
                        {link.label}
                    </Link>
                  </div>
                   
                ))}

           </div>
           <div className='max-md:hidden'>
                <CustomButton title= 'Get Started'/>
           </div>

        <div className='hidden max-md:flex'>
          <button 
            className='flex flex-col gap-1'
            onClick={() => setOpen(prev => !prev)}
          >
                  <motion.div 
                    variants={topVariant}
                    animate={open ? 'opened' : 'closed'}
                    className='w-6 h-1 bg-primary_black rounded-md origin-left'>
                  </motion.div>

                  <motion.div 
                     variants={midVariant}
                     animate={open ? 'opened' : 'closed'}
                     className='w-6 h-1 bg-primary_black rounded-md'>

                  </motion.div>

                  <motion.div 
                     variants={botVariant}
                     animate={open ? 'opened' : 'closed'}
                     className='w-6 h-1 bg-primary_black rounded-md origin-left'>

                  </motion.div>
          </button>
        </div>
       

        </nav>

        {open && (
            <div className=' bg-primary_white mt-5 p-5 md:hidden'>
                {navLinks.map((link, index) => (
                  <div key={index} className='flex flex-col'>
                       <Link  
                          href={link.url}
                          className='text-primary_black py-2 hover:text-slate-600 active:text-slate-400'
                       >
                         {link.label}
                      </Link>

                      <div className='w-full border-b  border-gray-300'></div>

                  </div>
                 
                ))}
            </div>
          )}

    </header>
  )
}

export default Navbar