"use client";

import Image from "next/image";
import { useState } from "react";
import type { HomeImage } from "@/types/homepage";

type ImageCardProps = {
  image: HomeImage;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export function ImageCard({
  image,
  sizes,
  priority = false,
  className = "",
}: ImageCardProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <span className="image-card__skeleton" aria-hidden="true" />}
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        onLoad={() => setLoaded(true)}
        data-loaded={loaded}
        className={`image-card__image ${className}`.trim()}
      />
    </>
  );
}
