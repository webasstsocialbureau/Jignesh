import React from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  Linkedin,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      url: "#",
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "#",
    },
    {
      icon: Youtube,
      label: "YouTube",
      url: "#",
    },
    {
      icon: Facebook,
      label: "Facebook",
      url: "#",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "#",
    },
  ];

  const navigationLinks = [
    { name: "Work", href: "#work" },
    { name: "Journal", href: "#values" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#footer" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#050505] pt-12 lg:pt-24 pb-12 px-6 lg:px-16 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-10 lg:gap-24 mb-12 lg:mb-20">
          <div className="col-span-12 lg:col-span-5 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-4 lg:mb-8">
              <span className="font-black tracking-tighter text-lg lg:text-2xl uppercase text-left">
                JIGNESH RANA
              </span>
            </div>
            <p className="text-white/40 text-[10px] sm:text-sm leading-relaxed font-light tracking-wide max-w-sm mb-8 lg:mb-12 text-left">
              Launch specialist and media architect. Reshaping media landscapes across India through strategic innovation, architectural excellence, and visionary leadership.
            </p>
            <div className="flex gap-2 sm:gap-6 justify-start">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-pink hover:border-brand-pink transition-all hover:scale-110 duration-300"
                >
                  <social.icon size={14} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 text-left">
              <div className="col-span-1">
                <div className="mb-10 lg:mb-16">
                  <h4 className="text-white font-bold text-[10px] tracking-[0.4em] uppercase mb-4 lg:mb-2">
                    Navigation
                  </h4>
                  <ul className="space-y-3 lg:space-y-4">
                    {navigationLinks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          onClick={(e) => scrollToSection(e, link.href)}
                          className="text-white/40 text-[9px] lg:text-xs hover:text-brand-pink transition-colors tracking-widest uppercase cursor-pointer"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* <div className="mb-10 lg:mb-0">
                  <h4 className="text-white font-bold text-[10px] tracking-[0.4em] uppercase mb-4 lg:mb-8">
                    Contact
                  </h4>
                  <ul className="space-y-3 lg:space-y-4 text-white/40 text-[9px] lg:text-xs tracking-widest uppercase">
                    <li>Mumbai, Maharashtra, IN</li>
                    <li className="break-all">
                      <a
                        href="mailto:hello@jigneshrana.com"
                        className="hover:text-brand-pink transition-colors"
                      >
                        hello@jigneshrana.com
                      </a>
                    </li>
                    <li className="break-all">
                      <a
                        href="mailto:media@times7.in"
                        className="hover:text-brand-pink transition-colors"
                      >
                        media@times7.in
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>

              <div className="col-span-1">
                <h4 className="text-white font-bold text-[10px] tracking-[0.4em] uppercase mb-4 lg:mb-8 text-left">
                  Current Role
                </h4>
                <div className="space-y-6">
                  <div>
                    <p className="text-brand-pink font-bold text-[9px] lg:text-xs tracking-widest mb-1 lg:mb-2 uppercase text-left">
                      CO-FOUNDER & DIRECTOR
                    </p>
                    <a
                      href="https://bigtvlive.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-start gap-2 text-white/40 hover:text-brand-pink transition-colors text-[9px] lg:text-xs tracking-widest uppercase group/footer-link"
                    >
                      <span>Big</span>
                      <span className="bg-brand-pink text-black px-1 font-black text-[7px] lg:text-[9px] group-hover/footer-link:bg-white transition-colors">
                        TV
                      </span>
                      <span>Malayalam</span>
                      <span className="opacity-0 group-hover/footer-link:opacity-100 transition-opacity ml-1">↗</span>
                    </a>
                  </div>
                  <div>
                    <p className="text-brand-pink font-bold text-[9px] lg:text-xs tracking-widest mb-1 lg:mb-2 uppercase text-left">
                      GROUP CEO
                    </p>
                    <a
                      href="https://time7.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-start gap-2 text-white/40 hover:text-brand-pink transition-colors text-[9px] lg:text-xs tracking-widest uppercase group/footer-link"
                    >
                      <span>Times</span>
                      <span className="bg-brand-pink text-black px-1 font-black text-[7px] lg:text-[9px] group-hover/footer-link:bg-white transition-colors">
                        7
                      </span>
                      <span className="opacity-0 group-hover/footer-link:opacity-100 transition-opacity ml-1">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;