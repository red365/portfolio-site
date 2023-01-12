import React, { useState } from 'react';
import Navbar from './components/NavbarMobile.jsx';
import NavbarDesktop from './components/NavbarDesktop.jsx';
import Profile from 'components/Profile.jsx';
import Portfolio from 'components/Portfolio.jsx';
import Product from 'components/Product.jsx';
import Browser from 'components/Browser.jsx';
import useModal from './hooks/useModal.jsx';
import EasterEgg from 'components/EasterEgg.jsx';
import Modal from 'react-modal';
import products from './content/products.js';

const customStyles = {
  overlay: {
    background: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    height: "92%",
    top: '48%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '75%',
    maxWidth: '1210px'
  },
};

Modal.setAppElement('#app-root');

const PortfolioSite = props => {
  const { modalIsOpen, setModalIsOpen, modalProduct } = useModal();
  const [displayBrowser, setDisplayBrowser] = useState(true);
  console.log("Find the Easter egg...")
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      ><Product {...products[modalProduct]} productIndex={modalProduct} /></Modal>
      <div className="portfolio view">
        <div className="outer-nav-container">
          <NavbarDesktop />
          <div className="nav-space"></div>
        </div>

        <section className="main-panel">
          <Navbar />
          <div className="content">
            <div className="headline">
              <h1>Hey! I'm a React developer for hire...</h1>
              <p>Over two years industry experience working with React, Jquery, plain Javascript, NodeJS, Express and Webpack to build and serve engaging web applications. I am also proficient with Excel and have an interest in data analysis.</p>
              <div className="calls-to-action">
              </div>
            </div>
            {displayBrowser ? <Browser displayBrowser={displayBrowser} setDisplayBrowser={setDisplayBrowser} /> : <EasterEgg setDisplayBrowser={setDisplayBrowser} />}
          </div>
        </section >
        <Portfolio />
        <Profile />
      </div >
    </>
  )
}

export default PortfolioSite;
