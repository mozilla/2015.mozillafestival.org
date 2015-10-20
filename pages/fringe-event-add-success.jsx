var React = require('react');
var Header = require('../components/header.jsx');
var Footer = require('../components/footer.jsx');
var HeroUnit = require('../components/hero-unit.jsx');
var Router = require('react-router');
var Link = Router.Link;

var Success = React.createClass({
  render: function() {
    return (
      <div className="proposals-page">
        <Header/>
        <HeroUnit image="/assets/images/fringe.jpg"
                  image2x="/assets/images/fringe.jpg">
          call for proposals
        </HeroUnit>
        <div className="centered content wide">
          <h1>Success!</h1>
          <p>Thank you for your submission.</p>
          <Link to="fringe-events" className="button"><span>Want to submit another?</span></Link>
        </div>
        <Footer/>
      </div>
    );
  }
});

module.exports = Success;

