import Image from 'next/image'
import CustomButton from './CustomButton'
import { artoku } from '@/constants'

const IncreaseWealth = () => {

  const artokuWithoutFirstPic = artoku.slice(1);
  const artokuFirstPicOnly = artoku.slice(0, 1);

  return (
    <div className='w-full container__padding'>
        <div className='bg-primary_black py-8 px-12 flex max-md:flex-wrap justify-between items-center gap-10'>

            {/*Left Side */}
            <div className='flex flex-col justify-start items-start gap-7  w-96'>

                <h1 className='text-white md:text-5xl text-2xl'>
                    Increase wealth with Artoku
                </h1>
                <p className='text-zinc-300 text-sm'>
                    Use Artokue to get the most out of every customer interaction. Get started today.
                </p>

                <CustomButton
                    title='Get Started Now'
                />

            </div>

            {/*Right Side */}
            <div className='flex justify-center items-center gap-6'>
                <div>
                {artokuFirstPicOnly.map((item, index) => (
                    <div key={index}>
                         <Image
                            src={item.photo}
                            alt='artoku'
                            width={135}
                            height={100}
                            className='object-contain'
                            quality={100}
                        />
                    </div>
                ))}
                </div>
                
                <div className='flex flex-col justify-start items-start gap-6'>
                {artokuWithoutFirstPic.map((item, index) => (
                    <div key={index}
                         className={`${index === 0 ? 'w-full' : 'w-2/3'}`}
                    >
                        <Image
                            src={item.photo}
                            alt='artoku'
                            width={200}
                            height={120}
                            className='object-contain w-full'
                            quality={100}
                        />
                    </div>
                ))}
            </div>

            </div>
           
        </div>
       
    </div>
  )
}

export default IncreaseWealth  