import React from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  Linkedin,
  ArrowUp,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Instagram, label: "Instagram", url: "#" },
    { icon: Twitter, label: "Twitter", url: "#" },
    { icon: Youtube, label: "YouTube", url: "#" },
    { icon: Facebook, label: "Facebook", url: "#" },
    { icon: Linkedin, label: "LinkedIn", url: "#" },
  ];

  const navigationLinks = [
    { name: "The Vision", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Journey", href: "#work" },
    { name: "Recognition", href: "#awards" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#050505] pt-20 pb-12 px-6 lg:px-12 border-t border-white/5 relative overflow-hidden">
      {/* Background architectural glow */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Footer Watermark */}
      <div className="absolute top-1/2 left-[-10%] -translate-y-1/2 text-[25vw] font-serif italic font-black text-white/1 select-none pointer-events-none uppercase">
        Visionary
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-16 lg:gap-24 mb-24">
          <div className="col-span-12 lg:col-span-6">
            <div
              className="flex items-center gap-6 mb-12 group cursor-pointer"
              onClick={scrollToTop}
            >
              <div className="w-12 h-px bg-gold group-hover:w-20 transition-all duration-700"></div>
              <span className="font-sans font-black tracking-tighter text-3xl lg:text-5xl text-white uppercase leading-none">
                JIGNESH <br className="sm:hidden" />
                <span className="font-serif italic font-light text-gold lowercase lg:ml-4 brightness-125">
                  Rana.
                </span>
              </span>
            </div>

            <p className="text-white/40 text-sm lg:text-lg leading-relaxed font-light tracking-wide max-w-md mb-12 font-sans">
              Launch specialist and media architect. Engineering momentum across
              the Indian media landscape through strategic innovation and
              visionary leadership.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-white/5 bg-white/2 flex items-center justify-center text-white/30 hover:text-gold hover:border-gold/30 hover:scale-110 transition-all duration-500"
                >
                  <social.icon size={18} strokeWidth={1} />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-16">
              <div className="col-span-1">
                <h4 className="text-gold text-[10px] tracking-[0.5em] font-black uppercase mb-8">
                  Navigation
                </h4>
                <ul className="space-y-4">
                  {navigationLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.href)}
                        className="text-white/30 text-xs hover:text-gold transition-colors tracking-widest uppercase font-black italic block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-1 sm:col-span-2">
                <h4 className="text-gold text-[10px] tracking-[0.5em] font-black uppercase mb-8">
                  Current Roles
                </h4>
                <div className="space-y-8">
                  <div className="group/role">
                    <p className="text-white font-sans font-black text-xs tracking-widest mb-2 uppercase opacity-40 group-hover/role:opacity-100 transition-opacity">
                      CO-FOUNDER & DIRECTOR
                    </p>
                    <a
                      href="https://bigtvlive.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gold/60 hover:text-gold transition-colors text-lg lg:text-xl font-serif italic"
                    >
                      Big TV Malayalam News
                      <ArrowUpRight
                        size={16}
                        className="opacity-0 group-hover/role:opacity-100 transition-all group-hover/role:translate-x-1 group-hover/role:-translate-y-1"
                      />
                    </a>
                  </div>
                  <div className="group/role">
                    <p className="text-white font-sans font-black text-xs tracking-widest mb-2 uppercase opacity-40 group-hover/role:opacity-100 transition-opacity">
                      GROUP CEO
                    </p>
                    <a
                      href="https://time7.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gold/60 hover:text-gold transition-colors text-lg lg:text-xl font-serif italic"
                    >
                      Times 7
                      <ArrowUpRight
                        size={16}
                        className="opacity-0 group-hover/role:opacity-100 transition-all group-hover/role:translate-x-1 group-hover/role:-translate-y-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] tracking-[0.4em] font-black text-white/20 uppercase">
            © 2026 Jignesh Rana. All Rights Reserved.
          </p>

          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="flex items-center gap-4 text-gold text-[10px] tracking-[0.5em] font-black uppercase group"
          >
            <span>Back to Top</span>
            <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
              <ArrowUp size={16} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
