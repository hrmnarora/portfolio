import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import dummyData from "./data.json"; // Adjust path as per your project structure
import "./index.css"; // Ensure your CSS file is imported
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Experience from "./components/Experience";
import About from "./components/About";
import ThemeToggle from "./components/ThemeToggle";
import CoursePage from "./components/CoursePage"; // New course page component
import { Link, Element } from "react-scroll";

function App() {
  const [theme, setTheme] = useState("light");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
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
    <Router>
      <div
        className={`App transition-transform ${
          theme === "dark" ? "dark" : ""
        } bg-white dark:bg-zinc-950 min-h-screen`}
      >
        <ThemeToggle theme={theme} handleThemeSwitch={handleThemeSwitch} />

        <nav className="fixed z-50 bottom-5 w-fit  bg-zinc-100 dark:bg-zinc-950 -translate-x-[50%] mx-[50%] rounded-full border-[2px] border-zinc-200 dark:text-zinc-100  dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
          <ul className="flex  transition-all duration-150 justify-center overflow-hidden">
            <li src="/" className="">
              <div className="dark:hover:bg-zinc-900 hover:bg-zinc-200 hover:px-6 transition-all rounded-s-full p-4 cursor-pointer ">
                <Link
                  className=" flex items-center justify-center"
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About
                </Link>
              </div>
            </li>
            <li className="overflow-hidden">
              <div className="dark:hover:bg-zinc-900 hover:bg-zinc-200 hover:px-6  transition-all p-4 cursor-pointer ">
                <Link
                  className=""
                  activeClass="active"
                  to="experience"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Experience
                </Link>
              </div>
            </li>
            <li className="overflow-hidden">
              <div className="dark:hover:bg-zinc-900 hover:bg-zinc-200 transition-all hover:px-6 p-4 px-5 cursor-pointer">
                <Link
                  className=""
                  activeClass="active"
                  to="courses"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Courses
                </Link>
              </div>
            </li>
            <li className="overflow-hidden">
              <div className="dark:hover:bg-zinc-900 hover:bg-zinc-200 hover:px-6 transition-all p-4 px-5 cursor-pointer rounded-e-full">
                <Link
                  className="cursor-pointer "
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
              </div>
            </li>
          </ul>
        </nav>

        {userData && (
          <Routes>
            <Route
              path="/"
              element={
                <div className="max-w-[820px] mx-auto p-8 md:px-16 ">
                  <Element name="about">
                    <About userData={userData} />
                  </Element>
                  <div className="w-full h-[1px] bg-zinc-300 dark:bg-zinc-900 my-10"></div>
                  <Element name="experience">
                    <Experience userData={userData} />
                  </Element>
                  <div className="w-full h-[1px] bg-zinc-300 dark:bg-zinc-900 my-10"></div>
                  <Element name="courses">
                    <Courses userData={userData} />
                  </Element>
                  <div className="w-full h-[1px] bg-zinc-300 dark:bg-zinc-900 my-10"></div>
                  <Element name="contact">
                    <Contact />
                  </Element>
                </div>
              }
            />
            <Route path="/courses/:courseName" element={<CoursePage userData={userData} />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
