import React from "react";
import Weather from "../assets/portfolio/weather.jpg";
import shopping from "../assets/portfolio/shopping.jpg";
import meeting from "../assets/portfolio/meeting.png";
import blog from "../assets/portfolio/blog.jpg";
const Portfolio = () => {
  const portfolios = [
        {
      id: 1,
      src: meeting,
      liveUrl: "https://moringa-alumni-app-kizi.onrender.com/", // Replace with your live URL
      githubUrl: "https://github.com/wycliffe-kip/moringa-alumni-app/tree/gitonga", // Replace with your GitHub repository URL
    },

    {
      id: 2,
      src: blog,
      liveUrl: "https://flexprimer.com", // Replace with your live URL
      githubUrl: "blog-app", // Replace with your GitHub repository URL
    },
    {
      id: 3,
      src: Weather,
      liveUrl: "https://lord-gitonga.github.io/Weather-App/", // Replace with your live URL
      githubUrl: "https://github.com/Lord-Gitonga/Weather-App", // Replace with your GitHub repository URL
    },
    {
      id: 4,
      src: shopping,
      liveUrl: "https://lord-gitonga.github.io/soko/", // Replace with your live URL
      githubUrl: "https://github.com/Lord-Gitonga/soko", // Replace with your GitHub repository URL
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, liveUrl, githubUrl }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
