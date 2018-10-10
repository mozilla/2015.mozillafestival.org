import React from 'react';
import Jumbotron from '../components/jumbotron.jsx';
import generateHelmet from '../lib/helmet.jsx';

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.pageMetaDescription = `Please email festival@mozilla.org with your questions and suggestions!`;
  }

  render() {
    return (
      <div className="contact-page">
        {generateHelmet(this.pageMetaDescription)}
        <Jumbotron image="/assets/images/hero/contact.jpg"
          image2x="/assets/images/hero/contact.jpg">
          <h1 className="highlight">Get In Touch</h1>
        </Jumbotron>
        <div className="white-background">
          <div className="centered content wide">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <h1>Contact Info</h1>
                </div>
                <div className="col-6">
                  <h2>MozFest Weekend</h2>
                  <p>
                    <a href="https://www.google.com/maps/place/Ravensbourne+University+London/@51.5016761,0.0035609,17z/data=!3m1!4b1!4m5!3m4!1s0x47d8a81c7b6dfe23:0xc31e4c0ca6a4ace2!8m2!3d51.5016728!4d0.0057496" target="_blank" className="d-block">Ravensbourne</a>
                    Greenwich Peninsula,<br/>
                    6 Penrose Way,<br/>
                    London SE10 0EW
                  </p>
                </div>
                <div className="col-6">
                  <h2>MozFest House</h2>
                  <p>
                    <a href="https://www.google.com/maps/place/RSA+House/@51.5093702,-0.1248943,17z/data=!3m1!4b1!4m5!3m4!1s0x487604c9572d71f1:0xc61aaa0727953544!8m2!3d51.5093669!4d-0.1227056" target="_blank" className="d-block">Royal Society of Arts (RSA)</a>
                    8 John Adam St,<br/>
                    London WC2N 6EZ
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <hr className="mt-4 mb-5" />
                  <h1>Raising Issues at the Festival</h1>
                  <p>If you experience any violation of the community participation guidelines while at Mozilla Festival please email us at <a href="mailto:festivalsafety@mozilla.com">festivalsafety@mozilla.com</a>.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <hr className="mt-4 mb-5" />
                </div>
                <div className="col-6">
                  <h1>Email Us</h1>
                  <p>You can reach us with all enquiries at <a href="mailto:festival@mozilla.org">festival@mozilla.org</a>. During the festival weekend we will have a local emergency number, which will be updated closer to the event.</p>
                </div>
                <div className="col-6">
                  <h1>Social Media</h1>
                  <p>Use the hashtag <a href="https://twitter.com/search?f=realtime&q=%23mozfest&src=typd">#mozfest</a> on Twitter and join the conversation. Read the <a href="https://www.medium.com/mozilla-festival">MozFest blog</a> on Medium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="centered content wide my-0 py-5">
          We welcome suggestions to improve Mozilla Festival. It's a collaborative event and your feedback matters. Email us at <a href="mailto:festival@mozilla.org">festival@mozilla.org</a>
        </div>
      </div>
    );
  }
}

export default Contact;
