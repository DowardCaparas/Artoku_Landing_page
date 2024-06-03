"use client";

import { MentorCardProps } from "@/types";
import Image from "next/image";
import { useState } from "react";
import ButtonIcon from "./ButtonIcon";
import { mentors } from "@/constants";

const MentorCard = ({
  name,
  position,
  location,
  sessions,
  reviews,
  experience,
  attendance,
  profilePic,
}: MentorCardProps) => {
  {
    /*Image Slider */
  }
  const [imageIndex, setiImageIndex] = useState(0);

  const showNextMentor = () => {
    setiImageIndex((index) => {
      if (index === 0) return mentors.length - 1;
      return index - 1;
    });
  };

  const showPrevMentor = () => {
    setiImageIndex((index) => {
      if (index === mentors.length - 1) return 0;
      return index + 1;
    });
  };

  {
    /*End of Image Slider */
  }

  {
    /*View Details */
  }
  const [open, setOpen] = useState(false);

  const showDetails = () => {
    setOpen((prev) => !prev);
  };

  {
    /*End of View Details */
  }

  return (
    <div className="md:w-1/2 mt-16">
      <div className="flex justify-between items-center gap-4 md:py-2 py-1">
        <ButtonIcon
          title="Previous"
          handleClick={showPrevMentor}
          iconURL="/chevronleft.svg"
        />
        <ButtonIcon
          title="Next"
          handleClick={showNextMentor}
          iconURL="/chevronright.svg"
        />
      </div>

      <div className="bg-slate-50">
        <div className="bg-gray-200 content-center rounded-tl-lg rounded-tr-lg">
          <Image
            src={profilePic}
            alt={name}
            height={400}
            width={400}
            className="object-contain"
          />
        </div>

        {/*Details */}
        {/*Top */}
        <div className="p-5 gap-4 flex flex-col">
          <div className="flex justify-between items-center">
            <h3 className="md:text-lg text-[14px] font-medium text-primary_black">
              {name}
            </h3>

            <ButtonIcon
              title={`${open ? "Hide Details" : "View Details"}`}
              iconURL={`${open ? "/chevronup.svg" : "/chevrondown.svg"}`}
              handleClick={showDetails}
            />
          </div>

          {/*End of Top */}

          {open && (
            <div className="transition duration-300 ease-in-out">
              <p>{position}</p>
              <p>{location}</p>

              <div className="flex items-center justify-start gap-2">
                <p>{sessions} sessions</p>
                <p className="text-sm text-slate-700">({reviews} reviews)</p>
              </div>

              <div className="w-full border-primary_black border-b-2 py-2"></div>

              <div className="p-5 flex justify-between items-start">
                <div className="content-start-col">
                  <p className="text-slate-700">Experience</p>
                  <p className="font-bold">{experience} years</p>
                </div>

                <div className="content-start-col">
                  <p className="text-slate-700">Avg. Attendance</p>
                  <p className="font-bold">{attendance}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
