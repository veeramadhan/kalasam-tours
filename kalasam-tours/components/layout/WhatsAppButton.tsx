import { SiWhatsapp } from "react-icons/si";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={createWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Kalasam Tourism on WhatsApp"
      title="Chat with us on WhatsApp"
      className="whatsapp-button"
    >
      <SiWhatsapp className="whatsapp-button__icon" aria-hidden="true" />
    </a>
  );
}
