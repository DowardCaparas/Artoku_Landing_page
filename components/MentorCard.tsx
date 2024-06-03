"use client";

import { mentors } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import { chevronleft, chevronright } from "@/public";

const MentorCard = () => {
  const [mentorIndex, setMentorIndex] = useState(0);

  const showPrevMentor = () => {
    setMentorIndex((index) => {
      if (index === 0) return mentors.length - 1;
      return index - 1;
    });
  };

  const showNextMentor = () => {
    setMentorIndex((index) => {
      if (index === mentors.length - 1) return 0;
      return index + 1;
    });
  };

  return (
    <div className="max-md:w-full w-2/3 lg:w-1/2">
      <div className="bg-slate-100 border-2 rounded-tl-lg rounded-tr-lg grid">
        <div className="flex justify-between items-center">
          <button
            onClick={showPrevMentor}
            className="hover:bg-gray-200 h-full active:bg-zinc-200"
          >
            <Image src={chevronleft} alt="Previous" width={30} height={30} />
          </button>
          <Image
            src={mentors[mentorIndex].image}
            alt="mentor"
            height={200}
            width={300}
            className="object-contain place-self-center"
          />

          <button
            onClick={showNextMentor}
            className="hover:bg-gray-200 h-full active:bg-zinc-200"
          >
            <Image src={chevronright} alt="Next" width={30} height={30} />
          </button>
        </div>

        {/*Details */}
        <div className="bg-white p-3">
          <span className="flex justify-between items-center">
            <p className="font-medium text-lg">{mentors[mentorIndex].name}</p>
            <p className="text-sm">{mentors[mentorIndex].location}</p>
          </span>

          <div className="flex ju items-center gap-2">
            <p>{mentors[mentorIndex].position}</p>
            <p className="text-sm text-slate-500">
              ({mentors[mentorIndex].reviews} reviews)
            </p>
          </div>
          
          <div className="border-b-2 border-slate-400 mt-4"></div>

          <div className="p-2 text-sm grid grid-cols-2 grid-flow-row gap-4">
            <p>{mentors[mentorIndex].experience} experience</p>
            <p>{mentors[mentorIndex].attendance} attendance</p>
            <p>{mentors[mentorIndex].sessions} sessions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
