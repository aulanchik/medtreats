import React from "react";
import GalleryItem from "./GalleryItem";
import gallery from "@/data/gallery.json";

const Gallery: React.FC = (): JSX.Element => {
  const { title, description, images } = gallery[0];

  return (
    <section id="gallery" className="gallery">
      <div className="gallery__heading">
        <h2
          className="gallery__title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="gallery__description">{description}</p>
        <div className="gallery__images">
          {images.map((item) => (
            <GalleryItem
              id={item.id}
              key={item.id}
              image={item.image}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
