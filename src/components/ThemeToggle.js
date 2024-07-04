import React from 'react'
import { LuSunDim } from "react-icons/lu";
import { IoMoon } from "react-icons/io5";
const ThemeToggle = ({handleThemeSwitch, theme}) => {
  return (
    <button
        onClick={()=>handleThemeSwitch()}
        className="fixed top-4 right-4 px-2 py-2 bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-950 rounded-full shadow-md hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors z-10"
      >
        {theme === "dark" ? (
          <LuSunDim className="w-6 h-6" />
        ) : (
          <IoMoon className="w-6 h-6" />
        )}
      </button>
  )
}

export default ThemeToggle