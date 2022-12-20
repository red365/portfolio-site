import React from 'react';

const Socials = (props) => {
  return (
    <div className="socials">
      <a href={`mailto:${process.env.EMAIL}`}><i className='bx bx-envelope'></i></a>
      <a href="http://github.com/red365"><i className='bx bxl-github portfolio-github'></i></a>
      <a href="#"><i className='bx bxl-linkedin-square' ></i></a>
    </div>
  )
}

export default Socials;