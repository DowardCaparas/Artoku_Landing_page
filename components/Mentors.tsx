import MentorCard from "./MentorCard";


const Mentors = () => {
  return (
    <div className="container__padding py-28 flex flex-col gap-10">
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

      <MentorCard/>
       
    </div>
  );
};

export default Mentors;
