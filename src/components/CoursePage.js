import React from "react";
import { useParams } from "react-router-dom";

const CoursePage = ({ userData }) => {
  const { courseName } = useParams();
  const decodedCourseName = decodeURIComponent(courseName);
  const course = userData.courses.find((c) => c.title === decodedCourseName);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="max-w-[820px] mx-auto p-8 md:px-16">
      <h1 className="text-4xl font-bold dark:text-white mb-6">{course.title}</h1>
      <div className="flex flex-col w-full gap-8">
        <img src={course.poster} alt={course.title} className="w-full rounded-lg shadow-lg" />
        <div className="flex flex-col gap-4">
          <p className="text-lg dark:text-gray-300">{course.description}</p>
          <p className="text-md font-semibold dark:text-gray-400">Duration: {course.duration}</p>
          <h2 className="text-2xl font-bold dark:text-white mt-4">Topics Covered</h2>
          <ul className="list-disc pl-5 dark:text-gray-300">
            {course.topics.map((topic, index) => (
              <li key={index} className="mb-2">{topic}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
