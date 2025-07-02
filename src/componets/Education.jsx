// import React from 'react';

// const Education = () => {
//     return (
//         <section id="Education" className="bg-[#121212] text-white py-12 px-6 md:px-16 lg:px-24">
//             <h2 className="text-4xl  text-center mb-12 hover:text-fuchsia-500">Education</h2>

//             <div className="space-y-8">
//                 {/* Degree 1 */}
//                 <div className="py-12 flex flex-wrap justify-center gap-10 rounded hover:scale-105 object-cover mb-8 md:mb-0 border-2 p-1 border-fuchsia-500 img_glow ">
//                     <h3 className='text-sm'> MASTER DEGREE</h3>
//                     <h3 className="text-xl font-bold">Master of Computer Application(MCA)</h3>
//                     <p className="text-[#ADB7BE] mt-1">Shramsadhana Bombay Trust, College of Engineering & Technology, Jalgaon.</p>
//                     <p className="mt-2">2023-2025</p>
//                     <p className="mt-2">CGPA: 8.94</p>

//                 </div>

//                 {/* Degree 2 */}
//                 <div className="w-72 h-80 rounded hover:scale-105 object-cover mb-8 md:mb-0 border-2 p-1 border-fuchsia-500 img_glow ">
//                     <h3 className='text-sm'> BACHELORS DEGREE</h3>

//                     <h3 className="text-xl font-bold">Bachelor of Computer Science</h3>
//                     <p className="text-[#ADB7BE] mt-1">Annasaheb G.D. Bendale Mahila Mahavidyalaya, Jalgaon. </p>
//                     <p className="mt-2">2020-2023</p>
//                     <p className="mt-2">CGPA: 9.27</p>


//                 </div>


//             </div>
//         </section>
//     );
// };

// export default Education;


import React from 'react';
import { FaUniversity, FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="Education" className="bg-[#121212] text-white py-12 px-6 md:px-16 lg:px-24">
      <h2 className="text-4xl text-center mb-12 hover:text-fuchsia-500">Education</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {/* Master Degree */}
        <div className="w-full max-w-md bg-[#1e1e1e] rounded-lg p-6 border-l-4 border-fuchsia-500 shadow-md hover:scale-105 transition-transform duration-300">
           <div className="flex items-center gap-3">
            <FaUniversity size={24} className="text-fuchsia-500" />
            <p className="text-sm text-fuchsia-500 font-semibold">MASTER DEGREE</p>
          </div>
          <h3 className="text-xl font-bold mt-2">Master of Computer Application (MCA)</h3>
          <p className="text-[#ADB7BE] mt-1">
            Shramsadhana Bombay Trust, College of Engineering & Technology, Jalgaon
          </p>
          <p className="mt-2">2023 – 2025</p>
          <p className="mt-1">CGPA: 8.94</p>
        </div>

        {/* Bachelor's Degree */}
       <div className="w-full max-w-md bg-[#1e1e1e] rounded-lg p-6 border-l-4 border-fuchsia-500 shadow-md hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-3">
            <FaGraduationCap size={24} className="text-fuchsia-500" />
            <p className="text-sm text-fuchsia-500 font-semibold">BACHELOR'S DEGREE</p>
          </div>
          <h3 className="text-xl font-bold mt-2">Bachelor of Computer Science</h3>
          <p className="text-[#ADB7BE] mt-1">
            Annasaheb G.D. Bendale Mahila Mahavidyalaya, Jalgaon
          </p>
          <p className="mt-2">2020 – 2023</p>
          <p className="mt-1">CGPA: 9.27</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
