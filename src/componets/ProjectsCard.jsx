import React from "react";
import bannerImg from '../assets/bannerImg.jpeg'
const ProjectCard = ({ title, main }) => {
  return (
    <div className="p-3 md:p-8 flex flex-col w-50 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img src={bannerImg} className="p-4  w-72 h-80 rounded object-cover mb-8 md:mb-0 border-2  border-fuchsia-500 img_glow hover:scale-105 "/>
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        
        
      </div>
    </div>
  );  
}
export default ProjectCard;




