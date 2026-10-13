import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kalasam Tours | Journeys Beyond Destinations",
    template: "%s | Kalasam Tours",
  },
  description:
    "Thoughtfully curated spiritual, heritage and family journeys through the sacred heart of South India.",
  metadataBase: new URL("https://kalasamTours.com"),
  openGraph: {
    title: "Kalasam Tours | Journeys Beyond Destinations",
    description:
      "Travel into the sacred heart of South India with meaningful journeys shaped around your family.",
    type: "website",
    locale: "en_IN",
    siteName: "Kalasam Tours",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
