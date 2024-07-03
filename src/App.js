import React, { useEffect, useState } from "react";
import dummyData from "./data.json"; // Adjust path as per your project structure
import "./index.css"; // Ensure your CSS file is imported
import { FaArrowUp } from "react-icons/fa6";
import { LuSunDim } from "react-icons/lu";
import { IoMoon } from "react-icons/io5";
function App() {
  const [theme, setTheme] = useState("light"); // Initialize with light theme
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // For demonstration, setting userData directly from dummyData
    setUserData(dummyData);

    // Detect user's preferred theme
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    // Update HTML root element class based on theme
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    // Toggle between light and dark themes
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`App transition-colors ${
        theme === "dark" ? "dark" : ""
      } bg-white dark:bg-zinc-950 min-h-screen`}
    >
      <button
        onClick={handleThemeSwitch}
        className="fixed top-4 right-4 px-2 py-2 bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-950 rounded-full shadow-md hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors z-10"
      >
        {theme === "dark" ? <LuSunDim className="w-6 h-6" /> : <IoMoon className="w-6 h-6" />}
      </button>
      {userData && (
        <div className="max-w-4xl mx-auto p-8">
          {/* header  */}
          <header className="mb-8 mt-24 flex h-fit">
            <div className="lg:w-2/3 w-full">
              <div className="flex gap-2 ">

              <h1 className="text-4xl block lg:text-6xl font-bold mb-4 text-zinc-950 dark:text-white">
              Hi, I'm {userData.about.name}{" "}👋
              </h1>
                

                              
              </div>
              <p className="text-xl lg:text-2xl text-zinc-700 dark:text-zinc-300">
                {userData.about.title}
              </p>
            </div>
            <div className="w-1/3 hidden  h-36 lg:flex items-center justify-center">
              <div className="rounded-full h-36 w-36 bg-zinc-700">
                {/* image here  */}
              </div>
            </div>
          </header>
          {/* intro  */}

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-zinc-950 dark:text-white">
              About
            </h2>
            <p className="text-medium lg:text-lg text-zinc-600 dark:text-zinc-400">
              {userData.about.description}
            </p>
          </section>

          <div className="w-full h-[1px] bg-zinc-300 dark:bg-zinc-900 my-10"></div>

          {/* experiance  */}
          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-zinc-950 dark:text-white">
              Work Experience
            </h2>
            {userData.experience.map((exp, index) => (
              <div className="gap-2 flex mt-4">
                <div className="">
                  <div className="w-12 h-12 rounded-full bg-zinc-600"></div>
                </div>
                <div key={index} className="mb-4">
                  <h3 className="text-lg lg:text-xl font-semibold text-zinc-950 dark:text-zinc-100">
                    {exp.company}
                  </h3>
                  <p className="text-medium lg:text-lg text-zinc-700 dark:text-zinc-300 ">{exp.position}</p>
                  <p className="text-medium lg:text-lg text-zinc-600 dark:text-zinc-400">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </section>

          <div className="w-full h-[1px] bg-zinc-300 dark:bg-zinc-900 my-10"></div>

          {/* courses */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-950 dark:text-white">
              Courses
            </h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
            {userData.courses.map((course, index) => (
              <div className="dark:bg-zinc-900 bg-zinc-100 shadow-lg dark:shadow-black w-full h-fit p-4 rounded-lg mt-5">
                <div className="w-full h-fit px-2 pb-4 flex items-center justify-between">
                  <h1 className="text-zinc-800 text-2xl dark:text-white"> {course.title}</h1>
                  <div className="group min-w-12 ml-5 flex items-center justify-center min-h-12 dark:bg-zinc-800 bg-zinc-200 rounded-full hover:dark:bg-zinc-950 transition-colors cursor-pointer"><FaArrowUp className=" dark:text-white text-xl rotate-45 group-hover:rotate-2 transition-transform"/>
                  </div>
                </div>
                <div className="w-full h-[200px] dark:bg-zinc-800 bg-zinc-200 rounded-lg"></div>
              </div>

              // <div key={index} className="mb-4">
              //   <h3 className="text-xl font-bold text-zinc-950 dark:text-white">
              //     {course.title}
              //   </h3>
              //   <p className="text-zinc-700 dark:text-zinc-400">
              //     {course.provider}
              //   </p>
              //   <p className="text-zinc-700 dark:text-zinc-300">
              //     {course.duration}
              //   </p>
              //   <a
              //     href={course.certificate}
              //     className="text-blue-500 dark:text-blue-400"
              //   >
              //     Certificate
              //   </a>
              // </div>
            ))}
            </div>
            
          </section>
          <div className="w-full h-[1px] bg-zinc-300 dark:bg-zinc-900 my-10"></div>

          {/* Feedback  */}
          <section>
            <h2 className="text-2xl font-bold text-zinc-950 dark:text-white">
              Student Feedbacks
            </h2>
            

            


          </section>
        </div>
      )}
    </div>
  );
}

export default App;
