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
      className={`App${
        theme === "dark" ? "dark" : ""
      } bg-white dark:bg-zinc-950 min-h-screen`}
    >
      <button
        onClick={handleThemeSwitch}
        className="fixed top-4 right-4 px-2 py-2 bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-950 rounded-full shadow-md hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors z-10"
      >
        {theme === "dark" ? (
          <LuSunDim className="w-6 h-6" />
        ) : (
          <IoMoon className="w-6 h-6" />
        )}
      </button>
      {userData && (
        <div className="max-w-[820px] mx-auto p-8 md:px-16">
          {/* header  */}
          <header className="mb-8 mt-16 flex h-fit">
            <div className=" w-fit">
              <div className="flex gap-2 ">
                <h1 className="text-4xl block lg:text-6xl tracking-tight font-bold mb-3 text-zinc-950 dark:text-white">
                  Hi, I'm {userData.about.name} 👋
                </h1>
              </div>
              <p className="text-xl tracking-tight leading-7 lg:leading-7 lg:text-2xl text-zinc-900 dark:text-zinc-100">
                {userData.about.title}
              </p>
            </div>
            <div className="w-1/3   h-full lg:flex items-center justify-center">
              <div className="rounded-full h-32 w-32 bg-zinc-700 ml-4 overflow-hidden">
                <img src={userData.about.image} alt="" />
              </div>
            </div>
          </header>
          {/* intro  */}

          <section>
            <h2 className="text-xl lg:text-2xl font-bold text-zinc-950 dark:text-white">
              About
            </h2>
            <p className=" leading-6 lg:leading-6 text-lg text-zinc-600 dark:text-zinc-400">
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
                  <div className="w-12 h-12 mr-2 overflow-hidden rounded-full bg-zinc-600">
                    <img src={exp.image} alt="" srcset="" />
                  </div>
                </div>
                <div key={index} className="mb-4">
                  <h3 className="text-medium lg:text-lg font-bold text-zinc-950 dark:text-white">
                    {exp.company}
                  </h3>
                  <p className="text-base font-medium lg:text-medium mt-[-3px] text-zinc-700 dark:text-zinc-300 ">
                    {exp.position}
                  </p>
                  <p className=" text-medium mt-2 tracking-tight leading-6 lg:leading-6 lg:text-lg text-zinc-600 dark:text-zinc-400">
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
                    <h1 className="text-zinc-800 text-2xl dark:text-white">
                      {" "}
                      {course.title}
                    </h1>
                    <div className="group min-w-12 ml-5 flex items-center justify-center min-h-12 dark:bg-zinc-800 bg-zinc-200 rounded-full hover:dark:bg-zinc-950 transition-colors cursor-pointer">
                      <FaArrowUp className=" dark:text-white text-xl rotate-45 group-hover:rotate-2 transition-transform" />
                    </div>
                  </div>
                  <div className="w-full h-[200px] dark:bg-zinc-800 bg-zinc-200 rounded-lg"></div>
                </div>
              ))}
            </div>
          </section>
          <div className="w-full h-[1px] bg-zinc-300 dark:bg-zinc-900 my-10"></div>

          {/* contact us  */}

          <section class="">
            <div class=" w-full flex flex-col">
              <h2 class="text-2xl font-bold text-zinc-950 dark:text-white">
                Contact Us
              </h2>
              <p class="text-medium tracking-tight leading-6 lg:leading-6 lg:text-lg text-zinc-600 dark:text-zinc-400">
                Got a technical issue? Want to send feedback about a beta
                feature? Need details about our Business plan? Let us know.
              </p>
              <form action="#" class="space-y-8 mt-6">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="shadow-sm bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-zinc-900 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="subject"
                    class="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    class="block p-3 w-full text-sm text-zinc-900 bg-zinc-50 rounded-lg border border-zinc-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-zinc-900 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div class="sm:col-span-2">
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    class="block p-2.5 w-full text-sm text-zinc-900 bg-zinc-50 rounded-lg shadow-sm border border-zinc-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-zinc-900 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="py-3 px-5 text-sm font-medium text-center text-zinc-900 dark:text-zinc-100 rounded-lg bg-primary-900 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-zinc-200 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-900 dark:focus:ring-primary-800"
                >
                  Send message
                </button>
              </form>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
