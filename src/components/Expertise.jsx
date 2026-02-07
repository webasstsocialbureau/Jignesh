import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Zap,
  Layers,
  Target,
  Briefcase,
  Award,
  Globe,
  Lightbulb,
} from "lucide-react";

const competencies = [
  {
    icon: TrendingUp,
    title: "Revenue Architecture",
    desc: "Building and scaling revenue ecosystems from ground zero.",
  },
  {
    icon: Zap,
    title: "Launch Strategy",
    desc: "Specializing in media launches and strategic relaunches.",
  },
  {
    icon: Layers,
    title: "Media Operations",
    desc: "Recalibrating electronic media ecosystems and workflows.",
  },
  {
    icon: Target,
    title: "Brand Positioning",
    desc: "Establishing dominant market positioning for media brands.",
  },
  {
    icon: Briefcase,
    title: "Sales Leadership",
    desc: "Leading high-performance sales teams across media verticals.",
  },
  {
    icon: Award,
    title: "Record Engineering",
    desc: "Achieving and engineering industry benchmarks and records.",
  },
  {
    icon: Globe,
    title: "Market Expansion",
    desc: "Expanding media footprint across regions and verticals.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Strategy",
    desc: "Pioneering new approaches to media business models.",
  },
];

const Expertise = () => {
  return (
    <section
      id="expertise"
      className="bg-[#050505] py-20 lg:py-32 px-6 lg:px-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-24 items-end mb-24">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="text-gold text-[10px] tracking-[0.6em] font-black uppercase mb-6 flex items-center gap-6">
              <span className="w-12 h-px bg-gold/40"></span>
              Core Expertise
            </h2>
            <h3 className="text-4xl sm:text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] font-sans">
              STRATEGIC <br />
              <span className="font-serif italic font-light text-gold lowercase">
                Capabilities.
              </span>
            </h3>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pb-4">
            <p className="text-white/40 text-sm lg:text-base font-light tracking-wide leading-relaxed border-l border-gold/20 pl-6">
              Two decades of expertise synthesized into surgical strategic
              capabilities that reshape the national media landscape.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 lg:gap-x-12 lg:gap-y-20 mt-12">
          {competencies.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.1,
              }}
              className="group relative"
            >
              <div className="h-full bg-white/2 backdrop-blur-3xl border border-white/5 p-10 lg:p-12 rounded-2xl hover:bg-gold/[0.02] hover:border-gold/20 transition-all duration-700 relative z-10 group/card">
                {/* Numeric Indicator - Now inside the card but z-0 */}
                <div className="absolute -top-6 -right-4 text-gold/10 font-black text-7xl italic select-none z-0 group-hover/card:text-gold/20 transition-colors duration-700 pointer-events-none">
                  0{index + 1}
                </div>

                {/* Vertical Accent Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gold/0 group-hover/card:bg-gold/40 transition-all duration-700"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/2 border border-white/5 flex items-center justify-center mb-10 group-hover/card:border-gold/40 group-hover/card:scale-110 transition-all duration-700 relative">
                    <div className="absolute inset-0 bg-gold/5 blur-xl rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
                    <skill.icon
                      size={24}
                      className="text-gold group-hover/card:brightness-125 transition-all duration-700 relative z-10"
                      strokeWidth={1}
                    />
                  </div>

                  <h4 className="text-2xl lg:text-3xl font-serif italic text-white group-hover/card:text-gold transition-colors duration-500 mb-6">
                    {skill.title}
                  </h4>

                  <p className="text-white/30 text-xs lg:text-sm font-light leading-relaxed tracking-wider font-sans group-hover/card:text-white/50 transition-colors duration-500">
                    {skill.desc}
                  </p>

                  {/* Bottom decorative element */}
                  <div className="mt-8 pt-8 border-t border-white/5 opacity-0 group-hover/card:opacity-100 transition-all duration-700 translate-y-4 group-hover/card:translate-y-0">
                    <span className="text-gold text-[10px] tracking-[0.4em] font-black uppercase">
                      Expertise Module
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
