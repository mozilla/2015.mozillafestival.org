import React from 'react';
import Jumbotron from '../components/jumbotron.jsx';
import generateHelmet from '../lib/helmet.jsx';

const TREAT_EACH_OTHER = [
  `Be respectful and value each other’s ideas, styles and viewpoints.`,
  `Be direct but professional; we cannot withhold hard truths.`,
  `Be inclusive and help new perspectives be heard.`,
  `Appreciate and accommodate our many cultural practices, attitudes and beliefs.`,
  `Be open to learning from others.`,
  `Lead by example and match your actions with your words.`
];

var Guidelines = React.createClass({
  pageMetaDescription: "The Mozilla Festival respects Mozilla's community participation guidelines.",
  renderTreatOthers() {
    var list = TREAT_EACH_OTHER.map((text, i) => <li className="font-weight-bold" key={i}>{text}</li>);

    return <ul className="text-left">{list}</ul>;
  },
  render: function() {
    return (
      <div className="guidelines-page">
        {generateHelmet(this.pageMetaDescription)}
        <Jumbotron image="/assets/images/hero/guidelines.jpg"
          image2x="/assets/images/hero/guidelines.jpg">
          <h1 className="highlight">Participation Guidelines</h1>
        </Jumbotron>
        <div className="white-background">
          <div className="centered content wide">
            <h1>R-E-S-P-E-C-T</h1>
            <p>The Mozilla Festival respects Mozilla's <a href="https://www.mozilla.org/en-US/about/governance/policies/participation/">community participation guidelines</a>. These guidelines cover our behaviour as participants, facilitators, space wranglers, staff, volunteers, vendors, and anyone else involved in making MozFest possible.</p>
            <div className="horizontal-rule"></div>
            <h1>How to treat each other</h1>
            { this.renderTreatOthers() }
            <p>The following will not be tolerated at MozFest: violence and threats of violence; personal attacks; derogatory language; unwelcome sexual attention or physical contact; disruptive behaviour; influencing unacceptable behaviour.</p>
          </div>
        </div>
        <div className="centered content wide">
          <h1>Inclusion and Diversity</h1>
          <div className="half-content">
            <p>The Mozilla Project welcomes and encourages participation by everyone. It doesn&lsquo;t matter how you identify yourself or how others perceive you: we welcome you.</p>
            <p>We welcome contributions from everyone as long as they interact constructively with our community, including, but not limited</p>
          </div>
          <div className="half-content">
            <p>to people of varied age, culture, ethnicity, gender, gender-identity, language, race, sexual orientation, geographical location and religious views.</p>
            <p>Mozilla-based activities should be inclusive and should support such diversity.</p>
          </div>
        </div>
        <div className="white-background">
          <div className="centered content wide">
            <h1>Raising Issues at MozFest</h1>
            <div className="half-content">
              <p>If you believe you‘re experiencing practices at MozFest which don‘t meet the above policies, or if you feel you are being harassed in any way, please immediately contact the Festival Executive Director, Sarah Allen.</p>
              <p>During the festival week, we will have many alternative ways to raise issues online and in person.</p>
            </div>
            <div className="half-content">
              <p>Call us at <a href="tel:+44 0 22 8553030">+44 (0) 22 8553030</a> or email us at <a href="mailto:festivalsafety@mozilla.com">festivalsafety@mozilla.com</a>. These channels reach Sarah Allen, Allen Gunn, and Marc Walsh.</p>
              <p>
                You can also tweet with <a href="https://twitter.com/hashtag/mozhelp" target="_blank">#mozhelp</a> on Twitter or visit the #MozHelp desk on level 4 over MozFest weekend at Ravensbourne University, or the registration desk at MozFest House in the RSA.
              </p>
            </div>
          </div>
          <div className="centered content wide">
            <h1>Working in the Open</h1>
            <p>Because working open is one of our core values, MozFest program planning is done in the open on Github (check out our repo <a href="https://github.com/MozillaFestival/mozfest-program-2018">here</a>). We hope participants will benefit from this culture of transparency and collaboration during the Festival, and will continue to work with an open ethos in their projects after Mozfest. Learn more about <a href="https://mozilla.teachable.com/p/open-leadership-101">how we work open at Mozilla</a>.</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Guidelines;
