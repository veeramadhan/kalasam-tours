export type HomeImage = {
  src: string;
  alt: string;
};

export type Journey = {
  number: string;
  region: string;
  title: string;
  description: string;
  image: HomeImage;
};

export type Destination = {
  region: string;
  title: string;
  image: HomeImage;
};

export type JourneyStep = {
  place: string;
  description: string;
};

export type AssistanceFeature = {
  title: string;
  description: string;
};

export type PartnerType = {
  number: string;
  title: string;
  description: string;
};
