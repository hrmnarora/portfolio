import React from "react";

const About = ({ userData }) => {
  return (
    <div>
      <header className="mb-8 mt-16 flex items-center h-fit">
        <div className=" w-fit h-fit">
          <div className="flex gap-2 flex-col sm:flex-row">
            <h1 className="text-5xl animate-blurFade block lg:text-6xl tracking-tight font-bold mb-3 text-zinc-950 dark:text-white">
              Hi, I'm
            </h1>
            <h1 className="text-5xl animate-blurFade ml-1 -mt-3 sm:mt-0 block lg:text-6xl tracking-tight font-bold mb-3 text-zinc-950 dark:text-white">
              {userData.about.name} 👋
            </h1>
          </div>
          <p className="text-lg animate-blurFade lg:text-xl tracking-tight leading-7 lg:leading-7  text-zinc-900 dark:text-zinc-100">
            {userData.about.title}
          </p>
        </div>
        <div className="w-1/3  h-fit lg:flex ml-2 md:height-[160px] items-center justify-center">
          <img
            className="rounded-full animate-blurFade md:min-h-30 md:min-w-30 min-h-28 min-w-28"
            src={userData.about.image}
            alt=""
          />
        </div>
      </header>

      <section>
        <h2 className="text-xl animate-blurFade lg:text-2xl font-bold text-zinc-950 dark:text-white">
          About
        </h2>
        <p className=" leading-6 animate-blurFade lg:leading-6 text-lg text-zinc-600 dark:text-zinc-400">
          {userData.about.description}
        </p>
      </section>
    </div>
  );
};

export default About;
