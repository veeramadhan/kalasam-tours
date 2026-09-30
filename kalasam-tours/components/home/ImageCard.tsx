import Image from "next/image";
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
  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes={sizes}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      className={`image-card__image ${className}`.trim()}
    />
  );
}
