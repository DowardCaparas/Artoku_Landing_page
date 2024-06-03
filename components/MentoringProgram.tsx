import { counts, mentorBenefits } from '@/constants'
import Image from 'next/image'
import CustomButton from './CustomButton'
import { check } from '@/public'

const MentoringProgram = () => {
  return (
    <div className='container__padding w-full gap-y-28 py-10 flex flex-col max-lg:mt-20'>

    {/*First section */} 
        <div className='grid lg:grid-cols-4 grid-flow-row gap-4 grid-cols-2'>
            {counts.map(item => (
                <div key={item.title} className='flex flex-1 flex-col justify-center items-center gap-6'>

                    <div className='h-[2px] w-full bg-primary_gray'></div>

                    <h2 className='md:text-4xl text-2xl font-medium text-primary_black'>{item.population}</h2>
                    <p className='text-gray-500 text-[12px]'>{item.title}</p>
                </div>
            ))}
        </div>

    {/*Second section */}
        <div className='bg-primary_black flex max-lg:flex-col justify-between 
        items-start gap-8 p-10'>

            <div>
                <div className='flex flex-col items-start justify-start w-2/3 gap-4'>
                    <p className='text-primary_purple text-sm'>MENTORING PROGRAM</p>
                    <h1 className='text-primary_white text-4xl'>Benefits of Joining Artoku for you</h1>
                    <p className='text-zinc-300'>
                        Artoku has many experienced mentors who are ready to help you manage your wealth
                    </p>
                </div>
                <CustomButton 
                    title='Learn More' 
                    containerStyles='border bg-transparent mt-10 hover:bg-zinc-800'
                    textStyles='text-sm'
                />
            </div>
           

        {/*Mentoring */}
            <div className='bg-primary_white p-5 flex flex-col justify-start items-start gap-4'>

                <div className='bg-white rounded-full p-2'>
                    <p className='text-primary_black text-sm font-medium'>$500,000 IN ASSETS</p>
                </div>
                <div className='flex gap-2 justify-center items-center'>
                    <h3 className='text-2xl font-semibold'>Mentoring</h3>
                    <Image 
                        src='/rightarrow.svg' 
                        alt='arrow'
                        height={20} 
                        width={20} 
                        className='object-contain'
                    />
                </div>
               

                {mentorBenefits.map((item, index) => (
                    <div key={index} className='flex jus items-start gap-2'>
                        <Image src= {check} 
                            alt='check' 
                            height={20} 
                            width={20} 
                            className='object-contain'
                        />

                        <p className='text-primary_gray text-sm'>{item.label}</p>

                    </div>
                    
                ))}

            </div>

        </div>
    </div>
  )
}

export default MentoringProgram