import { advantages } from "@/constants"
import Image from "next/image"

const Advantages = () => {
  return (
    <div className='w-full container__padding py-32 gap-14 flex flex-col'>
      {/*Top */}
        <div className='flex flex-col justify-center items-center gap-4'>

          <p className=' uppercase text-primary_purple font-semibold text-[12px]'>Artoku&apos;s Advantages</p>

          <div className='lg:text-5xl sm:text-3xl text-xl font-medium flex flex-col justify-center items-center'>
            <h2>Why Artoku Can Increase</h2>
            <h2>Your Wealth</h2>
          </div>

          <p className='text-zinc-600 text-[12px] font-medium'>
            Aroku has a system specifically designed to safeguard your wealth
            </p>
        </div>

      
        <div className='flex max-lg:flex-col justify-between items-center gap-20'>
        
        {/*First section */}
            <div className="relative flex justify-center items-end w-full">

                      <Image 
                        src='/images/advantage.png' 
                        alt='management'
                        height={600}
                        width={450}
                        className="object-contain"
                      />

                {/*ATM Card */}
                <div className="absolute">
                    <div className=" bg-primary_white flex justify-between mb-5">

                          <div className="p-5">
                              <div className="flex flex-col">
                                  <h3 className="xl:text-2xl text-xl font-semibold">$204&rsquo;000.00</h3>
                                  <p className="text-zinc-500 text-[11px] font-medium">Your active assets</p>
                              </div>
                              <p className="font-semibold text-[10px] text-zinc-900 mt-10">
                                    • Arranged by Artoku
                                  </p>
                          </div>
                            
                          <div className="flex justify-end items-end">
                                <Image 
                                  src='/images/atm.png' 
                                  alt="atm"
                                  width={160}
                                  height={160}
                                  className="object-contain border"
                                />
                          </div>

                    </div>
                </div> 
            </div>
            {/*End of ATM Card */}

            {/*Second section */}
                <div className="flex flex-col w-full gap-3">
                    {advantages.map((item, index) => (
                    <div 
                      key={index} 
                      className={`${index === 0 ? 'bg-gray-50' : ''} 
                      flex flex-col justify-start items-start p-5`}
                    >
                      <div className="flex">
                      <Image 
                            src={item.iconURL} 
                            alt={item.label}
                            width={30}
                            height={30}
                            className="object-contain mr-5"
                        />
                        <h3 className=" font-semibold text-primary_black">
                          {item.label}
                        </h3>
                      </div>
                       
                        <p className="text-[13px] text-zinc-600 ml-12">{item.paragraph}</p>

                        {/*horizontal line for the first advantage */}
                        <div 
                        className={`${index === 0 ? 'border-b-2 border-gray-800 h-1 w-full mt-2' : ''}`}>
                        </div>
                    </div>
                    
                    ))}
                </div>

        </div>

        

    </div>
  )
}

export default Advantages