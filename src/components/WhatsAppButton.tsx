import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  whatsappUrl?: string;
}

const WhatsAppButton = ({ whatsappUrl = "https://wa.me/5511968756430?text=Falar%20com%20a%20Gilen%20Industrial" }: WhatsAppButtonProps) => {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[190] w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;
