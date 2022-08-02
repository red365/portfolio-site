import React, { useState } from 'react';
import Product from 'components/Product.jsx';
import Sidebar from 'components/Sidebar.jsx';
import products from '../content/products.js';


const Portfolio = props => {
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const { name, icons, github, strapline, description, image } = products[activeProductIndex];

  setTimeout(() => activeProductIndex === 0 ? setActiveProductIndex(1) : setActiveProductIndex(0), 10000)

  return (
    <div className="portfolio view">
      <Sidebar />
      {/* <h1>&lt;PortfolioApps /&gt;</h1> */}
      {/* {products.map((product, i) => {
        return (
          i == 0 ? <div className="product-container">
            <Product {...product} />
          </div> : null
        )
      })} */}
      <div className="carousel-frame">
        <div className="hero-image-container">
          <img src={`/static/assets/products/${products[activeProductIndex].image}`} className="hero-image" />
        </div>
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
            {/* <button className="github-btn"><a href={github}>Github</a></button> */}
            <a className="github">Github</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
