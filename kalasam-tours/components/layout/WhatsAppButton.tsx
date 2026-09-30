export function WhatsAppButton() {
  const phoneNumber = "919999999999";

  const message = encodeURIComponent(
    "Hello Kalasam Tourism, I would like to plan a journey."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Kalasam Tourism on WhatsApp"
      className="whatsapp-button"
    >
      <span aria-hidden="true">WA</span>
    </a>
  );
}