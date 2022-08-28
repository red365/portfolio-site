import React from 'react';

const Product = ({ name, icons, strapline, description, problem, image, solutionHeader, solutionText }) => {
  return (
    <>
      <div className="product-panel">
        <div className="product-info">
          <img src={`/static/assets/products/${image}`} className="product-image" />
          <div className="product-detail-container">
            <div className="problem-container">
              <div className="product-title-row">
                <h5>{name}</h5>
                <a href="http://github.com/red365"><i className='bx bxl-github portfolio-github'></i></a>
              </div>
              <div className="the-problem">
                <div className="problem-heading">
                  <p>The Problem:</p>
                </div>
                <div className="problem">
                  <p>{problem}</p>
                </div>
              </div>
              <div className="the-problem">
                <div className="problem-heading">
                  <p>The Solution:</p>
                </div>
                <div className="problem">
                  <p>{solutionHeader}</p>
                </div>
              </div>
              <div className="the-problem">
                <div className="problem-heading">
                  <p>The Implementation:</p>
                </div>
                <div className="problem">
                  {solutionText.map(text => (<div className="solution-text"><p>{text}</p></div>))}
                </div>
              </div>
            </div>
            <div>
              <div className="the-problem">
                <div className="problem-heading">
                  <p>The Stack:</p>
                </div>
                <div className="the-stack">
                  <div className="product-icons">
                    {icons.map(icon => {
                      if (icon.iconName == "Svelte" || icon.iconName == "MongoDB") {
                        return (
                          <div className="icon-container">
                            <img src={`/static/assets/logos/${icon.icon}.svg`} className="svg-icon" />
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
      </div>
    </>

  )
}

// const Product = ({name, icons, strapline, description, image}) => {
//   return (
//     <div className="product-panel">
//       <img src={`/static/assets/products/${image}`} className="product-image" />
//       <div className="product-info">
//         <div className="product-title">
//           <h3>{name}</h3>
//         </div>
//         <div className="product-icons">
//           {icons.map(icon => <img src={`/static/assets/logos/${icon.filename}`} className={icon.className ? icon.className : ""} height={icon.iconHeight} width={icon.iconWidth} />)}
//         </div>
//         <div className="product-strapline">
//           <h4>{strapline}</h4>
//         </div>
//         <div className="product-description">

//         </div>
//       </div>
//     </div>
//   )
// }

export default Product;