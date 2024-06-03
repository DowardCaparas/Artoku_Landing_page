import { mentors } from "@/constants";
import MentorCard from "./MentorCard";

const Mentors = () => {
  return (
    <div className="container__padding py-14 flex max-lg:flex-wrap justify-between items-center">
      <div className="flex flex-col justify-start items-start gap-4 md:w-2/3">
        <p className=" uppercase text-primary_purple font-semibold text-[12px]">
          Artoku&apos;s Advantages
        </p>

        <div className="lg:text-5xl sm:text-3xl text-xl font-medium">
          <h2>Advice from experienced professionals</h2>
        </div>

        <p className="text-zinc-600 text-[14px] font-medium md:w-2/3">
          We combine the best of financial planning&rsquo; investment
          management&rsquo; and tax strategy
        </p>
      </div>

      {mentors.map((item, index) => (
        <MentorCard
          key={index}
          name={item.name}
          position={item.position}
          location={item.location}
          sessions={item.sessions}
          reviews={item.reviews}
          experience={item.experience}
          attendance={item.attendance}
          profilePic={item.profilePic}
        />
      ))}
    </div>
  );
};

export default Mentors;
