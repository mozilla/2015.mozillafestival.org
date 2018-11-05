import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

var ImageTag = require('./imagetag.jsx');

const NAV_LINKS = [
  // { path: `/tickets`, label: `Tickets` },
  // { externalLink: `https://guidebook.com/guide/114124/`, label: `schedule` },
  // { externalLink: `https://www.mozillapulse.org/tags/mozfest`, label: `Projects` },
  { path: `/about`, label: `About` },
  { path: `/why-come-to-mozfest`, label: `Why Come to MozFest` },
  { path: `/speakers`, label: `Speakers` },
  { path: `/spaces`, label: `Spaces` },
  { path: `/house`, label: `House` },
  { path: `/fringe`, label: `Fringe` },
  { path: `/team/sponsors`, label: `Sponsors` }
];

const LAYOUT_BREAK_POINT = NAV_LINKS.length >= 6 ? `lg` : `md`;

class NavBar extends React.Component {
  renderNavLinks() {
    return NAV_LINKS.map(link => {
      let item = link.path && <NavLink to={link.path} activeClassName="active" className={classNames({"btn btn-yellow": link.btn})}>{link.label}</NavLink>;

      if (link.externalLink) {
        item = <a href={link.externalLink}>{link.label}</a>;
      }

      return <div className={`nav-link-container d-inline-block mx-2 mb-2 my-${LAYOUT_BREAK_POINT}-0`} key={link.label}>
        {item}
      </div>;
    });
  }

  render() {
    return (
      <div className="nav-bar container">
        <div className="row">
          <div className="col-12">
            <div className={`d-flex flex-column flex-${LAYOUT_BREAK_POINT}-row justify-content-between`}>
              <div className="logo">
                <NavLink to="/" className={`d-block text-center text-${LAYOUT_BREAK_POINT}-left`}>
                  <ImageTag src1x="/assets/images/Mozilla-Festival-2018.svg" alt="mozfest logo"/>
                </NavLink>
              </div>
              <div className={`nav-items d-flex align-items-center justify-content-center flex-wrap mt-4 mt-${LAYOUT_BREAK_POINT}-0`}>
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
