import React from "react";
import { motion } from "framer-motion";
import { Zap, Target, Lightbulb } from "lucide-react";

const awards = [
  {
    title: "Guinness World Records",
    category: "Record Engineering",
    icon: Zap,
  },
  {
    title: "Limca Records",
    category: "Indian Excellence",
    icon: Target,
  },
  {
    title: "Indian Book of Records",
    category: "Engineered Excellence",
    icon: Lightbulb,
  },
];

const Awards = () => {
  return (
    <section
      id="awards"
      className="bg-[#050505] py-20 lg:py-32 px-6 lg:px-12 relative overflow-hidden"
    >
      {/* Decorative architectural line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-linear-to-b from-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="text-gold text-[10px] tracking-[0.6em] font-black uppercase mb-6"
              id="recognition"
            >
              Recognition
            </h2>
            <h3 className="text-4xl lg:text-8xl font-black uppercase tracking-tighter mb-8 font-sans">
              RECORDS &{" "}
              <span className="font-serif italic font-light text-gold lowercase">
                Achievements.
              </span>
            </h3>
            <p className="text-white/40 text-base lg:text-xl font-light max-w-2xl mx-auto leading-relaxed font-sans italic border-x border-gold/10 px-6 lg:px-12">
              Collaborating with global powerhouses to engineer historic
              milestones through strategic media innovation.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.2,
              }}
              className="relative p-12 lg:p-16 border border-white/5 rounded-4xl bg-white/2 hover:bg-gold/[0.02] hover:border-gold/20 transition-all duration-700 group flex flex-col items-center text-center overflow-hidden"
            >
              {/* Background architectural element */}
              <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Icon */}
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl border border-white/10 flex items-center justify-center mb-10 bg-white/2 group-hover:border-gold/40 group-hover:scale-110 transition-all duration-700 relative">
                <div className="absolute inset-0 bg-gold/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <award.icon
                  size={36}
                  className="text-gold group-hover:brightness-125 transition-all duration-700 relative z-10"
                  strokeWidth={1}
                />
              </div>

              {/* Title */}
              <h4 className="text-2xl lg:text-3xl font-black uppercase tracking-tighter mb-4 font-sans text-white group-hover:text-gold transition-colors duration-700">
                {award.title}
              </h4>

              {/* Category */}
              <span className="text-white/30 text-[10px] lg:text-xs font-black tracking-[0.4em] uppercase font-sans">
                {award.category}
              </span>

              {/* Corner accent */}
              <div className="absolute bottom-4 right-4 text-gold/10 font-black text-6xl italic select-none">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
