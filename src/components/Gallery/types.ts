interface GalleryItemProps {
  id: number;
  image: string;
  href: string;
}

interface GalleryItemsProps {
  items: GalleryItemProps[];
}

export type { GalleryItemProps, GalleryItemsProps };
