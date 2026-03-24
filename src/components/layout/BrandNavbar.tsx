import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface BrandNavSection {
  id: string;
  label: string;
  href?: string;
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    setMobileMenuOpen(false);
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
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        {/* Top bar */}
        <div className="container mx-auto px-3 sm:px-4 lg:px-8 flex items-center justify-between h-14 md:h-20">
          <Link to={backTo} className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors text-xs sm:text-sm shrink-0">
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">{backLabel}</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <div
              className={cn("w-8 h-8 md:w-12 md:h-12 rounded-sm overflow-hidden shrink-0", !logoBgColor && "bg-white")}
              style={logoBgColor ? { backgroundColor: logoBgColor } : undefined}
            >
              <img src={logoSrc} alt={brandName} className="w-full h-full object-contain" />
            </div>
            <span className="font-bold text-foreground tracking-wider text-xs sm:text-sm md:text-base">{brandName}</span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/contato"
              className="hidden sm:inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-accent-blue text-accent-blue-foreground text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-accent-blue/90 transition-colors shrink-0"
            >
              Orçamento
            </Link>
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center text-foreground"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Desktop section nav */}
        <div className="hidden md:block border-t border-border/50">
          <div className="container mx-auto px-4 lg:px-8 flex items-center justify-center gap-1 h-12 overflow-x-auto scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleClick(section)}
                className={cn(
                  "px-4 py-2 text-sm font-medium whitespace-nowrap rounded-sm transition-all duration-200",
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

      {/* Mobile dropdown menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[45] bg-black/50 md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="absolute top-[56px] left-0 right-0 bg-background border-b border-border shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="py-2 px-4 space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleClick(section)}
                  className={cn(
                    "w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                    activeSection === section.id
                      ? "text-accent-blue bg-accent-blue/10"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {section.label}
                </button>
              ))}
              <Link
                to="/contato"
                className="flex items-center justify-center gap-2 w-full mt-2 px-4 py-3 bg-accent-blue text-accent-blue-foreground text-xs font-semibold uppercase tracking-wider rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BrandNavbar;
