import { useRef, useCallback, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface BrandCarouselProps {
  images: { src: string; alt: string }[];
  accentColor?: string;
  subtitle?: string;
  title?: string;
  titleAccent?: string;
  linkTo?: string; // clicking images navigates here
}

const BrandCarousel = ({ images, accentColor = "bg-accent-blue", subtitle = "Galeria", title = "Nossos", titleAccent = "Trabalhos", linkTo }: BrandCarouselProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1, dragFree: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const rootNode = emblaApi.rootNode();
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) emblaApi.scrollNext();
      else emblaApi.scrollPrev();
    };
    rootNode.addEventListener("wheel", onWheel, { passive: false });
    return () => rootNode.removeEventListener("wheel", onWheel);
  }, [emblaApi]);

  if (images.length === 0) return null;

  const handleImageClick = () => {
    if (linkTo) navigate(linkTo);
  };

  return (
    <section ref={ref} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={cn("text-xs font-semibold uppercase tracking-[0.2em] mb-4 block text-center", accentColor.replace("bg-", "text-"))}>
            {subtitle}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-6 sm:mb-10">
            {title} <span className="text-steel">{titleAccent}</span>
          </h2>

          <div className="relative group">
            <div ref={emblaRef} className="overflow-hidden rounded-sm">
              <div className="flex">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={cn("flex-[0_0_85%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-3 sm:pl-4 first:pl-0", linkTo && "cursor-pointer")}
                    onClick={handleImageClick}
                  >
                    <div className="aspect-[4/3] rounded-sm overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollPrev}
              className={cn(
                "absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-background",
                !canScrollPrev && "hidden"
              )}
            >
              <ChevronLeft size={20} className="text-foreground" />
            </button>
            <button
              onClick={scrollNext}
              className={cn(
                "absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-background",
                !canScrollNext && "hidden"
              )}
            >
              <ChevronRight size={20} className="text-foreground" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === selectedIndex ? cn(accentColor, "w-6") : "bg-border"
                )}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandCarousel;
