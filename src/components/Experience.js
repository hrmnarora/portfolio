import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Experience = ({userData}) => {

  return (
    <section>
    <h2 className="text-xl animate-blurFade lg:text-2xl font-bold text-zinc-950 dark:text-white">
      Work Experience
    </h2>
    {userData.experience.map((exp, index) => (
      <div className="gap-2 group flex mt-4 cursor-pointer">
        <div className="">
          <div className="w-12 animate-blurFade h-12 mr-2 overflow-hidden rounded-full bg-zinc-600">
            <img src={exp.image} alt="" srcset="" />
          </div>
        </div>
        <div key={index} className="mb-4 flex flex-col">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex gap-1 items-center flex-row ">
                <h3 className="text-medium animate-blurFade lg:text-lg font-bold text-zinc-950 dark:text-white">
                  {exp.company}
                </h3>
                <p className="-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 text-zinc-300 transition-all mt-1 text-medium"> <IoIosArrowForward /> </p>
              </div>

              <p className="text-base animate-blurFade font-medium lg:text-medium mt-[-3px] text-zinc-700 dark:text-zinc-300 ">
                {exp.position}
              </p>
            </div>
            <p className="text-medium animate-blurFade mt-2 tracking-tight leading-6 lg:leading-6 lg:text-lg text-zinc-600 dark:text-zinc-400">
              January 23 - July 2024{" "}
            </p>
          </div>

          <p className=" text-medium animate-blurFade mt-2 tracking-tight leading-6 lg:leading-6 lg:text-lg text-zinc-600 dark:text-zinc-400">
            {exp.description}
          </p>
        </div>
      </div>
    ))}
  </section>
  );
};

export default Experience;
