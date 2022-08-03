import React, { useState, useEffect, useRef } from 'react';
import Product from 'components/Product.jsx';
import Sidebar from 'components/Sidebar.jsx';
import products from '../content/products.js';
import '../css/carousel.css';

const MaybeHiddenImage = ({ src, ...props }) => {
  const className = "hero-image " + props.className;
  return <img src={src} key={props.key} className={className} />
};

const nextColor = (() => {
  const colors = ['invoicer.PNG', 'fridge-note-screenshot.PNG'];
  let index = 0;
  return () => colors[index++ % colors.length]
})();

const Portfolio = props => {
  const [images, setImages] = useState([]);
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const { name, icons, github, strapline, description, image } = products[activeProductIndex];


  const addImage = () => setImages([`/static/assets/products/${nextColor()}`, ...images]);

  setTimeout(() => addImage(), 5000)

  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      // do componentDidMount logic
      mounted.current = true;
    } else {
      // do componentDidUpdate logic
      console.log(images);
    }
  });

  return (
    <div className="portfolio view">
      <Sidebar />
      <div className="carousel-frame">
        <div id="image-stack">
          {images.map((img, index) => {
            return <MaybeHiddenImage key={images.length - index} className={index == 0 ? 'coming-in' : (index == 1 ? 'going-out' : 'hidden')} src={img} />
          })}
        </div>


        {/* <div className="hero-image-container">
          <img src={`/static/assets/products/${products[activeProductIndex].image}`} className="hero-image" />
        </div> */}

        {/* <div className="product-detail" >
          <div className="product-detail-row">
            <label>App Name: {name}</label>
            <div className="built-with">
              <label>Built with:</label>
              <div className="product-icons">
                {icons.map(icon => <img src={`/static/assets/logos/${icon.filename}`} className={icon.className ? icon.className : ""} height={icon.iconHeight} width={icon.iconWidth} />)}
              </div>
            </div>
          </div>
          <div className="product-detail-row strapline">
            {strapline}
          </div>
          <div className="product-detail-row">
            <a className="github">Github</a>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Portfolio;
