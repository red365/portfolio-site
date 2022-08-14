import React, { useState, useEffect, useRef } from 'react';

const Profile = props => {

  return (
    <div className="profile">
      <div className="profile-sidebar">
        <img src="/static/assets/pics/me-blazer-smiling-crop.jpg" />
      </div>
      <div className="profile-detail">
        <h2>Profile</h2>
          <p>I'm a React and front-end web developer currently looking for work. I have prevous professional development experience working for Zumatech Ltd, based in Brighton UK, between 2020
            and 2022 and have worked in the field of web applications for 7 years. I am passionate about using technology to eliminate repetition, analyse data and build clean and minimal user interfaces.
          </p>

          <p>
            The tech stack I am most familiar with is React, NodeJS, Express and MySQL however in the course of my employment I have contributed to projects in Python, Django and JQuery amongst other languages and frameworks.
            I have also looked to broaden my knowledge of NodeJS when working on my portfolio and other personal projects, creating my own production/development build process configuration using Webpack as well building a portfolio app in Svelte and Mongodb
          </p>

          <h2>Technical Experience</h2>
          <h2>Portfolio</h2>
      </div>
    </div>
  )
}

export default Profile;