import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-[#080808] py-20 lg:py-40 px-6 sm:px-8 lg:px-16 overflow-hidden"
    >
      {/* Background Decorative Text */}
      <div className="absolute top-10 lg:top-20 right-[-10%] text-[20vw] lg:text-[15vw] font-black text-white/2 select-none pointer-events-none uppercase whitespace-nowrap overflow-hidden">
        Philosophy
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8 lg:gap-24">
          {/* Left Column: Philosophical Quote */}
          <div className="col-span-12 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-brand-pink text-[9px] lg:text-[10px] tracking-[0.5em] font-black uppercase mb-6 lg:mb-8 flex items-center gap-4">
                <span className="w-8 lg:w-12 h-px bg-brand-pink"></span>
                The Foundation
              </h2>

              <blockquote className="text-xl sm:text-3xl lg:text-5xl font-light italic leading-tight tracking-tight text-white/90">
                "Every industry has its{" "}
                <span className="text-brand-pink font-bold not-italic">
                  creators… its disruptors…
                </span>{" "}
                and then— there are those who{" "}
                <span className="text-brand-pink font-bold not-italic">
                  reshape the landscape itself.
                </span>"
              </blockquote>

              {/* <div className="mt-8 lg:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border border-white/10 flex items-center justify-center p-1">
                  <div className="w-full h-full rounded-full bg-brand-pink/20 flex items-center justify-center text-[8px] lg:text-[10px] font-black">
                    JR
                  </div>
                </div>
                <div>
                  <p className="text-white font-bold tracking-widest text-[9px] lg:text-xs uppercase">
                    JIGNESH RANA
                  </p>
                  <p className="text-white/40 text-[8px] lg:text-[10px] tracking-widest uppercase mt-1">
                    Launch Specialist & Media Architect
                  </p>
                </div>
              </div> */}
            </motion.div>
          </div>

          {/* Right Column: Professional Summary */}
          <div className="col-span-12 lg:col-span-6 lg:pt-20">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-8"
            >
              <p className="text-base sm:text-lg lg:text-xl text-white/70 leading-relaxed font-light">
                A visionary media strategist with{" "}
                <span className="text-white font-medium">
                  over two decades of dominance
                </span>{" "}
                in media sales, marketing, and brand architecture. Known as one of India's foremost launch-and-relaunch specialists, reshaping media success across the nation.
              </p>

              <p className="text-sm sm:text-base text-white/50 leading-relaxed">
                From groundbreaking telecom media to premium lifestyle brands, from electronic media ecosystem recalibration to launching cultural powerhouses—his career is defined by impact, innovation, and the ability to engineer momentum where others see markets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div>
                  <h4 className="text-brand-pink text-[9px] lg:text-[10px] font-black tracking-widest uppercase mb-4">
                    Strategy
                  </h4>
                  <p className="text-[9px] lg:text-[10px] text-white/40 leading-relaxed uppercase tracking-widest">
                    Architecting revenue ecosystems and brand momentum across media landscapes.
                  </p>
                </div>
                <div>
                  <h4 className="text-brand-pink text-[9px] lg:text-[10px] font-black tracking-widest uppercase mb-4">
                    Creation
                  </h4>
                  <p className="text-[9px] lg:text-[10px] text-white/40 leading-relaxed uppercase tracking-widest">
                    Launching and relaunching media entities that define industry standards.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;