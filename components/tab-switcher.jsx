// Note: source code of this component is pretty much copied directly from https://github.com/mozilla/science.mozilla.org

var React = require(`react`);
var classNames = require(`classnames`);

import { Link } from 'react-router-dom';

// Children nodes and buttons can be hidden if empty based on hidden param passed to them.
// TODO: find a way to allow another tab to be active by default, especially if it's the only tab with content/not hidden

var TabSwitcher = React.createClass({
  propTypes: {
    baseURL: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    children: React.PropTypes.arrayOf(React.PropTypes.shape({
      props: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        "data-slug": React.PropTypes.string.isRequired,
        iconDefault: React.PropTypes.string,
        iconActive: React.PropTypes.string
      }).isRequired
    }))
  },
  getInitialState: function () {
    return {
      activeTab: this.getSlugIndex(this.props.initialTab)
    };
  },
  getSlugIndex: function(slug) {
    let slugIndex = 0; // Default to first tab

    for (let i = 0; i < this.props.children.length; i++) {
      if (this.props.children[i].props["data-slug"] === slug) {
        slugIndex = i;
        break;
      }
    }

    return slugIndex;
  },
  tabClick: function (index) {
    this.setState({activeTab: index});
  },
  render: function() {
    let buttons = this.props.children.map((element, index) => {
      if(this.props.children[index].props.hidden) { return; }

      let classnames = classNames(`btn p-2`, {
        "active": index === this.state.activeTab
      });

      return (
        <Link
          to={`${this.props.baseURL}${this.props.children[index].props["data-slug"]}`}
          className={classnames}
          onClick={this.tabClick.bind(null, index)}
          key={index}
          hidden={this.props.children[index].props.hidden}>
          <img className="icon hidden-sm-up" src={index === this.state.activeTab && element.props.iconActive ? element.props.iconActive : element.props.iconDefault}/>
          <span className="hidden-xs-down">{element.props.name}</span>
        </Link>
      );
    });

    // Remove undefined values from buttons
    buttons = buttons.filter(Boolean);

    let panels = this.props.children.map((element, index) => {
      return (
        <div
          className={`panel ${index === this.state.activeTab ? `active` : ``}`}
          key={index}>
          {element}
        </div>
      );
    });

    return (
      <div className={`tab-switcher${this.props.className ? ` ${this.props.className}` : ``}`}>
        <div className="tabs" hidden={buttons.length < 2}>{buttons}</div>
        <div className="panels">{panels}</div>
      </div>
    );
  }
});

module.exports = TabSwitcher;

