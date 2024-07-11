import { MentorCardProps } from "@/types";
import Image from "next/image";

const MentorCard = ({
  name,
  position,
  location,
  sessions,
  reviews,
  experience,
  attendance,
  image,
}: MentorCardProps) => {
  return (
    <div className="group relative rounded-xl border-gray-300 border flex flex-col gap-2 cursor-pointer">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className="object-contain rounded-t-xl w-full bg-gray-200"
      />
      <div className="bg-white px-2 mb-2 rounded-b-xl text-sm">

          <div className="flex gap-2 items-center justify-between">
            <h3 className="font-semibold">{name}</h3>
            <p className="text-[12px]">{location}</p>
          </div>

          <div className="flex gap-2 items-center justify-between">
            <p>{position}</p>
            <p className="text-[12px]">({reviews})</p>
          </div>
          <p className="text-[12px]">{experience}</p>
          {/* border line*/}
          <div className="border-t border-gray-500 my-2"></div>
          <div className="flex gap-2 items-center justify-between ">
            <p>{sessions}</p>
            <p>{attendance}</p>
          </div>

      </div>

      {/* Hover background */}
      <div
        className="absolute opacity-0 group-hover:opacity-100 inset-0 bg-gray-300 
      bg-opacity-60 backdrop-blur-sm rounded-xl transition-all duration-300"
      ></div>
    </div>
  );
};

export default MentorCard;
