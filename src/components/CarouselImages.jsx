import React from 'react';

const CarouselImage = ({ src, ...props }) => {
  const className = "hero-image " + props.className;
  return <img src={src} key={props.key} className={className} />
};

const CarouselImages = props => {
  return (
    <div id="image-stack">
      {props.images.map((img, index) => {
        return <CarouselImage {...props} key={props.images.length - index} className={index == 0 ? 'coming-in' : (index == 1 ? 'going-out' : 'hidden')} src={img} />
      })}
    </div>
  )
}

export default CarouselImages;