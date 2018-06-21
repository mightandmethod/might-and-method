import React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import {faLongArrowAltRight} from '@fortawesome/fontawesome-free-solid'

class ButtonLink extends React.Component {
  render() {
    const classes = `button-link ${this.props.size} ${this.props.type} ${this.props.hasArrow ? ('has-arrow') : ('')}`;

    return (
      <a href={this.props.href} className={classes}>
        {this.props.text}
        {this.props.hasArrow ? ( <FontAwesomeIcon icon="long-arrow-alt-right" /> ) : ('')}
      </a>
    );
  }
}

ButtonLink.defaultProps = {
  size: 'regular',
  type: 'primary',
};

export default ButtonLink;