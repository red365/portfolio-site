import React, { useEffect } from 'react';

const CarouselImage = ({ src, ...props }) => {
  const className = "hero-image " + props.className;
  return <img src={src} key={props.key} className={className} />
};

const Carousel = props => {
  useEffect(() => {
    window.setTimeout(() => {
      document.getElementById('image-stack').style.height = `${Math.max(...([...document.querySelectorAll('#image-stack img')].map(el => el.offsetHeight)))}px`;
      document.getElementById('browser').style.height = `${Math.max(...([...document.querySelectorAll('#image-stack img')].map(el => el.offsetHeight)))}px`
    }, 200)
  });

  return (
    <div id="image-stack" className={props.className}>
      {props.images.map((img, index) => {
        return <CarouselImage {...props} key={props.images.length - index} className={index == 0 ? 'coming-in' : (index == 1 ? 'going-out' : 'hidden')} src={img} />
      })}
    </div>
  )
}

export default Carousel;