import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        My journey in software engineering began with a fascination for problem-solving and a love for creating digital experiences that leave a lasting impact. 
        From designing responsive user interfaces to architecting robust backend systems, 
        I am driven by the pursuit of excellence and a commitment to staying on the cutting edge of technology.
        </p>

        <br />

        <p className="text-xl">
        My true passion lies in web development, where I utilize technologies like React, TypeScript, and JavaScript to create seamless and visually appealing digital experiences. 
        Additionally, I bring the power of server-side frameworks such as Ruby on Rails, Python's Flask and Django, and PHP's Laravel to ensure robust backend architecture.
        </p>

        <br></br>
        <p className="text-xl">
        Beyond the code, I am dedicated to bridging the gap between technology and people.
        I believe in effective communication, collaborative problem-solving, and delivering solutions that not only meet technical requirements but also resonate with end-users.
        </p>
      </div>
    </div>
  );
};

export default About;
