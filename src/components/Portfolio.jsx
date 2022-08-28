import React from 'react';
import products from '../content/products.js';
import Product from './Product.jsx';
import Card from './Card.jsx';

const Portfolio = props => {
  return (
    <section className="portfolio-projects">
      <a name="portfolio"></a>
      <div className="section-heading portfolio-projects-header">
        <h3>Portfolio</h3>
      </div>
      <div className="portfolio-projects-detail">
        {products.map(product => {
          return (
            <Card >
              <Product {...product} />
            </Card>

          )
        })}
      </div>
    </section >
  )
}

export default Portfolio;