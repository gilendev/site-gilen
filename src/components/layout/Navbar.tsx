import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Empresa", href: "/empresa" },
  { label: "Nossas Marcas", href: "/marcas" },
  { label: "Projetos", href: "/projetos" },
  { label: "Tecnologia", href: "/tecnologia" },
  { label: "Soluções", href: "/solucoes" },
  { label: "Projetos Especiais", href: "/projetos-especiais" },
  { label: "Contato", href: "/contato" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
         <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              alt="GILEN Industrial"
              className="h-14 md:h-20 lg:h-28 w-auto"
              src="/brand-assets/logo-gilen.png"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors relative group ${
                  location.pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-3 right-3 h-0.5 bg-primary transition-transform origin-left ${
                    location.pathname === item.href
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
            <ThemeToggle />
          </div>
          <div className="lg:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-foreground p-2"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-4 py-3 text-sm font-medium rounded transition-colors ${
                    location.pathname === item.href
                      ? "text-foreground bg-muted"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
