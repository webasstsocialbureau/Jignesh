// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronRight, Plus, Minus } from "lucide-react";

// const detailedExperience = [
//   {
//     role: "Co-Founder & Director",
//     org: "Big TV Malayalam News",
//     period: "2026 – Present",
//     points: [
//       "Leading the strategic vision and operational excellence for a major media powerhouse.",
//       "Building editorial and commercial ecosystems from the ground up.",
//       "Establishing Big TV as a defining voice in Malayalam media.",
//       "Mentoring leadership teams and establishing organizational culture.",
//       "Driving revenue architecture and growth initiatives.",
//       "Creating industry benchmarks for media operations.",
//     ],
//   },
//   {
//     role: "Group CEO",
//     org: "Times 7",
//     period: "2026 – Present",
//     points: [
//       "Heading strategic direction for a diversified ecosystem spanning media, marketing, and brand building.",
//       "Expanding operations and presence across India.",
//       "Building synergies across multiple business verticals.",
//       "Creating innovative business models for modern media landscape.",
//       "Driving organizational growth and profitability.",
//       "Establishing Times 7 as an industry leader in integrated marketing solutions.",
//     ],
//   },
//   {
//     role: "Vice President",
//     org: "IMC (Integrated Media Company)",
//     period: "2023 – 2026",
//     points: [
//       "Integral member of launch teams for Flowers TV and TwentyFour networks.",
//       "Shaped the momentum that defined modern news standards.",
//       "Managed complex media operations across multiple channels.",
//       "Drove revenue initiatives and business growth.",
//       "Led high-performance sales and marketing teams.",
//       "Engineered operational excellence and efficiency standards.",
//     ],
//   },
//   {
//     role: "Director, Revenue Architecture",
//     org: "Star Network",
//     period: "2012 – 2023",
//     points: [
//       "Played crucial role in launching Asianet Movies.",
//       "Reshaped entire revenue architecture of Mazhavil Manorama.",
//       "Restructured commercial operations for Manorama News.",
//       "Recalibrated electronic media ecosystem for maximum impact.",
//       "Built high-performing revenue teams across multiple channels.",
//       "Established new standards for media profitability and growth.",
//     ],
//   },
//   {
//     role: "Premium Lifestyle Division Head",
//     org: "Outlook Group",
//     period: "2008 – 2012",
//     points: [
//       "Core team member behind premium airport magazine Outlook Lounge.",
//       "Developed luxury lifestyle media positioning and strategy.",
//       "Built premium advertising ecosystem and partnerships.",
//       "Established magazine as industry standard for lifestyle content.",
//       "Created high-value advertising partnerships with premium brands.",
//       "Expanded circulation and market presence significantly.",
//     ],
//   },
//   {
//     role: "Aviation Media Specialist",
//     org: "Jet Airways & Jetwings",
//     period: "2005 – 2008",
//     points: [
//       "Actively contributed to the launch of Jetwings, transforming aviation media.",
//       "Shaped the skies of India through strategic media initiatives.",
//       "Participated in launching Jetlite media and marketing operations.",
//       "Built brand positioning for premium aviation brands.",
//       "Created media partnerships that elevated brand perception.",
//       "Pioneered aviation media as a distinctive vertical.",
//     ],
//   },
//   {
//     role: "Launch Specialist",
//     org: "Cyber Media",
//     period: "2003 – 2005",
//     points: [
//       "Pioneered Voice & Data—a breakthrough telecom tabloid venture.",
//       "Set the tone for an entire career built on impact and innovation.",
//       "Established new editorial and commercial standards in telecom media.",
//       "Built audience reach and market presence rapidly.",
//       "Created advertiser confidence in emerging telecom media.",
//       "Demonstrated launch expertise that would define decades of success.",
//     ],
//   },
// ];

// const ExperienceDetail = () => {
//   const [activeIdx, setActiveIdx] = useState(0);

