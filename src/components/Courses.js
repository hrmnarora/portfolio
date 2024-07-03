import React from "react";
import data from "../data.json";

const Courses = () => {
  const coursesList = data.courses;

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">My Courses</h2>
        <div className="grid gap-6">
          {coursesList.map((course, index) => (
            <div key={index} className="border border-gray-800 dark:border-white p-4 rounded-md shadow-md">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-lg">{course.provider}</p>
              <p className="text-sm text-gray-400">{course.duration}</p>
              <a href={course.certificate} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-200 hover:underline">View Certificate</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
