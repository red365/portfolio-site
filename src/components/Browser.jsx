import React, { useState, useEffect, useRef } from 'react';
import Carousel from './Carousel.jsx';
import useIntroSlideContentTransition from '../hooks/useIntroSlideContentTransition.jsx';
import useHideIntroSlide from '../hooks/useHideIntroSlide.jsx';
import useCarousel from '../hooks/useCarousel.jsx';

const INTRO_SLIDE_DURATION = 5000;
const DURATION_UNTIL_UNHIDE_CAROUSEL = 7000;
const CAROUSEL_IMAGE_DURATION = 5000;

const introSlideHeight = window.innerHeight - 429;
const introSlideWidth = window.innerWidth - 80;

const Browser = ({ displayBrowser, setDisplayBrowser }) => {

  function closeBrowser() {
    document.getElementById(`browser`).className = "browser animate__animated animate__wobble"
    window.setTimeout(() => {
      document.getElementById(`browser`).className = "browser animate__animated animate__fadeOutDown";
    }, 1200)
    window.setTimeout(() => {
      setDisplayBrowser(false);
      // Stop carusel timeouts from causing an error
      // dummy timeout to get highest id:
      var timeoutId = setTimeout(() => null, 0);
      while (timeoutId--) {
        clearTimeout(timeoutId);
      }
    }, 2200)

  }

  return (
    <div id="browser" className="browser animate__animated animate__fadeInRight shadow">
      <div className="browser-header">
        <div className="browser-button close-browser" onClick={() => closeBrowser()}></div>
        <div className="browser-button"></div>
        <div className="browser-button"></div>
      </div>
      <div className="browser-body">
        <div id="browser-main-panel" className="browser-main-panel" >
          {useCarousel(DURATION_UNTIL_UNHIDE_CAROUSEL) ? <Carousel displayBrowser={displayBrowser} carouselImageDuration={CAROUSEL_IMAGE_DURATION} durationUntilUnhideCarousel={DURATION_UNTIL_UNHIDE_CAROUSEL} imageDuration={CAROUSEL_IMAGE_DURATION} /> : null}
          <div className={`${useHideIntroSlide(INTRO_SLIDE_DURATION) ? "intro-slide-hidden" : "intro-slide"}`}  >
            <img className={`react-logo ${useIntroSlideContentTransition() ? 'item-fade' : ''}`} src="/static/assets/icons/logo.svg" />
            <h4 className={`${useIntroSlideContentTransition() ? 'item-fade' : ''}`}>Here's some apps I made earlier...</h4>
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
    </div >
  )
}

export default Browser;