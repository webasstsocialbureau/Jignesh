import React, { useEffect, useState } from "react";
import {
  motion,
  useSpring,
  useMotionValue,
  useVelocity,
  useTransform,
} from "framer-motion";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Velocity tracking for liquid stretching
  const mouseXVelocity = useVelocity(mouseX);
  const mouseYVelocity = useVelocity(mouseY);

  // Calculate speed and angle for stretching
  const speed = useTransform([mouseXVelocity, mouseYVelocity], ([vx, vy]) =>
    Math.sqrt(vx * vx + vy * vy),
  );

  const angle = useTransform(
    [mouseXVelocity, mouseYVelocity],
    ([vx, vy]) => (Math.atan2(vy, vx) * 180) / Math.PI,
  );

  // Dynamic scaling based on speed (liquid stretch)
  const stretchScaleX = useTransform(speed, [0, 3000], [1, 1.8]);
  const stretchScaleY = useTransform(speed, [0, 3000], [1, 0.6]);

  // Fast spring for the dot
  const dotConfig = { damping: 20, stiffness: 800, mass: 0.1 };
  const dotX = useSpring(mouseX, dotConfig);
  const dotY = useSpring(mouseY, dotConfig);

  // Slower, smoother spring for the ring to create a "liquid lag" feel
  const ringConfig = { damping: 40, stiffness: 150, mass: 1.5 };
  const ringX = useSpring(mouseX, ringConfig);
  const ringY = useSpring(mouseY, ringConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("button") ||
        target.closest("a") ||
        target.style.cursor === "pointer" ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    <div
      className="fixed inset-0 pointer-events-none hidden lg:block"
      style={{ zIndex: 1000000 }}
    >
      {/* Liquid Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-gold/40 rounded-full pointer-events-none"
        animate={{
          scale: isHovered ? 1.8 : isClicking ? 0.7 : 1,
          backgroundColor: isHovered
            ? "rgba(197, 160, 89, 0.08)"
            : "transparent",
          borderColor: isHovered
            ? "rgba(197, 160, 89, 0.8)"
            : "rgba(197, 160, 89, 0.4)",
          borderWidth: isHovered ? "1px" : "1.5px",
        }}
        transition={{ type: "spring", damping: 30, stiffness: 150, mass: 1 }}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
          rotate: angle,
          scaleX: stretchScaleX,
          scaleY: stretchScaleY,
        }}
      >
        {/* Subtle Radial Glow */}
        {isVisible && (
          <div className="absolute inset-[-4px] bg-gold/5 blur-xl rounded-full opacity-50" />
        )}
      </motion.div>

      {/* Main Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-gold rounded-full pointer-events-none shadow-[0_0_10px_rgba(197,160,89,0.5)]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          scale: isClicking ? 0.5 : 1,
        }}
      />
    </div>
  );
};

export default CustomCursor;
