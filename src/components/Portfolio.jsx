import React from 'react';
import products from '../content/products.js';
import Product from './Product.jsx';
import Card from './Card.jsx';

const Portfolio = props => {
  return (
    <section className="portfolio-projects">
      <div className="triangle-row">
        <div className="triangle"></div>
      </div>
      <a name="portfolio"></a>
      <div className="section-heading">
        <h3>Portfolio</h3>
      </div>
      <div className="portfolio-projects-detail">
        {products.map((product, i) => {
          return (
            <Card key={i}>
              <Product {...product} productIndex={i} />
            </Card>
          )
        })}
      </div>
    </section >
  )
}

export default Portfolio;