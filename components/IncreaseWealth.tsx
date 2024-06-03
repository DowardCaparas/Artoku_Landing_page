import Image from "next/image";
import CustomButton from "./CustomButton";
import { mentor, building, management } from "@/public/images";

const IncreaseWealth = () => {
  return (
    <div id='customers' className="w-full container__padding py-16">
      <div className="bg-primary_black py-8 px-12 flex max-lg:flex-wrap justify-between items-center gap-10">
        {/*Left Side */}
        <div className="flex flex-col justify-start items-start gap-7  w-96">
          <h1 className="text-white md:text-5xl text-2xl">
            Increase wealth with Artoku
          </h1>
          <p className="text-zinc-300 text-sm">
            Use Artokue to get the most out of every customer interaction. Get
            started today.
          </p>

          <CustomButton title="Get Started Now" />
        </div>

        {/*Right Side */}
        <div className="flex justify-center items-center gap-4">
          <Image
            src={building}
            alt="building"
            width={100}
            height={100}
            className="object-contain"
          />

          <div className="flex flex-col justify-start items-start gap-4">
            <Image
              src={management}
              alt="building"
              width={250}
              height={250}
              className="object-contain"
            />
            <Image
              src={mentor}
              alt="building"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncreaseWealth;