//   return (
//     <section
//       id="details"
//       className="bg-[#080808] py-24 px-8 lg:px-16 border-b border-white/5 overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="mb-16"
//         >
//           <h2 className="text-brand-pink text-[10px] tracking-[0.5em] font-black uppercase mb-4 flex items-center gap-4">
//             <span className="w-12 h-px bg-brand-pink"></span>
//             Involvement
//           </h2>
//           <h3 className="text-3xl sm:text-4xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] lg:leading-none">
//             STRATEGIC <br />
//             <span className="text-brand-pink">DEEP DIVE</span>
//           </h3>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
//           {/* Left: Role List - 2x2 Grid on mobile, Vertical on desktop */}
//           <div className="lg:col-span-4 grid grid-cols-2 lg:flex lg:flex-col gap-2 lg:gap-4">
//             {detailedExperience.map((exp, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setActiveIdx(idx)}
//                 className={`text-left p-3 lg:p-8 rounded-lg lg:rounded-2xl border transition-all duration-500 relative overflow-hidden group ${activeIdx === idx
//                     ? "bg-brand-pink/5 border-brand-pink/30 lg:scale-[1.02]"
//                     : "bg-white/2 border-white/5 hover:border-white/10"
//                   }`}
//               >
//                 <div
//                   className={`absolute top-0 left-0 w-1 h-full bg-brand-pink transition-transform duration-500 hidden lg:block ${activeIdx === idx ? "scale-y-100" : "scale-y-0"}`}
//                 ></div>
//                 {/* Mobile top highlight */}
//                 <div
//                   className={`absolute top-0 left-0 w-full h-1 bg-brand-pink transition-transform duration-500 lg:hidden ${activeIdx === idx ? "scale-x-100" : "scale-x-0"}`}
//                 ></div>
//                 <div className="flex justify-between items-center">
//                   <div className="min-w-0">
//                     <h4
//                       className={`text-[9px] sm:text-xs lg:text-base font-bold tracking-widest uppercase mb-0.5 lg:mb-1 transition-colors truncate ${activeIdx === idx ? "text-brand-pink" : "text-white"}`}
//                     >
//                       {exp.org}
//                     </h4>
//                     <p className="text-[7px] sm:text-[9px] lg:text-xs text-white/40 font-medium tracking-widest transition-colors truncate">
//                       {exp.role}
//                     </p>
//                   </div>
//                   <ChevronRight
//                     size={14}
//                     className={`transition-transform duration-500 hidden lg:block shrink-0 ${activeIdx === idx ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
//                   />
//                 </div>
//               </button>
//             ))}
//           </div>

//           {/* Right: Detailed Points */}
//           <div className="lg:col-span-8 relative h-full">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeIdx}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -20 }}
//                 transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//                 className="p-6 lg:p-12 bg-white/1 border border-white/5 rounded-2xl lg:rounded-[40px] h-full"
//               >
//                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 lg:mb-10 border-b border-white/5 pb-6 lg:pb-8 gap-4">
//                   <div>
//                     <h5 className="text-xl sm:text-2xl lg:text-4xl font-black uppercase tracking-tighter text-white">
//                       {detailedExperience[activeIdx].org}
//                     </h5>
//                     <p className="text-brand-pink text-[10px] lg:text-xs font-bold tracking-[0.3em] uppercase mt-1 lg:mt-2">
//                       {detailedExperience[activeIdx].period}
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex flex-col gap-8">
//                   {detailedExperience[activeIdx].points.map((point, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, y: 12 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: i * 0.08 }}
//                       className="flex gap-6 items-start group"
//                     >
//                       {/* Icon */}
//                       <div className="mt-2 w-6 h-6 rounded-full bg-brand-pink/15 border border-brand-pink/30 flex items-center justify-center shrink-0 group-hover:bg-brand-pink transition-colors">
//                         <Plus
//                           size={10}
//                           className="text-brand-pink group-hover:text-black transition-colors"
//                         />
//                       </div>

