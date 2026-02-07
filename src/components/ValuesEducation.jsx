import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Quote } from "lucide-react";

const academicLevels = [
  {
    degree: "Bachelor of Commerce",
    inst: "Mumbai University",
    period: "1999 – 2002",
  },
  {
    degree: "Post-Graduation in Business Administration",
    inst: "Institute of Management Studies",
    period: "2002 – 2004",
  },
];

const values = [
  {
    title: "Vision",
    desc: "Seeing opportunities where others see markets.",
  },
  {
    title: "Innovation",
    desc: "Engineering momentum and reshaping landscapes.",
  },
  {
    title: "Excellence",
    desc: "Setting and surpassing industry standards consistently.",
  },
];

const ValuesEducation = () => {
  return (
    <section
      id="values"
      className="bg-[#050505] py-20 lg:py-32 px-6 lg:px-12 overflow-hidden relative"
    >
      {/* Cinematic Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-serif italic text-white/2 select-none pointer-events-none z-0 rotate-12">
        Rana.
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-8 items-start">
          {/* Left Column: Overlapping Values Block */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-12 lg:p-24 bg-white/2 backdrop-blur-3xl rounded-[3rem] border border-gold/10 overflow-hidden group shadow-2xl"
            >
              <Quote
                className="absolute -top-10 -right-10 opacity-5 text-gold group-hover:scale-110 transition-transform duration-1000"
                size={300}
                strokeWidth={0.5}
              />

              <h2 className="text-gold text-[10px] tracking-[0.8em] font-black uppercase mb-20 flex items-center gap-8">
                <span className="w-16 h-px bg-gold/40"></span>
                The Standard
              </h2>

              <div className="space-y-16 lg:space-y-20 relative z-10">
                {values.map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="group/value"
                  >
                    <div className="flex items-baseline gap-6">
                      <span className="font-sans font-black text-gold/20 text-xl italic min-w-8">
                        0{i + 1}
                      </span>
                      <div>
                        <h4 className="text-4xl lg:text-6xl font-serif italic text-white group-hover/value:text-gold transition-colors duration-700">
                          {v.title}
                        </h4>
                        <p className="text-xs lg:text-sm font-light leading-relaxed max-w-sm opacity-30 mt-4 tracking-[0.2em] uppercase font-sans group-hover/value:opacity-60 transition-opacity">
                          {v.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative cinematic gradient */}
              <div className="absolute bottom-0 right-0 w-full h-px bg-linear-to-r from-transparent via-gold/30 to-transparent"></div>
            </motion.div>
          </div>

          {/* Right Column: Layered Academic & Languages */}
          <div className="lg:col-span-5 lg:pl-16 lg:pt-32 space-y-32 relative">
            {/* Academic Section */}
            <div>
              <motion.h2
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-gold text-[10px] tracking-[0.6em] font-black uppercase mb-16 flex items-center gap-6"
              >
                <span className="w-12 h-px bg-gold/40"></span>
                Foundation
              </motion.h2>

              <div className="space-y-16">
                {academicLevels.map((edu, i) => (
                  <motion.div
                    key={i}
                    style={{ y: (i + 1) * 20 }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.3 }}
                    className="relative group h-full"
                  >
                    <div className="absolute -inset-4 bg-gold/[0.02] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 border border-gold/10"></div>
                    <div className="flex gap-10 items-start relative z-10">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-3xl bg-white/2 border border-white/5 flex items-center justify-center group-hover:border-gold/30 group-hover:scale-105 transition-all duration-700 shrink-0">
                        <GraduationCap
                          className="text-white/20 group-hover:text-gold transition-colors duration-700"
                          size={32}
                          strokeWidth={0.5}
                        />
                      </div>
                      <div>
                        <h4 className="text-2xl lg:text-3xl font-serif italic tracking-tight text-white mb-3 group-hover:text-gold transition-colors duration-700">
                          {edu.degree}
                        </h4>
                        <p className="text-xs text-white/40 tracking-[0.3em] uppercase mb-3 font-black">
                          {edu.inst}
                        </p>
                        <div className="inline-block px-4 py-1 rounded-full border border-gold/10 text-[10px] font-bold text-gold/40 tracking-[0.4em] uppercase">
                          {edu.period}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Linguistic Section */}
            <div className="pt-24 border-t border-white/5 relative">
              <h2 className="text-white/20 text-[10px] tracking-[0.8em] font-black uppercase mb-12 font-sans px-4 border-l border-gold/40">
                Proficiency
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {["ENGLISH (FLUENT)", "HINDI (FLUENT)", "MARATHI (NATIVE)"].map(
                  (lang, i) => (
                    <span
                      key={i}
                      className="px-8 py-4 rounded-2xl border border-white/5 bg-white/2 text-[10px] font-black tracking-[0.4em] text-white/30 hover:border-gold/40 hover:text-gold hover:bg-gold/[0.02] transition-all duration-700 cursor-default text-center"
                    >
                      {lang}
                    </span>
                  ),
                )}
              </div>

              {/* Background light leak accent */}
              <div className="absolute bottom-[-50%] right-[-20%] w-64 h-64 bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesEducation;
