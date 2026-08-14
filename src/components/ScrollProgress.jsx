import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[100] h-[2px] origin-left bg-emerald-400"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export default ScrollProgress;