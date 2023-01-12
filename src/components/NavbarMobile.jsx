import React from 'react';

const NavbarMobile = props => {
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
      <a href="/data-analysis">
        <i class='bx bxs-bar-chart-alt-2'></i>
      </a>
      <a href="#">
        <i class='bx bxs-data' ></i>
      </a>

    </div>

  )
}

export default NavbarMobile;