//                       {/* Text */}
//                       <p className="text-lg sm:text-xl lg:text-2xl font-light leading-snug text-white/70 group-hover:text-white transition-colors">
//                         {point}
//                       </p>
//                     </motion.div>
//                   ))}
//                 </div>

//               </motion.div>
//             </AnimatePresence>

//             {/* Background Accent */}
//             <div className="absolute -z-10 bottom-0 right-0 w-64 h-64 bg-brand-pink/5 blur-[100px] rounded-full opacity-50"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExperienceDetail;


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Plus, Minus } from "lucide-react";

const detailedExperience = [
  {
    role: "Co-Founder & Director",
    org: "Big TV Malayalam News",
    link: "https://bigtvlive.com",
    period: "2026 – Present",
    points: [
      "Leading the strategic vision and operational excellence for a major media powerhouse.",
      "Building editorial and commercial ecosystems from the ground up.",
      "Establishing Big TV as a defining voice in Malayalam media.",
      "Mentoring leadership teams and establishing organizational culture.",
      "Driving revenue architecture and growth initiatives.",
      "Creating industry benchmarks for media operations.",
    ],
  },
  {
    role: "Group CEO",
    org: "Times 7",
    link: "https://time7.in/",
    period: "2026 – Present",
    points: [
      "Heading strategic direction for a diversified ecosystem spanning media, marketing, and brand building.",
      "Expanding operations and presence across India.",
      "Building synergies across multiple business verticals.",
      "Creating innovative business models for modern media landscape.",
      "Driving organizational growth and profitability.",
      "Establishing Times 7 as an industry leader in integrated marketing solutions.",
    ],
  },
  {
    role: "Vice President",
    org: "IMC (Integrated Media Company)",
    period: "2023 – 2026",
    points: [
      "Integral member of launch teams for Flowers TV and TwentyFour networks.",
      "Shaped the momentum that defined modern news standards.",
      "Managed complex media operations across multiple channels.",
      "Drove revenue initiatives and business growth.",
      "Led high-performance sales and marketing teams.",
      "Engineered operational excellence and efficiency standards.",
    ],
  },
  {
    role: "Director, Revenue Architecture",
    org: "Star Network",
    period: "2012 – 2023",
    points: [
      "Played crucial role in launching Asianet Movies.",
      "Reshaped entire revenue architecture of Mazhavil Manorama.",
      "Restructured commercial operations for Manorama News.",
      "Recalibrated electronic media ecosystem for maximum impact.",
      "Built high-performing revenue teams across multiple channels.",
      "Established new standards for media profitability and growth.",
    ],
  },
  {
    role: "Premium Lifestyle Division Head",
    org: "Outlook Group",
    period: "2008 – 2012",
    points: [
      "Core team member behind premium airport magazine Outlook Lounge.",
      "Developed luxury lifestyle media positioning and strategy.",
      "Built premium advertising ecosystem and partnerships.",
      "Established magazine as industry standard for lifestyle content.",
      "Created high-value advertising partnerships with premium brands.",
      "Expanded circulation and market presence significantly.",
    ],
  },
  {
    role: "Aviation Media Specialist",
    org: "Jet Airways & Jetwings",
    period: "2005 – 2008",
    points: [
      "Actively contributed to the launch of Jetwings, transforming aviation media.",
      "Shaped the skies of India through strategic media initiatives.",
      "Participated in launching Jetlite media and marketing operations.",
      "Built brand positioning for premium aviation brands.",
      "Created media partnerships that elevated brand perception.",
      "Pioneered aviation media as a distinctive vertical.",
    ],
  },
  {
    role: "Launch Specialist",
    org: "Cyber Media",
    period: "2003 – 2005",
    points: [
      "Pioneered Voice & Data—a breakthrough telecom tabloid venture.",
      "Set the tone for an entire career built on impact and innovation.",
      "Established new editorial and commercial standards in telecom media.",
      "Built audience reach and market presence rapidly.",
      "Created advertiser confidence in emerging telecom media.",
      "Demonstrated launch expertise that would define decades of success.",
    ],
  },
];

