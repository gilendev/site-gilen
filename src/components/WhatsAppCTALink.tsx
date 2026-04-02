import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppCTALinkProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
}

/**
 * A CTA link/button that shows WhatsApp icon + green background on hover.
 */
const WhatsAppCTALink = ({ to, href, children, className, showArrow = true, onClick }: WhatsAppCTALinkProps) => {
  const innerContent = (
    <>
      <FaWhatsapp className="whatsapp-icon" size={18} />
      {children}
      {showArrow && <ArrowRight className="default-icon ml-2" size={16} />}
    </>
  );

  const baseClasses = cn("whatsapp-hover", className);

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses} onClick={onClick}>
        {innerContent}
      </a>
    );
  }

  return (
    <Link to={to || "/contato"} className={baseClasses} onClick={onClick}>
      {innerContent}
    </Link>
  );
};

export default WhatsAppCTALink;
