import React, { useState, useEffect, useRef } from 'react';
import Sidebar from 'components/Sidebar.jsx';
import products from '../content/products.js';
import CarouselImages from 'components/CarouselImages.jsx';
import useIntroSlideContentTransition from '../hooks/useIntroSlideContentTransition.jsx';
import useHideIntroSlide from '../hooks/useHideIntroSlide.jsx';
import useUnhideCarousel from '../hooks/useUnhideCarousel.jsx';
import Navbar from '../components/Navbar.jsx';
import Profile from 'components/Profile.jsx';
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
  const [productConfig, setProductConfig] = useState({ images: [], productIndex: 0 });
  const { productIndex, images } = productConfig;

  // const []

  // const triggerTransition = () => {
  //   setTransitionIntroSlide(true);
  //   toggleIntroSlideVisibility();
  //   // transition
  // }

  useEffect(() => setTimeout(() => setProductConfig({
    images: [...images, `/static/assets/products/${products[getNextIndex(productIndex)].image}`],
    productIndex: getNextIndex(productIndex)
  }), 5000));

  // setTimeout(() => setProductConfig(
  //   {
  //     images: [...images, `/static/assets/products/${products[getNextIndex(productIndex)].image}`],
  //     productIndex: getNextIndex(productIndex)
  //   }), 5000)
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
  console.log("images in portfolio", productConfig.images)

  return (
    <div className="portfolio view">
      <section className="main-panel">
        <Navbar />
        <div className="content">
          <div className="headline">
            <h1>Hey! I'm a React developer...</h1>
          </div>
          <div className={`${useHideIntroSlide() ? "intro-slide-hidden" : "intro-slide"}`}>
            <img className={`react-logo ${useIntroSlideContentTransition() ? 'item-fade' : ''}`} src="/static/assets/logos/logo.svg" />
            <h2 className={`${useIntroSlideContentTransition() ? 'item-fade' : ''}`}>Here's some projects I made earlier</h2>
          </div>
          <CarouselImages className={useUnhideCarousel() ? 'image-stack' : 'image-stack-hidden'} images={productConfig.images} />
        </div>
      </section>
    </div>
    //   <div className="navbar-container">
    // <div className="portfolio-page">
    //   <div className="navbar-container">
    //     <Navbar />
    //     <div className="headline-and-carousel-container">
    //       {/* <div className="headline-and-carousel-container">
    //       <div className="headline">
    //         <h1>Hey! I'm a React developer...</h1> */}
    //       {/* <h2>Stay tuned for some personal projects</h2> */}
    //       {/* </div> */}
    //       {/* <CarouselImages images={productConfig.images} /> */}
    //       {/* <img className="react-logo" src="/static/assets/logos/logo.svg" /> */}
    //       {/* <h2>Here's some projects I made earlier</h2> */}
    //     </div>
    //   </div>
    // </div>
  )


  {/* <div className="hero-panel">
              <CarouselImages images={productConfig.images} />
              <div className="intro-slide">
                <img className="react-logo" src="/static/assets/logos/logo.svg" />
                <h5>Stay tuned for some personal projects I've built</h5>
              </div>
            </div> */}
  {/* </div> */ }
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
  {/* </div>
      </div> */}
  {/* <div className="lower-panel">
        <Profile />
      </div> */}
  //   </div>
  // )
}

export default Portfolio;
