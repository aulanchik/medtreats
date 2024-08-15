import React from "react";
import GalleryItem from "./GalleryItem";
import gallery from "@/data/gallery.json";

const Gallery: React.FC = (): JSX.Element => {
  const items = gallery[0].gallery;
  const header = gallery[0].title;
  const text = gallery[0].description;

  return (
    <section id="gallery" className="gallery">
      <div className="gallery__heading">
        <h2
          className="gallery__title"
          dangerouslySetInnerHTML={{ __html: header }}
        />
        <p className="gallery__description">{text}</p>
        <div className="gallery__images">
          {items.map((item) => (
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
