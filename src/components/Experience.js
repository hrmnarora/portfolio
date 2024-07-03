import React from "react";
import data from "../data.json";

const Experience = () => {
  const experienceList = data.experience;

  return (
    <section className="bg-black dark:bg-white text-white dark:text-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="grid gap-6">
          {experienceList.map((experience, index) => (
            <div key={index} className="border border-gray-800 dark:border-white p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">{experience.position}</h3>
              <p className="text-lg">{experience.company}</p>
              <p className="text-sm text-gray-400">{experience.duration}</p>
              <p className="mt-2">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
