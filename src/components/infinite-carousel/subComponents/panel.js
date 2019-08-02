import React from 'react';
import CarouselImage from './carousel-image';

const Panel = ({ active, image }) => {
  const { src, alt } = image;

  return (
    <div className={!active ? 'inactive' : ''}>
      <CarouselImage src={src} alt={alt}/>
    </div>
  );
};

export default Panel;
