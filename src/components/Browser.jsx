import React from 'react';
import Carousel from './Carousel.jsx';
import useIntroSlideContentTransition from '../hooks/useIntroSlideContentTransition.jsx';
import useIntroSlideTransition from '../hooks/useIntroSlideTransition.jsx';
import useCarousel from '../hooks/useCarousel.jsx';

const DURATION_UNTIL_UNHIDE_CAROUSEL = 7000;
const CAROUSEL_IMAGE_DURATION = 5000;

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

  const transitionStage = useIntroSlideTransition();

  let introSlideClasses;
  if (transitionStage == "display-intro-slide") {
    introSlideClasses = "intro-slide";
  } else if (transitionStage == "transition-intro-slide") {
    introSlideClasses = "intro-slide transition-intro-slide";
  } else {
    introSlideClasses = "intro-slide-hidden";
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
          <div className={introSlideClasses}  >
            <img className={`react-logo ${useIntroSlideContentTransition() ? 'item-fade' : ''}`} src="/static/assets/icons/logo.svg" />
            <h4 className={`${useIntroSlideContentTransition() ? 'item-fade' : ''}`}>Here's some apps I made earlier...</h4>
          </div>
        </div>
        <div className="browser-bottom-row">
          <div className="browser-text"></div>
          <div className="browser-btn"></div>
          <div className="browser-btn">
            {/* <a href="http://github.com/red365">
              <i className='bx bxl-github'></i>
            </a> */}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Browser;