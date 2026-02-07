import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2026 – Present",
    role: "Co-Founder & Director",
    org: "Big TV Malayalam News",
    link: "https://bigtvlive.com",
    desc: "Leading editorial vision and operations for a major media powerhouse.",
  },
  {
    year: "2026 – Present",
    role: "Group CEO",
    org: "Times 7",
    link: "https://time7.in/",
    desc: "Heading the strategic direction and growth of a diversified media-marketing ecosystem.",
  },
  {
    year: "2026 – Present",
    role: "Leading Relaunch Specialist",
    org: "Big TV Telugu News",
    link: "https://bigtvlive.com",
    desc: "Spearheading the relaunch strategy for Telugu media operations.",
  },
  {
    year: "2023 – 2026",
    role: "Vice President",
    org: "IMC (Integrated Media Company)",
    desc: "Integral to launching Flowers TV and TwentyFour networks. Shaping modern news standards.",
  },
  {
    year: "2012 – 2023",
    role: "Director, Revenue Architecture",
    org: "Star Network",
    desc: "Launched Asianet Movies. Recalibrated revenue for Mazhavil Manorama and Manorama News.",
  },
  {
    year: "2008 – 2012",
    role: "Head of Premium Lifestyle",
    org: "Outlook Group",
    desc: "Core team member behind Outlook Lounge, a premium airport magazine.",
  },
  {
    year: "2005 – 2008",
    role: "Aviation Media Specialist",
    org: "Jet Airways & Jetwings",
    desc: "Shaped India's aviation media landscape. Contributed to Jetwings and Jetlite launches.",
  },
  {
    year: "2003 – 2005",
    role: "Launch Specialist",
    org: "Cyber Media",
    desc: "Pioneered Voice & Data—a breakthrough telecom tabloid that set tone for career.",
  },
];

const Timeline = () => {
  return (
    <section
      id="work"
      className="bg-[#080808] py-24 px-8 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <h2 className="text-brand-pink text-[10px] tracking-[0.5em] font-black uppercase mb-4 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-brand-pink"></span>
            Career Timeline
          </h2>
          <h3 className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] lg:leading-none">
            THE <span className="text-brand-pink">JOURNEY</span>
          </h3>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[8px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2"></div>

          <div className="space-y-8 lg:space-y-24">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Content Card */}
                <div className="w-full md:w-1/2 group ml-4 md:ml-0">
                  <div className="p-6 lg:p-12 border border-white/5 rounded-xl lg:rounded-2xl bg-white/[0.02] hover:bg-brand-pink/[0.02] hover:border-brand-pink/20 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-pink/5 blur-[40px] -translate-y-1/2 translate-x-1/2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <span className="text-brand-pink font-bold text-[8px] lg:text-[10px] tracking-[0.3em] uppercase block mb-1 lg:mb-2">
                      {item.year}
                    </span>
                    <h4 className="text-lg lg:text-3xl font-black uppercase tracking-tighter mb-1">
                      {item.role}
                    </h4>
                    <p className="text-white/40 text-[10px] lg:text-xs font-bold tracking-widest uppercase mb-4 lg:mb-6">
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-brand-pink transition-colors inline-flex items-center gap-1 group/link"
                        >
                          {item.org}
                          <span className="opacity-0 group-hover/link:opacity-100 transition-opacity">↗</span>
                        </a>
                      ) : (
                        item.org
                      )}
                    </p>
                    <p className="text-white/60 text-xs lg:text-sm font-light leading-relaxed max-w-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="relative z-10 ml-[8px] md:ml-0 -translate-x-1/2">
                  <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-[#080808] border-2 border-brand-pink ring-4 ring-brand-pink/10"></div>
                </div>

                {/* Empty Spacer */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;