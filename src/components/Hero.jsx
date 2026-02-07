import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 200]);
  const y2 = useTransform(scrollY, [0, 800], [0, -150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.1]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const navLinks = [
    { name: "THE VISION", href: "#about" },
    { name: "EXPERTISE", href: "#work" },
    { name: "JOURNEY", href: "#recognition" },
    { name: "CONNECT", href: "#footer" },
  ];

  const socials = [
    { icon: Instagram, label: "IG" },
    { icon: Twitter, label: "X" },
    { icon: Youtube, label: "YT" },
    { icon: Facebook, label: "FB" },
    { icon: Linkedin, label: "IN" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-[#e5e5e5] overflow-hidden">
      {/* Dynamic Background Glow */}
      <motion.div
        animate={{
          x: mousePos.x / 15,
          y: mousePos.y / 15,
        }}
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-gold/5 blur-[120px] rounded-full pointer-events-none z-0"
      />

      {/* Floating Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 lg:px-12 py-10"
      >
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-8 h-0.5 bg-gold group-hover:w-12 transition-all duration-500"></div>
          <span className="font-sans font-black tracking-[0.2em] text-sm lg:text-base">
            JIGNESH <span className="text-gold/60">RANA</span>
          </span>
        </div>

        <nav className="hidden md:flex gap-12 items-center">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * i + 0.6 }}
              className="text-[10px] tracking-[0.4em] font-bold text-white/40 hover:text-gold transition-all relative group cursor-pointer"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-gold/50 transition-all duration-500 group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>
      </motion.header>

      {/* Main Content Area */}
      <main className="relative z-10 grid grid-cols-12 min-h-screen items-center px-6 lg:px-12 pt-12">
        {/* Left Side: Editorial Typography */}
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 py-12 lg:py-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="text-gold font-serif italic text-lg tracking-widest lowercase">
              the media
            </span>
            <div className="w-12 h-px bg-gold/40"></div>
            <span className="text-white/20 text-[10px] tracking-[0.2em] font-black uppercase mb-1 flex items-center gap-3">
              Architect
            </span>
          </motion.div>

          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                ease: [0.16, 1, 0.3, 1],
                delay: 1,
              }}
              className="text-[14vw] lg:text-[10vw] leading-[0.85] font-black tracking-tighter m-0 uppercase text-balance"
            >
              JIGNESH <br />
              <span className="font-serif italic font-light text-gold lowercase lg:ml-[2vw] brightness-125">
                Rana.
              </span>
            </motion.h1>

            <motion.div
              style={{ y: y1 }}
              className="absolute -top-[5vh] -left-[2vw] text-[15vw] font-serif italic font-thin text-white/2 select-none pointer-events-none z-[-1] whitespace-nowrap"
            >
              Master Strategist
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 2 }}
            className="mt-12 max-w-lg space-y-6"
          >
            <p className="text-white/50 text-base lg:text-lg leading-relaxed font-light tracking-wide border-l border-gold/20 pl-6">
              Engineering the momentum where others see markets. Over two
              decades of redefining the Indian media landscape through visionary
              leadership and architectural excellence.
            </p>
          </motion.div>
        </div>

        {/* Right Side: Portrait Image Wrapper */}
        <div className="col-span-12 lg:col-span-5 relative flex items-center justify-center order-1 lg:order-2 h-[60vh] lg:h-auto mb-12 lg:mb-0">
          <motion.div
            style={{ y: y2, scale }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="relative w-full max-w-md aspect-[3/4.5] z-10"
          >
            {/* The Image */}
            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] group">
              <img
                src="/image-gen (18).png"
                alt="Jignesh Rana"
                className="w-full h-full object-cover grayscale brightness-90 contrast-125 group-hover:grayscale-0 transition-all duration-3000 ease-out scale-110 group-hover:scale-100"
              />
              {/* Gold Vignette Overlay */}
              <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(197,160,89,0.15)] pointer-events-none"></div>
              <div className="absolute inset-0 bg-linear-to-t from-charcoal via-transparent to-transparent opacity-80"></div>

              {/* Text Badge on image */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end border-t border-white/10 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-500">
                <span className="text-[8px] tracking-[0.3em] font-black uppercase text-white/40 italic">
                  20+ Years
                </span>
                <span className="text-[8px] tracking-[0.3em] font-black uppercase text-white/40">
                  Excellence
                </span>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2 }}
              className="absolute -right-8 bottom-20 bg-charcoal/80 backdrop-blur-xl border border-white/5 p-6 rounded-xl hidden lg:block"
            >
              <div className="mb-2 text-gold font-serif italic text-2xl">
                Launch-Relaunch
              </div>
              <div className="text-[8px] tracking-[0.3em] text-white/30 uppercase font-black px-1">
                Specialist
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Side Numbers Indicator */}
      <div className="absolute left-10 bottom-12 hidden lg:flex flex-col gap-4 text-white/10 font-black text-6xl select-none">
        <span>01</span>
      </div>

      {/* Social Links Rail */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="fixed bottom-12 right-12 z-50 hidden lg:flex flex-col gap-8 items-center"
      >
        <div className="w-px h-24 bg-linear-to-t from-gold/40 to-transparent"></div>
        {socials.map((social, i) => (
          <a
            key={social.label}
            href="#"
            className="text-white/20 hover:text-gold transition-colors duration-500 hover:scale-125"
          >
            <social.icon size={15} strokeWidth={1} />
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
