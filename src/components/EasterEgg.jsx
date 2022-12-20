import React from 'react';

const EasterEgg = ({ setDisplayBrowser }) => {
  function reloadBrowser() {
    document.getElementById(`easter-egg`).className = "easter-egg animate__animated animate__fadeOut";
    setTimeout(() => {
      setDisplayBrowser(true);
    }, 1000);
  }

  return (
    <div id="easter-egg" className="easter-egg animate__animated animate__fadeIn">
      <h2 className="easter-egg-heading">Oops...</h2>
      <p>You're not supposed to see this message. Ever considered a career in software testing?</p>
      <div className="easter-egg-row"><p>While you're here, you might as well have an Easter Egg: <a href="http://icons8.com"><img className="easter-egg-icon" src="/static/assets/icons/easter-egg.svg" /></a> </p></div>
      <p>Now, quickly click <a href="" onClick={reloadBrowser}>here</a> to restore the browser before someone notices!</p>
    </div>
  )
}

export default EasterEgg;