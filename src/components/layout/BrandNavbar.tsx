import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface BrandNavSection {
  id: string;
  label: string;
  href?: string; // optional: navigate to a page instead of scrolling
}

interface BrandNavbarProps {
  brandName: string;
  logoSrc: string;
  logoBgColor?: string;
  backTo: string;
  backLabel: string;
  sections: BrandNavSection[];
}

const BrandNavbar = ({ brandName, logoSrc, logoBgColor, backTo, backLabel, sections }: BrandNavbarProps) => {
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      for (const section of sections) {
        if (section.href) continue;
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleClick = (section: BrandNavSection) => {
    if (section.href) {
      navigate(section.href);
      return;
    }
    const el = document.getElementById(section.id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <Link to={backTo} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm shrink-0">
          <ArrowLeft size={18} />
          <span className="hidden sm:inline">{backLabel}</span>
        </Link>
        <div className="flex items-center gap-3">
          <div
            className={cn("w-10 h-10 md:w-12 md:h-12 rounded-sm overflow-hidden shrink-0", !logoBgColor && "bg-white")}
            style={logoBgColor ? { backgroundColor: logoBgColor } : undefined}
          >
            <img src={logoSrc} alt={brandName} className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-foreground tracking-wider text-sm sm:text-base">{brandName}</span>
        </div>
        <Link
          to="/contato"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-accent-blue text-accent-blue-foreground text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-accent-blue/90 transition-colors shrink-0"
        >
          Orçamento
        </Link>
        <div className="sm:hidden w-8" />
      </div>

      <div className="border-t border-border/50 overflow-x-auto scrollbar-hide">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-center gap-1 h-12">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleClick(section)}
              className={cn(
                "px-4 py-2 text-xs md:text-sm font-medium whitespace-nowrap rounded-sm transition-all duration-200",
                activeSection === section.id
                  ? "text-accent-blue bg-accent-blue/10"
                  : "text-muted-foreground hover:text-accent-blue hover:bg-accent-blue/5"
              )}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default BrandNavbar;
