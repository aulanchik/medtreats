import React from "react";
import { getImagePath } from "@/utils";
import { GalleryItemProps } from "./types";

const GalleryItem: React.FC<GalleryItemProps> = ({
  id,
  image,
  href,
}): JSX.Element => {
  return (
    <a
      className="gallery__images__item"
      target="_blank"
      rel="noreferrer"
      href={href}
    >
      <img src={getImagePath(image)} alt={`gallery-${id}`} />
    </a>
  );
};

export default GalleryItem;
