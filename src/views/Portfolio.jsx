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
    <div className="portfolio-page">
      <div className="portfolio view">
        <Sidebar />
        <div className="product-container">
          <div className="main-panel">
            <div className="detail-panel">
              <h1>Hey! I'm a React developer...</h1>
              <h2>Stay tuned for some personal projects</h2>
            </div>
            <div className="hero-panel">
              {/* <CarouselImages images={productConfig.images} /> */}
              <div className="intro-slide">
                <img className="react-logo" src="/static/assets/logos/logo.svg" />
                {/* <h5>Stay tuned for some personal projects I've built</h5> */}
              </div>
            </div>
          </div>
          {/*         
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


        </div> */}
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
      <div className="lower-panel">
        <div className="about">
          <h2>About Me</h2>
          <p>I'm a React and front-end web developer with professional experience gained working for Zumatech Ltd between 2020
            and 2022 and am currently looking for work. I am passionate about using technology to eliminate repetition, analyse data and build clean and minimal user interfaces.
          </p>

          <p>
            The tech stack I am most familiar with is React, NodeJS, Express and MySQL however in the course of my employment I have contributed to projects in Python, Django and JQuery amongst other languages and frameworks.
            I have also looked to broaden my knowledge of NodeJS when working on my portfolio and other personal projects, creating my own production/development build process configuration using Webpack as well using
          </p>



        </div>
      </div>
    </div>
  )
}

export default Portfolio;