const ExperienceDetail = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="details"
      className="bg-[#080808] py-24 px-8 lg:px-16 border-b border-white/5 overflow-hidden min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-16"
        >
          <h2 className="text-brand-pink text-[10px] tracking-[0.5em] font-black uppercase mb-4 flex items-center gap-4">
            <span className="w-12 h-px bg-brand-pink"></span>
            Involvement
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] lg:leading-none">
            STRATEGIC <br />
            <span className="text-brand-pink">DEEP DIVE</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[600px]">
          {/* Left: Role List - 2x2 Grid on mobile, Vertical on desktop */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:flex lg:flex-col gap-2 lg:gap-4">
            {detailedExperience.map((exp, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`text-left p-3 lg:p-8 rounded-lg lg:rounded-2xl border transition-all duration-500 relative overflow-hidden group ${activeIdx === idx
                  ? "bg-brand-pink/5 border-brand-pink/30 lg:scale-[1.02]"
                  : "bg-white/2 border-white/5 hover:border-white/10"
                  }`}
              >
                <div
                  className={`absolute top-0 left-0 w-1 h-full bg-brand-pink transition-transform duration-500 hidden lg:block ${activeIdx === idx ? "scale-y-100" : "scale-y-0"}`}
                ></div>
                {/* Mobile top highlight */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-brand-pink transition-transform duration-500 lg:hidden ${activeIdx === idx ? "scale-x-100" : "scale-x-0"}`}
                ></div>
                <div className="flex justify-between items-center">
                  <div className="min-w-0">
                    <h4
                      className={`text-[9px] sm:text-xs lg:text-base font-bold tracking-widest uppercase mb-0.5 lg:mb-1 transition-colors truncate ${activeIdx === idx ? "text-brand-pink" : "text-white"}`}
                    >
                      {exp.org}
                    </h4>
                    <p className="text-[7px] sm:text-[9px] lg:text-xs text-white/40 font-medium tracking-widest transition-colors truncate">
                      {exp.role}
                    </p>
                  </div>
                  <ChevronRight
                    size={14}
                    className={`transition-transform duration-500 hidden lg:block shrink-0 ${activeIdx === idx ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Right: Detailed Points - Centered */}
          <div className="lg:col-span-8 relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full p-6 lg:p-12 bg-white/1 border border-white/5 rounded-2xl lg:rounded-[40px]"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 lg:mb-10 border-b border-white/5 pb-6 lg:pb-8 gap-4">
                  <div>
                    <h5 className="text-xl sm:text-2xl lg:text-4xl font-black uppercase tracking-tighter text-white">
                      {detailedExperience[activeIdx].link ? (
                        <a
                          href={detailedExperience[activeIdx].link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-brand-pink transition-colors inline-flex items-center gap-2 group/link"
                        >
                          {detailedExperience[activeIdx].org}
                          <span className="opacity-0 group-hover/link:opacity-100 transition-all text-2xl">↗</span>
                        </a>
                      ) : (
                        detailedExperience[activeIdx].org
                      )}
                    </h5>
                    <p className="text-brand-pink text-[10px] lg:text-xs font-bold tracking-[0.3em] uppercase mt-1 lg:mt-2">
                      {detailedExperience[activeIdx].period}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-8">
                  {detailedExperience[activeIdx].points.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex gap-6 items-start group"
                    >
                      {/* Icon */}
                      <div className="mt-2 w-6 h-6 rounded-full bg-brand-pink/15 border border-brand-pink/30 flex items-center justify-center shrink-0 group-hover:bg-brand-pink transition-colors">
                        <Plus
                          size={10}
                          className="text-brand-pink group-hover:text-black transition-colors"
                        />
                      </div>

                      {/* Text */}
                      <p className="text-lg sm:text-xl lg:text-2xl font-light leading-snug text-white/70 group-hover:text-white transition-colors">
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Background Accent */}
            <div className="absolute -z-10 bottom-0 right-0 w-64 h-64 bg-brand-pink/5 blur-[100px] rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceDetail;