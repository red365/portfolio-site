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
  const product = products[productConfig.productIndex];

  return (
    <div className="portfolio view">
      <Sidebar />
      <div className="product-container">
        <CarouselImages images={productConfig.images} />
        <div className="product-detail" >
          <div className={` ${productIndex == 0 ? 'expand-panel ' : ''}details-panel`}>
            <h1>{product.name}</h1>
            <h2>{product.strapline}</h2>
            {product.github ? <a className="github" href={product.github}><span>View me on</span><i className='bx bxl-github'></i></a> : null}
          </div>
          <div className={` ${productIndex == 0 ? 'hide-panel ' : ''}tech-icons-panel`}>
            {product.icons.map(icon => {
              return <Icon icon={icon} />
            })}
          </div>


        </div>
        {/* <div className="sub-heading-row detail row">
          <div className="heading">
            <h2>{products[productConfig.productIndex].strapline}</h2>
          </div>
        </div>
        <div className="detail row">
          <div className="github-button">
            <a href={products[productConfig.productIndex].github} className="github">View me on <i className='bx bxl-github'></i></a>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Portfolio;
