import React from "react";

interface CarouselProps<T> {
  id: string;
  data: T[];
  template: (item: T) => React.ReactNode;
  onHover?: (item: T) => void;
  onClick?: (item: T) => void;
  autoPlay?: boolean;
  controls?: boolean;
  interval?: number;
}

export default CarouselProps;
