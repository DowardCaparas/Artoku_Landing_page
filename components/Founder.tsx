import Image from "next/image"

const Founder = () => {
  return (
    <div className='container__padding'>
       <div className='bg-primary_black text-white px-10 py-20 
       flex max-lg:flex-col justify-between gap-10'>

            <div className='md:w-3/4'>
                <h1 className='sm:text-2xl text-2xl'>
                &quot;My business investment portfolio has increased rapidly 
                    by 20% this year&rsquo; which is very satisfying.&quot;
                </h1>
            </div>

            <div className='flex justify-end items-center gap-4 w-full'>
                
                    <Image 
                        src='/images/founder.png' 
                        alt='founder' 
                        width={80} 
                        height={80} 
                        className="object-contain"
                    />
                <div className="flex flex-col justify-center items-start text-sm">
                    <h2 className='font-medium text-[12px]'>WARREN ADLY</h2>
                    <p className="text-gray-300 text-[12px]">Founder Ternak Duit</p>
                </div>
            </div>
            


       </div>
    </div>
  )
}

export default Founder