import type {
  AssistanceFeature,
  Destination,
  Journey,
  JourneyStep,
  PartnerType,
} from "@/types/homepage";

const unsplash = (photo: string) =>
  `https://images.unsplash.com/${photo}?auto=format&fit=crop`;

export const journeys: Journey[] = [
  {
    number: "01",
    region: "Tamil Nadu",
    title: "Temple Heritage",
    description:
      "Walk through magnificent Chola temples, sacred towns and living traditions.",
    image: {
      src: unsplash("photo-1609766857041-ed402ea8069a"),
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
      src: unsplash("photo-1593693411515-c20261bcad6e"),
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
      src: unsplash("photo-1548013146-72479768bada"),
      alt: "Historic architecture and sacred heritage of South India",
    },
  },
];

export const cholaCircuitImage = {
  src: unsplash("photo-1609766857041-ed402ea8069a"),
  alt: "A monumental South Indian temple tower rising above its stone courtyard",
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
      src: unsplash("photo-1582510003544-4d00b7f74220"),
      alt: "A richly detailed temple gopuram in Tamil Nadu",
    },
  },
  {
    region: "Kerala",
    title: "Serene Trails",
    image: {
      src: unsplash("photo-1593693411515-c20261bcad6e"),
      alt: "Palm-lined Kerala waters beneath a soft evening sky",
    },
  },
  {
    region: "Karnataka",
    title: "Stone Stories",
    image: {
      src: unsplash("photo-1548013146-72479768bada"),
      alt: "Historic stone architecture and sacred heritage of South India",
    },
  },
  {
    region: "Sacred",
    title: "Living Traditions",
    image: {
      src: unsplash("photo-1548013146-72479768bada"),
      alt: "A devotional South Indian temple interior",
    },
  },
  {
    region: "Heritage",
    title: "Ancient Architecture",
    image: {
      src: unsplash("photo-1609766857041-ed402ea8069a"),
      alt: "A historic South Indian temple framed by open sky",
    },
  },
];

export const ceremonyImage = {
  src: unsplash("photo-1590050752117-238cb0fb12b1"),
  alt: "A South Indian family ceremony decorated with flowers and traditional details",
};

export const seniorImage = {
  src: unsplash("photo-1548013146-72479768bada"),
  alt: "A peaceful temple courtyard offering space to pause and reflect",
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
  src: unsplash("photo-1609766857041-ed402ea8069a"),
  alt: "A South Indian temple surrounded by heritage stone architecture",
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
