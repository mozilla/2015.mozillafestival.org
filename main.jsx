import React from 'react';
import generateHelmet from './lib/helmet.jsx';
import { Switch, Route, Redirect } from 'react-router';
import WhyComeToMozfestPage from './pages/why-come-to-mozfest.jsx';
import HomePage from './pages/home.jsx';
// import EnglishStrings from './pages/proposals/language/english.json';
// import ProposalsPage from './pages/proposals/proposals.jsx';
import CFPClose from './pages/cfp-closed.jsx';
import TicketsPage from './pages/tickets.jsx';
import NotFound from './pages/not-found.jsx';
import FringePage from './pages/fringe-events/fringe-events.jsx';
import HousePage from './pages/house.jsx';
import ContactPage from './pages/contact.jsx';
import Footer from './components/footer.jsx';

// let ProposalEnglish = () => <ProposalsPage lang="english" stringSource={EnglishStrings} />;

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/proposals" component={CFPClose} />
    <Route exact path="/late-proposals" component={CFPClose} />
    <Route path="/about" component={require(`./pages/about.jsx`)} />
    <Route path="/contact" component={ContactPage} />
    <Route path="/expect" component={() => <Redirect to="/why-come-to-mozfest"/>} />
    <Route path="/why-come-to-mozfest" component={WhyComeToMozfestPage} />
    <Route path="/guidelines" component={require(`./pages/guidelines.jsx`)} />
    <Route path="/volunteer" component={require(`./pages/volunteer.jsx`)} />
    <Route path="/projects" component={require(`./pages/projects.jsx`)} />
    <Route exact path="/team" component={require(`./pages/team.jsx`)} />
    <Route path="/team/:tab" component={require(`./pages/team.jsx`)} />
    <Route path="/spaces" component={require(`./pages/spaces.jsx`)} />
    <Route exact path="/fringe" component={FringePage} />
    <Route path="/fringe/success" component={require(`./pages/fringe-events/fringe-event-add-success.jsx`)} />
    <Route path="/tickets" component={TicketsPage} />
    <Route path="/media" component={require(`./pages/media.jsx`)} />
    <Route exact path="/speakers" component={require(`./pages/speakers.jsx`)} />
    <Route path="/speakers/:tab" component={require(`./pages/speakers.jsx`)} />
    <Route path="/house" component={HousePage} />
    <Route path="*" component={NotFound}/>
  </Switch>
);

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    this.handleScroll();
  }

  handleScroll() {
    // if hash is presented in the url, scroll to the anchored element
    // otherwise scorll to top
    const hash = window.location.hash;
    if (hash !== ``) {
      // Push onto callback queue so it runs after the DOM is updated,
      // this is required when navigating from a different page so that
      // the element is rendered on the page before trying to getElementById.
      // (ref: https://github.com/rafrex/react-router-hash-link/tree/react-router-v2/3)
      setTimeout(() => {
        const element = document.getElementById(hash.replace(`#`, ``));
        if (element) element.scrollIntoView(true);
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <div>
        { generateHelmet() }
        <Routes />
        <Footer />
      </div>
    );
  }
}

/* ********************
* temporarily hiding these routes
* leaving code here so we can quickly turn these pages back on in June and September
******************** */

// <Route name="remote" path="/remote" handler={require('./pages/remote.jsx')} />

export default Main;
