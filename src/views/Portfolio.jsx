import React, { useState, useEffect, useRef } from 'react';
import Sidebar from 'components/Sidebar.jsx';
import products from '../content/products.js';
import CarouselImages from 'components/CarouselImages.jsx';
import Icon from 'components/Icon.jsx';
import '../css/carousel.css';

// const getNextProduct = (() => {
//   // const images = products.map(product => product.image);
//   let index = 0;
//   return () => products[index++ % products.length]
// })();

const getNextIndex = currentIndex => {
  const incrementIndex = currentIndex + 1;
  return incrementIndex % products.length;
}

const Portfolio = props => {
  const [productConfig, setProductConfig] = useState({ images: [`/static/assets/products/${products[0].image}`], productIndex: 0 });
  const { productIndex, images } = productConfig;
  setTimeout(() => setProductConfig(
    {
      images: [`/static/assets/products/${products[getNextIndex(productIndex)].image}`, ...images],
      productIndex: getNextIndex(productIndex)
    }), 5000)
  // console.log(nextProduct.name)

  // const mounted = useRef();
  // useEffect(() => {
  //   if (!mounted.current) {
  //     // do componentDidMount logic
  //     mounted.current = true;
  //   } else {
  //     // do componentDidUpdate logic
  //     console.log(images);
  //   }
  // });

  return (
    <div className="portfolio view">
      <Sidebar />
      <div className="product-container">
        <CarouselImages images={productConfig.images} />
        <div className="product-detail" >
          <div className="headline-row detail-row">
            <div className="heading">
              <h1>{products[productConfig.productIndex].name}</h1>
            </div>
            <div className={` ${productIndex == 0 ? 'no-tech-icons' : ''} tech-icons`}>
              {/* <i class={`bx bxl-${icon}`}></i> */}
              {products[productConfig.productIndex].icons.map(icon => {
                return <Icon icon={icon} />
              })}
            </div>
          </div>
          <div className="sub-heading-row detail row">
            <div className="heading">
              <h2>{products[productConfig.productIndex].strapline}</h2>
            </div>
          </div>
          <div className="detail row">
            <div className="github-button">
              <a href={products[productConfig.productIndex].github} className="github">View me on <i className='bx bxl-github'></i></a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="carousel-frame">
        <div id="image-stack">
          {images.map((img, index) => {
            return <MaybeHiddenImage key={images.length - index} className={index == 0 ? 'coming-in' : (index == 1 ? 'going-out' : 'hidden')} src={img} />
          })}
        </div> */}


      {/* <div className="hero-image-container">
          <img src={`/static/assets/products/${products[activeProductIndex].image}`} className="hero-image" />
        </div> */}
      {/* 
      <div className="product-detail" >
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
        </div>
    </div> */}
    </div >
  )
}

export default Portfolio;
