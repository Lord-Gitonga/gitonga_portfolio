import React from "react";
import HeroImage from "../assets/Morris.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full md:w-1/2">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Welcome to my digital space! I'm Morris Gitonga, a passionate and
            results-driven software engineer based in Nairobi, Kenya. With over
            2 years of hands-on experience in the ever-evolving tech landscape,
            I thrive on turning ideas into functional and innovative solutions.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 md:pl-8">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-full h-auto md:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
