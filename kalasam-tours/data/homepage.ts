import type {
  AssistanceFeature,
  Destination,
  Journey,
  JourneyStep,
  PartnerType,
} from "@/types/homepage";

export const journeys: Journey[] = [
  {
    number: "01",
    region: "Tamil Nadu",
    title: "Temple Heritage",
    description:
      "Walk through magnificent Chola temples, sacred towns and living traditions.",
    image: {
      src: "/images/temple-heritage.webp",
      alt: "A monumental South Indian temple tower rising above its stone courtyard",
    },
  },
  {
    number: "02",
    region: "Kerala",
    title: "God's Own Sacred Trails",
    description:
      "Temple visits, tranquil landscapes and cultural experiences shaped around your pace.",
    image: {
      src: "/images/kerala-backwaters.webp",
      alt: "A tranquil Kerala backwater framed by lush green palms",
    },
  },
  {
    number: "03",
    region: "Karnataka",
    title: "Ancient Stone & Spirit",
    description:
      "Discover sacred architecture, heritage cities and timeless South Indian stories.",
    image: {
      src: "/images/mysore-palace-night.webp",
      alt: "Mysore Palace glowing against the evening sky in Karnataka",
    },
  },
];

export const cholaCircuitImage = {
  src: "/images/chola-circuit.webp",
  alt: "A Chola temple and stone courtyard illuminated by golden evening light",
};

export const cholaCircuitSteps: JourneyStep[] = [
  {
    place: "Thanjavur",
    description:
      "Begin with the grandeur of Brihadisvara and the royal Chola legacy.",
  },
  {
    place: "Kumbakonam",
    description:
      "Explore a sacred landscape filled with ancient temples and rituals.",
  },
  {
    place: "Gangaikonda Cholapuram",
    description:
      "Experience one of the defining monuments of Chola architecture.",
  },
];

export const destinations: Destination[] = [
  {
    region: "Tamil Nadu",
    title: "Temple Towns",
    image: {
      src: "/images/temple-towns.webp",
      alt: "A Tamil Nadu temple-town street leading toward a colorful gopuram",
    },
  },
  {
    region: "Kerala",
    title: "Serene Trails",
    image: {
      src: "/images/kerala-serene-trails.webp",
      alt: "A quiet canoe crossing a palm-lined Kerala canal in the morning",
    },
  },
  {
    region: "Karnataka",
    title: "Stone Stories",
    image: {
      src: "/images/hampi-stone-stories.webp",
      alt: "Historic stone pavilions among the boulder-strewn landscape of Hampi",
    },
  },
  {
    region: "Sacred",
    title: "Living Traditions",
    image: {
      src: "/images/living-traditions-v2.webp",
      alt: "Brass oil lamps, flower garlands and a kolam in a South Indian temple corridor",
    },
  },
  {
    region: "Heritage",
    title: "Ancient Architecture",
    image: {
      src: "/images/ancient-architecture.webp",
      alt: "Intricate Hoysala stone carvings and sculpted temple pillars",
    },
  },
];

export const ceremonyImage = {
  src: "/images/family-ceremony.webp",
  alt: "A South Indian family ceremony decorated with flowers and traditional details",
};

export const seniorImage = {
  src: "/images/mysore-palace-day.webp",
  alt: "Mysore Palace viewed in daylight beneath a blue sky",
};

export const assistanceFeatures: AssistanceFeature[] = [
  {
    title: "Comfort-first pacing",
    description:
      "Flexible schedules with time to rest and enjoy each sacred place.",
  },
  {
    title: "Assisted transfers",
    description:
      "Coordinated private transportation between destinations.",
  },
  {
    title: "Family support",
    description:
      "Clear communication so families can travel with peace of mind.",
  },
  {
    title: "Temple guidance",
    description:
      "Helpful local coordination for a smoother spiritual experience.",
  },
];

export const testimonialImage = {
  src: "/images/family-testimonial.webp",
  alt: "A multigenerational family walking together through a South Indian temple courtyard",
};

export const travelPartners: PartnerType[] = [
  {
    number: "01",
    title: "Travel Agencies",
    description:
      "Reliable ground support, curated itineraries and local destination coordination.",
  },
  {
    number: "02",
    title: "Community Groups",
    description:
      "Purpose-built pilgrimage and cultural experiences for groups and associations.",
  },
  {
    number: "03",
    title: "Global Partners",
    description:
      "South India expertise for partners serving travellers across Malaysia, Singapore and Sri Lanka.",
  },
];
