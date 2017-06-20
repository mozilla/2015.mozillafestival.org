var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var ImageTag = require('./imagetag.jsx');

var Header = React.createClass({
  render: function() {
    var logoImage = this.props.logoImage || "/assets/images/mozilla-festival_wordmark-interim_horizontal.svg";
    return (
      <div className="page-header">
        <div className="header-content">
          <div className="nav-home">
            <Link to="/">
              <ImageTag src1x={logoImage}
                alt="mozfest logo"/>
            </Link>
          </div>
          <div className="nav-items">
            <div className="nav-link-container">
              <Link to="/proposals" activeClassName="active">Propose</Link>
            </div>
            <div className="nav-link-container">
              <Link to="/about" activeClassName="active">About</Link>
            </div>
            <div className="nav-link-container">
              <Link to="/spaces" activeClassName="active">Spaces</Link>
            </div>
            <div className="nav-link-container">
              <Link to="/expect" activeClassName="active">What to expect</Link>
            </div>
            <div className="nav-link-container">
              <Link to="/projects" activeClassName="active">Projects</Link>
            </div>
            <div className="nav-link-container">
              <Link to="/team/sponsors" activeClassName="active">Sponsors</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Header;
