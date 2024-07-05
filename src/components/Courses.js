import React from "react";
import { FaArrowUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Courses = ({ userData }) => {
  return (
    <section>
      <h2 className="text-2xl animate-blurFade font-bold text-zinc-950 dark:text-white">
        Courses
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
        {userData.courses.map((course, index) => (
          <div
            key={index}
            className="dark:bg-zinc-900 animate-blurFade bg-zinc-100 shadow-lg dark:shadow-black w-full h-fit p-4 rounded-lg mt-5"
          >
            <div className="w-full h-fit px-2 pb-4 flex items-center justify-between">
              <h1 className="text-zinc-800 text-2xl dark:text-white">
                {course.title}
              </h1>
              <Link to={`/courses/${course.title}`} className="group min-w-12 ml-5 flex items-center justify-center min-h-12 dark:bg-zinc-800 bg-zinc-200 rounded-full hover:dark:bg-zinc-950 transition-colors cursor-pointer">
                <FaArrowUp className=" dark:text-white text-xl rotate-45 group-hover:rotate-2 transition-transform" />
              </Link>
            </div>
            <div  className="w-full h-[200px] dark:bg-zinc-800 bg-zinc-200 rounded-lg block"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
