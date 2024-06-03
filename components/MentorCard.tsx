"use client";

import { mentors } from "@/constants";
import Image from "next/image";

const MentorCard = () => {

  const filteredDetails = mentors.slice(0, 3)

  return (
    <div>
      <div className="grid grid-cols-3 grid-flow-row gap-4">
        {filteredDetails.map((item, index) => (
          <div key={index} className="bg-slate-100 border-2 rounded-tl-lg rounded-tr-lg grid">
            <Image
              src={item.image}
              alt="mentor"
              height={100}
              width={250}
              className="object-contain place-self-center"
            />

            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorCard;
