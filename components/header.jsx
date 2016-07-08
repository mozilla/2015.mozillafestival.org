var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var ImageTag = require('./imagetag.jsx');

var Header = React.createClass({
  render: function() {
    var logoImage = this.props.logoImage || "/assets/images/logo-mozilla-festival.svg";
    return (
      <div className="header">
        <div className="header-content">
          <div id="tabzilla">
            <a href="https://www.mozilla.org/">Mozilla</a>
          </div>
          <div className="nav-home">
            <Link to="home">
              <ImageTag src1x={logoImage}
                alt="mozfest logo"/>
            </Link>
          </div>
          <div className="nav-items">
            <div className="nav-link-container">
              <Link to="tickets">Tickets</Link>
            </div>
            <div className="nav-link-container">
              <Link to="proposals">call for proposals</Link>
            </div>
            <div className="nav-link-container">
              <Link to="location">location</Link>
            </div>
            <div className="nav-link-container">
              <Link to="expect">What to Expect</Link>
            </div>
            <div className="nav-link-container">
              <Link to="sessions">Spaces & Sessions</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Header;
