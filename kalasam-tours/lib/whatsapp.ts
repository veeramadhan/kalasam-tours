export const WHATSAPP_NUMBER = "918778070061";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello Kalasam Tourism, I would like to plan a journey.";

export function createWhatsAppUrl(message = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
