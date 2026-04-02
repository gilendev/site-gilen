import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BannerSlide {
  image: string;
  title: string;
  subtitle: string;
  tag: string;
}

interface BrandHeroBannerProps {
  slides: BannerSlide[];
  interval?: number;
}

const BrandHeroBanner = ({ slides, interval = 5000 }: BrandHeroBannerProps) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  // Reset current index when slides change to prevent out-of-bounds access
  useEffect(() => {
    setCurrent(0);
  }, [slides]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [next, interval]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  const slide = slides[current] || slides[0];
  if (!slide) return null;

  return (
    <div className="relative w-full h-[240px] sm:h-[320px] md:h-[400px] overflow-hidden rounded-xl">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
            width={1920}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-10 flex flex-col justify-end p-4 sm:p-6 md:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <span className="inline-block px-2.5 py-1 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-white bg-accent-blue/80 backdrop-blur-sm rounded-sm mb-2 sm:mb-3">
              {slides[current].tag}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-white leading-tight mb-1 sm:mb-2">
              {slides[current].title}
            </h2>
            <p className="text-white/70 text-xs sm:text-sm md:text-base max-w-lg">
              {slides[current].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={prev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white/80 hover:bg-black/60 hover:text-white transition-all"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white/80 hover:bg-black/60 hover:text-white transition-all"
      >
        <ChevronRight size={18} />
      </button>

      <div className="absolute bottom-3 sm:bottom-5 right-3 sm:right-6 z-20 flex items-center gap-1.5 sm:gap-2">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={cn(
              "transition-all duration-300 rounded-sm overflow-hidden border-2",
              i === current
                ? "w-10 h-7 sm:w-14 sm:h-9 border-accent-blue opacity-100"
                : "w-6 h-4 sm:w-8 sm:h-5 border-transparent opacity-50 hover:opacity-80"
            )}
          >
            <img src={slide.image} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default BrandHeroBanner;
