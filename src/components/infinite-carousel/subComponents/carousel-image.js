import React from 'react';

const CarouselImage = ({ src, alt }) => (
  <img className="carousel-image" src={src} alt={alt} height="auto" width={500} />
);

export default CarouselImage;
