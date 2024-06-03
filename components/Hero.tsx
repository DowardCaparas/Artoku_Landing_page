
import CustomButton from './CustomButton'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='w-full container__padding flex justify-between items-center 
    max-lg:flex-wrap gap-4'>

      {/*Left Side */}
        <div className='flex flex-col justify-start items-start gap-6 max-lg:mt-16'>
            <h1 className='text-6xl max-lg:text-[42px] max-md:text-[38px] max-sm:text-[32px] 
            font-medium text-primary_black'>
                Manage your assets and money with Artoku
          </h1>
            <p className='text-sm w-2/3 text-zinc-600'>
                  We manage assets and money from investors, we have many
                  financial planners for the development of your assets..
                </p>

            <div className='flex justify-center items-center gap-4'>
              <CustomButton title='Get started Now'/>
              <p className='text-zinc-600 text-sm font-semibold'>4,8 Stars</p>
            </div>
        </div>

      {/*Right Side */}
      <div className='md:w-full flex justify-end items-end w-2/2 ml-20 sm:ml-48'>
          <Image 
                src='/dist/images/heroBG.png' 
                alt='hero image' 
                height={300}
                width={400}
                quality={100}
                className='object-contain'
          />
      </div>
    </div>
  )
}

export default Hero