import React from 'react';

const Product = ({ name, icons, strapline, description, image }) => {
  return (
    <>
      <input type="checkbox" name="toggle" id="toggle" hidden />
      <label for="toggle">TEST!</label>

      <div className="product-panel">
        <div className="product-info">
          <div className="product-title">
            <h3>{name}</h3>
          </div>
          <div className="product-icons">
            {icons.map(icon => <img src={`/static/assets/logos/${icon.filename}`} className={icon.className ? icon.className : ""} height={icon.iconHeight} width={icon.iconWidth} />)}
          </div>
          <img src={`/static/assets/products/${image}`} className="product-image" />
          <div className="product-strapline">
            <h4>{strapline}</h4>
          </div>
          <div className="product-description">
          </div>
        </div>
      </div>
    </>

  )
}

// const Product = ({ name, icons, strapline, description, image }) => {
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