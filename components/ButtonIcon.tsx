import { ButtonIconProps } from "@/types"
import Image from "next/image"

const ButtonIcon = ({iconURL, title, handleClick}: ButtonIconProps) => {
  return (
    <button
        type="button"
        onClick={handleClick}
        className="p-3 hover:bg-gray-200 active:bg-gray-100"
    >
        <div className={`flex justify-center items-center  
             ${title === 'Previous' ? 'flex-row-reverse' : ''}`}
        >

          <span className="max-md:text-[12px]">{title}</span>
          <Image src={iconURL} alt={title} height={20} width={20} className="object-contain" />

        </div>
       
    </button>
  )
}

export default ButtonIcon