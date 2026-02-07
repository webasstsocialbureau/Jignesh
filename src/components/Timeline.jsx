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
      className="bg-[#050505] py-20 lg:py-32 px-6 lg:px-12 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-32"
        >
          <h2 className="text-gold text-[10px] tracking-[0.6em] font-black uppercase mb-6 flex items-center gap-6">
            <span className="w-12 h-px bg-gold/40"></span>
            Professional Narrative
          </h2>
          <h3 className="text-4xl sm:text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] font-sans">
            THE ARCHITECTURAL <br />
            <span className="font-serif italic font-light text-gold lowercase">
              Journey.
            </span>
          </h3>
        </motion.div>

        <div className="relative">
          {/* Vertical Architectural Line */}
          <div className="absolute left-[8px] md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2">
            <div className="absolute inset-0 bg-linear-to-b from-gold/30 via-gold/10 to-transparent"></div>
          </div>

          <div className="space-y-12 lg:space-y-32">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.1,
                }}
                className={`flex flex-col md:flex-row items-start md:items-center gap-8 lg:gap-16 ${index % 2 === 0 ? "md:flex-row-reverse text-left md:text-right" : "text-left"}`}
              >
                {/* Year Badge */}
                <div
                  className={`w-full md:w-1/2 flex ${index % 2 === 0 ? "justify-start md:justify-end" : "justify-start"} pl-10 md:pl-0`}
                >
                  <div className="flex flex-col">
                    <span className="text-gold font-serif italic text-xl lg:text-4xl mb-2">
                      {item.year}
                    </span>
                    <div
                      className={`w-12 h-px bg-gold/30 ${index % 2 === 0 ? "md:ml-auto" : ""}`}
                    ></div>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute md:relative left-[8px] md:left-0 z-10 shrink-0 -translate-x-1/2 md:translate-x-0 mt-2 md:mt-0">
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-charcoal border border-gold/50 shadow-[0_0_15px_rgba(197,160,89,0.3)] ring-4 ring-white/5"></div>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 group pl-10 md:pl-0">
                  <div className="p-6 lg:p-14 rounded-2xl bg-white/2 border border-white/5 hover:border-gold/20 hover:bg-gold/[0.02] transition-all duration-700 relative overflow-hidden group">
                    <h4 className="text-xl lg:text-4xl font-black uppercase tracking-tighter mb-4 font-sans text-white group-hover:text-gold transition-colors duration-700">
                      {item.role}
                    </h4>
                    <p className="text-white/40 text-[9px] lg:text-xs font-black tracking-[0.3em] uppercase mb-6 font-sans">
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-gold transition-colors inline-flex items-center gap-2"
                        >
                          <span className="border-b border-gold/20 pb-1">
                            {item.org}
                          </span>
                          <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                            ↗
                          </span>
                        </a>
                      ) : (
                        item.org
                      )}
                    </p>
                    <p className="text-white/50 text-sm lg:text-base font-light leading-relaxed font-sans max-w-sm group-hover:text-white/70 transition-colors duration-700">
                      {item.desc}
                    </p>

                    {/* Shadow Accent */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
