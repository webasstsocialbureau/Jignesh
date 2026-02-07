import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-[#050505] py-20 lg:py-32 px-6 lg:px-12 overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[120vw] lg:w-[80vw] h-[120vw] lg:h-[80vw] bg-gold/5 blur-[100px] lg:blur-[120px] rounded-full pointer-events-none z-0 -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute top-1/3 lg:top-1/2 left-[-15%] lg:left-[-5%] -translate-y-1/2 text-[45vw] lg:text-[30vw] font-serif italic font-thin text-white/1.5 lg:text-white/1 select-none pointer-events-none uppercase whitespace-nowrap z-0">
        Vision
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Left Column: Image/Visual Accent */}
          <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square lg:aspect-4/5 bg-charcoal rounded-2xl overflow-hidden border border-white/5 group"
            >
              <img
                src="/image-gen (18).png"
                alt="Visionary leadership"
                className="w-full h-full object-cover opacity-40 grayscale group-hover:scale-110 transition-transform duration-[3s]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-charcoal via-transparent to-transparent opacity-80"></div>

              <div className="absolute bottom-10 left-10">
                <div className="text-gold font-serif italic text-4xl mb-2">
                  Legacy
                </div>
                <div className="w-12 h-px bg-gold/40"></div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Intellectual Narrative */}
          <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-gold text-[10px] tracking-[0.6em] font-black uppercase mb-10 flex items-center gap-6">
                <span className="w-12 h-px bg-gold/40"></span>
                The Philosophy
              </h2>

              <blockquote className="text-xl sm:text-2xl lg:text-6xl font-serif leading-[1.3] lg:leading-[1.1] text-white/90 text-balance mb-12 lg:mb-16 italic">
                "Every industry has its creators… its disruptors… and then—
                there are those who{" "}
                <span className="text-gold not-italic font-sans font-bold uppercase tracking-widest text-xs lg:text-3xl block mt-4 lg:inline lg:mt-0">
                  reshape the landscape
                </span>{" "}
                itself."
              </blockquote>

              <div className="space-y-10">
                <p className="text-base lg:text-2xl text-white/50 leading-relaxed font-light border-l border-gold/10 pl-6 lg:pl-8">
                  A visionary media strategist with{" "}
                  <span className="text-white font-medium">
                    over two decades of dominance
                  </span>
                  . Known as India's foremost launch specialist, Jignesh Rana
                  engineers momentum where others simply see markets.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16 pt-12 border-t border-white/5">
                  <div className="group">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-px bg-gold/30"></div>
                      <h4 className="text-gold text-[10px] font-black tracking-[0.4em] uppercase">
                        Strategic Architecture
                      </h4>
                    </div>
                    <p className="text-xs text-white/40 leading-relaxed uppercase tracking-widest font-light lg:pl-13">
                      Recalibrating media ecosystems and architecting revenue
                      models that define industry standards.
                    </p>
                  </div>
                  <div className="group">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-px bg-gold/30"></div>
                      <h4 className="text-gold text-[10px] font-black tracking-[0.4em] uppercase">
                        Visionary Creation
                      </h4>
                    </div>
                    <p className="text-xs text-white/40 leading-relaxed uppercase tracking-widest font-light lg:pl-13">
                      Launching cultural powerhouses and premium brands with
                      surgical precision and artistic flair.
                    </p>
                  </div>
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
