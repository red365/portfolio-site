import React from 'react';

const Sidebar = props => {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar close">
        {/* <div className="logo-details">
          <i className='bx bxl-c-plus-plus'></i>
          <span className="logo_name"></span>
        </div> */}
        <ul className="nav-links">
          <li>
            <a href="#">
              <i className='bx bx-book'></i>
              <span className="link_name">Portfolio</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">Portfolio</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              {/* <i className='bx bxs-file-doc'></i> */}
              <i class='bx bx-user'></i>
              <span className="link_name">CV</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">CV</a></li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className='bx bxl-linkedin-square' ></i>
              <span className="link_name">LinkedIn</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="#">LinkedIn</a></li>
            </ul>
          </li>
          {/* <li>
            <div className="iocn-link">
              <a href="#">
                <i className='bx bx-collection' ></i>
                <span className="link_name">Category</span>
              </a>
              <i className='bx bxs-chevron-down arrow' ></i>
            </div>
            <ul className="sub-menu">
              <li><a className="link_name" href="#">Category</a></li>
              <li><a href="#">HTML & CSS</a></li>
              <li><a href="#">JavaScript</a></li>
              <li><a href="#">PHP & MySQL</a></li>
            </ul>
          </li> */}
          {/* <li>
            <div className="iocn-link">
              <a href="#">
                <i className='bx bx-book-alt' ></i>
                <span className="link_name">Posts</span>
              </a>
              <i className='bx bxs-chevron-down arrow' ></i>
            </div>
            <ul className="sub-menu">
              <li><a className="link_name" href="#">Posts</a></li>
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Login Form</a></li>
              <li><a href="#">Card Design</a></li>
            </ul>
          </li> */}
          {/* <li>
                <a href="#">
                <i className='bx bx-pie-chart-alt-2' ></i>
                <span className="link_name">Analytics</span>
                </a>
                <ul className="sub-menu blank">
                <li><a className="link_name" href="#">Analytics</a></li>
                </ul>
            </li>
            <li>
                <a href="#">
                <i className='bx bx-line-chart' ></i>
                <span className="link_name">Chart</span>
                </a>
                <ul className="sub-menu blank">
                <li><a className="link_name" href="#">Chart</a></li>
                </ul>
            </li>
            <li>
                <div className="iocn-link">
                <a href="#">
                    <i className='bx bx-plug' ></i>
                    <span className="link_name">Plugins</span>
                </a>
                <i className='bx bxs-chevron-down arrow' ></i>
                </div>
                <ul className="sub-menu">
                <li><a className="link_name" href="#">Plugins</a></li>
                <li><a href="#">UI Face</a></li>
                <li><a href="#">Pigments</a></li>
                <li><a href="#">Box Icons</a></li>
                </ul>
            </li>
            <li>
                <a href="#">
                <i className='bx bx-compass' ></i>
                <span className="link_name">Explore</span>
                </a>
                <ul className="sub-menu blank">
                <li><a className="link_name" href="#">Explore</a></li>
                </ul>
            </li>
            <li>
                <a href="#">
                <i className='bx bx-history'></i>
                <span className="link_name">History</span>
                </a>
                <ul className="sub-menu blank">
                <li><a className="link_name" href="#">History</a></li>
                </ul>
            </li> */}
          <li>
            <a href="#">
              <i className='bx bxl-github'></i>
              <span className="link_name">Github</span>
            </a>
            <ul className="sub-menu blank">
              <li><a className="link_name" href="http://github.com/red365">Github</a></li>
            </ul>
          </li>
          <li>
            <div className="profile-details">
              <div className="profile-content">
                {/* <img src="image/profile.jpg" alt="profileImg"> */}
              </div>
              <div className="name-job">
                <div className="profile_name"></div>
                <div className="job"></div>
              </div>
              <i className='bx bx-log-out' ></i>
            </div>
          </li>
        </ul>
      </div>
      {/* <section className="home-section">
        <div className="home-content">
          <i className='bx bx-menu' ></i>
          <span className="text">Drop Down Sidebar</span>
        </div>
      </section> */}
      {/* <script>
  let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
   let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
   arrowParent.classNameList.toggle("showMenu");
    });
  }
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");
  console.log(sidebarBtn);
  sidebarBtn.addEventListener("click", ()=>{
    sidebar.classNameList.toggle("close");
  });
  </script> */}
    </div>
  )
}

export default Sidebar;