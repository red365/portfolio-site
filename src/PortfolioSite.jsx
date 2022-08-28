import React, { useState, useEffect, useRef } from 'react';
import Sidebar from 'components/Sidebar.jsx';
import products from './content/products.js';
import Carousel from 'components/Carousel.jsx';
import useIntroSlideContentTransition from './hooks/useIntroSlideContentTransition.jsx';
import useHideIntroSlide from './hooks/useHideIntroSlide.jsx';
import useUnhideCarousel from './hooks/useUnhideCarousel.jsx';
import Navbar from './components/Navbar.jsx';
import Profile from 'components/Profile.jsx';
import Portfolio from 'components/Portfolio.jsx';
import Icon from 'components/Icon.jsx';
import './css/carousel.css';

const getNextIndex = currentIndex => {
  const incrementIndex = currentIndex + 1;
  return incrementIndex % products.length;
}

const PortfolioSite = props => {
  const [productConfig, setProductConfig] = useState({ images: [`/static/assets/products/${products[0].image}`], productIndex: 0 });
  const { productIndex, images } = productConfig;
  const { name, icons, github, strapline } = products[productIndex];

  useUnhideCarousel() ? setTimeout(() => setProductConfig({ images: [`/static/assets/products/${products[getNextIndex(productIndex)].image}`, ...images], productIndex: getNextIndex(productIndex) }), 5000) : null;

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
  console.log("images in portfolio", productConfig.images)

  return (
    <div className="portfolio view">
      <section className="main-panel shadow">
        <Navbar />
        <div className="content">
          <div className="headline">
            <h1>Hey! I'm a React developer for hire...</h1>
          </div>
          <div className="browser-wrapper">
            <div id="browser" className="browser animate__animated animate__fadeInRight shadow">
              <div className="browser-header">
                <div className="browser-button"></div>
                <div className="browser-button"></div>
                <div className="browser-button"></div>
              </div>
              <div className="browser-body">
                <div className="browser-image-wrapper">
                  <div className={`${useHideIntroSlide() ? "intro-slide-hidden" : "intro-slide"}`}>
                    <img className={`react-logo ${useIntroSlideContentTransition() ? 'item-fade' : ''}`} src="/static/assets/logos/logo.svg" />
                    <h4 className={`${useIntroSlideContentTransition() ? 'item-fade' : ''}`}>Here's some apps I made earlier</h4>
                  </div>
                  <div className={useUnhideCarousel() ? 'carousel-panel' : 'carousel-panel carousel-panel-hidden'}>
                    <Carousel className="image-stack" images={productConfig.images} />
                  </div>
                </div>
                <div className="browser-bottom-row">
                  <div className="browser-text"></div>
                  <div className="browser-btn"></div>
                  <div className="browser-btn btn-github">
                    <a href="http://github.com/red365">
                      <i className='bx bxl-github'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      <Portfolio />
      <Profile />
    </div >
  )
}

export default PortfolioSite;
