import React from 'react';
import about from '../assets/about.jpeg';

function About() {
  return (
    <div className="bg-[#121212] text-white py-20" id="About">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl  text-center mb-12 hover:text-fuchsia-500">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={about}
            alt=""
            className="w-72 h-80 rounded hover:scale-105 object-cover mb-8 md:mb-0 border-2 p-1 border-fuchsia-500 img_glow "
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              Hello! I'm Dhanshri Patil, a passionate Full Stack Developer with a focus on React.js, Node.js, and modern web technologies.

              I have a strong academic background in Computer Applications and experience developing user-friendly, responsive web applications that deliver seamless digital experiences.

              I'm always eager to learn new technologies and collaborate on meaningful projects. Currently, I'm open to full-time or internship opportunities where I can grow and contribute to impactful solutions.
            </p>







          </div>


        </div>
      </div>
    </div>

  );
}

export default About;

