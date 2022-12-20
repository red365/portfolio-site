import React from 'react';
import useModal from '../hooks/useModal.jsx';

const Product = ({ name, icons, problem, image, solutionHeader, solutionText, productIndex }) => {
  const { modalIsOpen, setModalIsOpen, setModalProduct } = useModal();

  function openModal() {
    setModalIsOpen(true);
    setModalProduct(productIndex);
  }

  return (
    <>
      <div className={`product-panel ${modalIsOpen ? "no-height" : ''}`}>
        <div className="product-info">
          <img src={`/static/assets/products/${image}`} onClick={() => modalIsOpen ? null : openModal()} className="product-image" />
          <div className="product-detail-container">
            <div className="problem-container">
              <div className="product-title-row">
                <h5>{name}</h5>
                <a href="http://github.com/red365"><i className='bx bxl-github portfolio-github'></i></a>
              </div>
              <div className="product-section">
                <div className="product-heading">
                  <p>Problem:</p>
                </div>
                <div className="product-section-content">
                  <p>{problem}</p>
                </div>
              </div>
              <div className="product-section">
                <div className="product-heading">
                  <p>Solution:</p>
                </div>
                <div className="product-section-content">
                  <p>{solutionHeader}</p>
                </div>
              </div>
              <div className="product-section">
                <div className="product-heading">
                  <p>Implementation:</p>
                </div>
                <div className="product-section-content">
                  {solutionText.map((text, i) => (<div key={i} className="solution-text"><p>{text}</p></div>))}
                </div>
              </div>
            </div>
            <div className="product-section">
              <div className="product-heading">
                <p>Stack:</p>
              </div>
              <div className="the-stack">
                <div className="product-icons">
                  {icons.map((icon, i) => {
                    if (icon.iconName == "Svelte" || icon.iconName == "MongoDB") {
                      return (
                        <div key={i} className="icon-container">
                          <img src={`/static/assets/icons/${icon.icon}.svg`} className="svg-icon" />
                          <label>{icon.iconName}</label>
                        </div>
                      )
                    }
                    // className = { icon.className ? icon.className : "" } height = { icon.iconHeight } width = { icon.iconWidth } />)}
                    return (
                      <div className="icon-container">
                        <i className={`bx ${icon.icon}`} />
                        <label>{icon.iconName}</label>
                      </div>
                    )
                  })
                  }
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>

  )
}

export default Product;