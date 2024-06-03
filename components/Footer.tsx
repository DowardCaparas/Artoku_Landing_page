import { footerLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
   <footer className=' w-full container__padding mt-20'>
    {/*First section */}
        <div className='flex justify-between item-center'>
            <h3 className='text-2xl'>Artoku</h3>
            <div className="flex justify-center items-center gap-4">
            <Image 
                src='/twitter.svg' 
                alt='twitter' 
                width={30} 
                height={30} 
                className='object-contain' 
            />
             <Image 
                src='/linkedin.svg' 
                alt='linkedin' 
                width={30} 
                height={30} 
                className='object-contain' 
            />
            </div>
        </div>

    {/*Line */}
        <div className="w-full border-b-2 mt-5"></div>

    {/*Second section */}
        <div className="flex max-xl:flex-col justify-between items-start mt-6 text-sm gap-6">

            {/*Links */}
            <div className="grid md:grid-cols-4 grid-flow-row grid-cols-2 gap-10">
               {footerLinks.map((link, index) => (
                    <div key={index}>

                        <h3 className="font-semibold text-md">{link.title}</h3>

                        <div className="flex flex-col gap-3 mt-4">
                            {link.links.map((item, index) => (
                                <div key={index}>
                                     <Link 
                                        href={item.url}
                                        className="text-slate-700"
                                     >
                                        {item.title}
                                     </Link>
                                </div>
                              
                            ))}
                        </div>
                    </div>
               ))}
            </div>

            

        </div>
        {/*Privacy Policy, Terms */}
        <div className="flex items-center justify-between max-md:flex-col py-10 gap-4">
                <div className='flex justify-between items-center gap-4 text-sm'>
                    <Link href='/'>
                         Privacy Policy
                    </Link>
                    <Link href='/'>
                         Terms
                    </Link>
                </div>
              
               <p className="text-sm">&copy; Caparas&rsquo; Dounhuward 2024 All Rights Reserved</p>

            </div>

   </footer>
  )
}

export default Footer