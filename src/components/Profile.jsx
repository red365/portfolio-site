import React from 'react';
import Socials from './Socials.jsx';
import profile from '../content/profile.js';

const Profile = props => {

  return (
    <section className="profile">
      <a name="profile"></a>
      <div className="section-heading">
        <h3>Profile</h3>
      </div>
      <div className="profile-wrapper">
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
          <p>{profile.paragraphOne}
          </p>

          <p>{profile.paragraphTwo}
          </p>

          <p>
            {profile.paragraphThree}
          </p>
        </div>
      </div>
      <div className="profile-wrapper experience">
        <div className="experience-detail">
          <h3>{profile.year1}</h3>
          <h6 className="role-row">Front End Developer - {profile.employer}</h6>
          <div className="role-column">
            <h6>Front End Developer - <a href={`https://${profile.employerWebAddress}`}>Zumatech Ltd</a></h6>
          </div>
        </div>
        <div className="profile-detail">
          <p>Worked on the implementation of the UI design and underlying code of user interfaces for client apps and company products using
            Flexbox (CSS), React, jQuery and plain Javascript. The interfaces I built I would then integrate with company and third party APIs (such as Elastichosts)
          </p>

          <p>
            Supported legacy React apps (version 16 and earlier) by providing functionality updates and bug fixes
          </p>

          <p>
            In charge of building and maintaining a NodeJS, Express, React 16.x and Webpack 3 project template to bootstrap new React projects with
          </p>
        </div>
      </div>
      <div className="profile-wrapper experience">
        <div className="experience-detail">
          <h3>{profile.year2}</h3>
        </div>
        <div className="profile-detail">
          <p>{profile.signOff1}</p>
          <Socials />
          <p className="profile-sign-off">{profile.signOff2}</p>
        </div>
      </div>
    </section>
  )
}

export default Profile;