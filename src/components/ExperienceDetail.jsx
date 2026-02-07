import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Plus, ArrowUpRight } from "lucide-react";

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
      className="bg-[#050505] py-20 lg:py-32 px-6 lg:px-12 relative overflow-hidden flex items-center min-h-screen"
    >
      {/* Background architectural glow */}
      <div className="absolute top-1/2 left-0 w-[50vw] h-[50vw] bg-gold/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <h2 className="text-gold text-[10px] tracking-[0.6em] font-black uppercase mb-6 flex items-center gap-6">
            <div className="w-12 h-px bg-gold/40"></div>
            Strategic Depth
          </h2>
          <h3 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] font-sans">
            KEY <br />
            <span className="font-serif italic font-light text-gold lowercase brightness-125">
              Involvements.
            </span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Left: Role Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {detailedExperience.map((exp, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`text-left p-6 lg:p-8 rounded-2xl border transition-all duration-700 relative overflow-hidden group ${
                  activeIdx === idx
                    ? "bg-white/5 border-gold/30 ring-1 ring-gold/10"
                    : "bg-white/2 border-white/5 hover:border-white/10"
                }`}
              >
                {/* Vertical Indicator */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gold transition-transform duration-700 origin-top ${
                    activeIdx === idx ? "scale-y-100" : "scale-y-0"
                  }`}
                ></div>

                <div className="relative z-10">
                  <h4
                    className={`text-[9px] tracking-[0.3em] font-black uppercase mb-2 transition-colors ${
                      activeIdx === idx ? "text-gold" : "text-white/40"
                    }`}
                  >
                    {exp.org}
                  </h4>
                  <p
                    className={`text-base lg:text-lg font-serif italic transition-colors ${
                      activeIdx === idx ? "text-white" : "text-white/60"
                    }`}
                  >
                    {exp.role}
                  </p>
                </div>

                <ChevronRight
                  size={16}
                  className={`absolute right-6 top-1/2 -translate-y-1/2 transition-all duration-700 ${
                    activeIdx === idx
                      ? "text-gold translate-x-0 opacity-100"
                      : "text-white/20 translate-x-4 opacity-0"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right: Detailed Narrative */}
          <div className="lg:col-span-8 relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <div className="mb-12 border-b border-white/5 pb-12">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter text-white mb-2 leading-none">
                        {detailedExperience[activeIdx].org}
                      </h4>
                      <p className="text-gold text-[10px] tracking-[0.4em] font-black uppercase">
                        {detailedExperience[activeIdx].period}
                      </p>
                    </div>
                    {detailedExperience[activeIdx].link && (
                      <a
                        href={detailedExperience[activeIdx].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 rounded-full border border-gold/20 flex items-center justify-center group/link hover:bg-gold/10 transition-colors"
                      >
                        <ArrowUpRight
                          size={20}
                          className="text-gold group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                        />
                      </a>
                    )}
                  </div>
                  <p className="text-white/40 text-sm lg:text-base font-medium tracking-widest uppercase">
                    Role Impact Narrative
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {detailedExperience[activeIdx].points.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="group flex gap-6 items-start"
                    >
                      <div className="mt-1 w-px h-12 bg-linear-to-b from-gold/40 to-transparent group-hover:h-16 transition-all duration-700"></div>
                      <p className="text-base lg:text-lg leading-relaxed text-white/60 group-hover:text-white transition-colors duration-500 font-sans font-light">
                        {point}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Architectural Accent */}
            <div className="absolute -bottom-24 -right-24 text-[20vw] font-serif italic font-black text-white/1 select-none pointer-events-none uppercase">
              Impact
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceDetail;
