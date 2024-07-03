import React from "react";
import data from "../data.json";

const About = () => {
  const { name, title, description, image } = data.about;

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={image}
            alt={name}
            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-lg"
          />
          <div className="md:ml-8 mt-4 md:mt-0">
            <h2 className="text-3xl font-bold mb-4">{name}</h2>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-lg">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
