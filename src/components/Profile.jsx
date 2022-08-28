import React from 'react';
import Socials from './Socials.jsx';

const Profile = props => {

  return (
    <section className="profile">
      <a name="profile"></a>
      <div className="section-heading">
        <h3>About</h3>
      </div>
      <div className="profile-header">
        <img className="profile-pic" src="/static/assets/pics/me-blazer-smiling-crop.jpg" />
        <div>
          <div>
            <h3 className="name">{process.env.FORENAME} {process.env.SURNAME}</h3>
          </div>
          <Socials />
        </div>
      </div>
      <div className="profile-detail">
        <p>I'm a React and front-end web developer with professional development experience currently looking for work. Based in Bristol, England but I am open to re-locating elsewhere in Britain.
          I am passionate about using technology to eliminate repetition, analyse data and build clean and minimal user interfaces.
        </p>

        <p>
          The tech stack I have worked most with is React, NodeJS, Express and MySQL however in the course of my employment I have contributed to company products and client apps in Python, Django and JQuery amongst other languages and frameworks.
          I have also looked to broaden my knowledge of NodeJS when working on my portfolio and other personal projects, creating my own production/development build process configuration using Webpack as well building a portfolio app in Svelte and Mongodb
        </p>

        <p>
          Find out more about my professional experience below
        </p>
      </div>
      <div className="experience">
        <h3>2020 - 2022</h3>
        <h6>Front End Developer - Zumatech Ltd, Brighton, England</h6>

        <p>Worked on the implementation of the UI design and underlying code of user interfaces for client apps and company products using
          Flexbox (CSS), React, jQuery and plain Javascript. The interfaces I built I would then integrate with company and third party APIs (such as Elastichosts)
        </p>

        <p>
          Supported legacy React apps (version 16 and earlier) by providing functionality updates and bug fixes
        </p>

        <p>
          In charge of building and maintaining a NodeJS, Express, React 16.x and Webpack 3 project template to bootstrap new React projects with
        </p>

        <h3>2022 - ?</h3>
        <p>Looking for a new partner with which to write the next chapter of my programming career</p>

        <p>Hopefully, if you've read this far, it might be with you! If you like what you have seen please feel free to contact me via the following channels: </p>
        <Socials />
        <p>I would love to hear from you!</p>
      </div>
    </section>
  )
}

export default Profile;