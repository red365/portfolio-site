import React from 'react';

const Navbar = props => {
  return (
    <div className="navbar">
      {/* <ul>
        <li> */}
      <a href="#">
        <i className='bx bx-book'></i>
        {/* <span className="link_name">Portfolio</span> */}
      </a>
      {/* <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Portfolio</a></li>
        </ul>
      </li> */}
      {/* <li> */}
      <a href="#">
        {/* <i className='bx bxs-file-doc'></i> */}
        <i className='bx bx-user'></i>
        {/* <span className="link_name">CV</span> */}
      </a>
      {/* <ul className="sub-menu blank">
          <li><a className="link_name" href="#">CV</a></li>
        </ul>
      </li> */}
      {/* <li> */}
      <a href="#">
        <i className='bx bxl-linkedin-square' ></i>
        {/* <span className="link_name">LinkedIn</span> */}
      </a>
      {/* <ul className="sub-menu blank">
          <li><a className="link_name" href="#">LinkedIn</a></li>
        </ul> */}
      <a href="http://github.com/red365">
        <i className='bx bxl-github'></i>
        {/* <span className="link_name">Github</span> */}
      </a>
      {/* <ul className="sub-menu blank">
            <li><a className="link_name" href="http://github.com/red365">Github</a></li>
          </ul> */}
      {/* </li>
      </ul> */}
    </div>

  )
}

export default Navbar;