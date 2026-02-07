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
      className="bg-[#080808] py-24 px-8 lg:px-16 relative overflow-hidden"
    >
      {/* Decorative Gradient */}
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-pink/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-brand-pink text-[10px] tracking-[0.5em] font-black uppercase mb-4" id="recognition">
              Recognition
            </h2>
            <h3 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-6">
              RECORDS & <span className="text-brand-pink">ACHIEVEMENTS</span>
            </h3>
            <p className="text-white/40 text-base lg:text-lg font-light max-w-2xl mx-auto leading-relaxed">
              With national and multinational brands, played a key role to achieve their historic milestones through strategic media innovation.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative p-10 lg:p-12 border border-white/10 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-white/[0.02] to-white/[0.01] hover:bg-white/[0.05] hover:border-brand-pink/30 transition-all duration-500 group flex flex-col items-center text-center"
            >
              {/* Background Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl lg:rounded-3xl bg-brand-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

              {/* Icon */}
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl border border-brand-pink/20 flex items-center justify-center mb-6 lg:mb-8 bg-brand-pink/5 group-hover:bg-brand-pink/15 group-hover:border-brand-pink/50 transition-all duration-500">
                <award.icon
                  size={32}
                  className="text-brand-pink group-hover:scale-110 transition-transform duration-500"
                  strokeWidth={1.5}
                />
              </div>

              {/* Title */}
              <h4 className="text-lg lg:text-2xl font-black uppercase tracking-tight mb-3 leading-tight text-white group-hover:text-brand-pink transition-colors duration-300">
                {award.title}
              </h4>

              {/* Category */}
              <span className="text-brand-pink text-[9px] lg:text-[10px] font-bold tracking-[0.3em] uppercase">
                {award.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;