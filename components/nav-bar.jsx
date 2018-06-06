import React from 'react';
import { NavLink } from 'react-router-dom';

var ImageTag = require('./imagetag.jsx');

const NAV_LINKS = [
  // { path: `/tickets`, label: `Tickets` },
  // { externalLink: `https://guidebook.com/guide/114124/`, label: `schedule` },
  // { externalLink: `https://www.mozillapulse.org/tags/mozfest`, label: `Projects` },
  // { path: `/speakers`, label: `Speakers` },
  { path: `/about`, label: `About` },
  { path: `/proposals`, label: `Proposals` },
  { path: `/expect`, label: `What to Expect` },
  { path: `/spaces`, label: `Spaces & Experiences` },
  { path: `/house`, label: `House` },
  { path: `/team/sponsors`, label: `Sponsors` }
];

class NavBar extends React.Component {
  renderNavLinks() {
    return NAV_LINKS.map(link => {
      return <div className="nav-link-container d-inline-block mx-2 mb-2 my-sm-0" key={link.label}>
        { link.path && <NavLink to={link.path} activeClassName="active">{link.label}</NavLink> }
        { link.externalLink && <a href={link.externalLink}>{link.label}</a> }
      </div>;
    });
  }

  render() {
    return (
      <div className="nav-bar container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-column flex-sm-row justify-content-between">
              <div className="logo">
                <NavLink to="/" className="d-block text-center text-sm-left">
                  <ImageTag src1x="/assets/images/Mozilla-Festival-2018.svg" alt="mozfest logo"/>
                </NavLink>
              </div>
              <div className="nav-items d-flex align-items-center justify-content-center flex-wrap mt-4 mt-sm-0">
                { this.renderNavLinks() }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
