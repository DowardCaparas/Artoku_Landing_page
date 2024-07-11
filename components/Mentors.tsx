import MentorCard from "./MentorCard";
import { mentors } from "@/constants";

const Mentors = () => {
  return (
    <div id="mentors" className="container__padding py-28 flex flex-col gap-10">
      <div className="flex flex-col justify-start items-start gap-4 md:w-2/3">
        <p className=" uppercase text-primary_purple font-semibold text-[12px]">
          Artoku&apos;s Mentors
        </p>

        <div className="lg:text-5xl sm:text-3xl text-xl font-medium">
          <h2>Advice from experienced professionals</h2>
        </div>

        <p className="text-zinc-600 text-[14px] font-medium md:w-2/3">
          We combine the best of financial planning&rsquo; investment
          management&rsquo; and tax strategy
        </p>
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {mentors.map((mentor, index) => (
          <div key={index}>
            <MentorCard
                name = {mentor.name}
                position = {mentor.position}
                location = {mentor.location}
                sessions = {mentor.sessions}
                reviews = {mentor.reviews}
                experience = {mentor.experience}
                attendance = {mentor.attendance}
                image = {mentor.image}
            />

          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;
