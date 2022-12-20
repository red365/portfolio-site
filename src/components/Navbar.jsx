import React from 'react';

const Navbar = props => {
  return (
    <div className="navbar">
      <a href="#portfolio">
        <i className='bx bx-book'></i>
      </a>
      <a href="#profile">
        <i className='bx bx-user'></i>
      </a>
      <a href="#">
        <i className='bx bxl-linkedin-square' ></i>
      </a>
      <a href="http://github.com/red365">
        <i className='bx bxl-github'></i>
      </a>
    </div>

  )
}

export default Navbar;