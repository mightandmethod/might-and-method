import React from "react";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faLongArrowAltRight} from '@fortawesome/fontawesome-free-solid'

class ButtonLink extends React.Component {
  render() {
    const classes = `button-link ${this.props.size} ${this.props.type}`;

    return (
      <a href={this.props.href} className={classes}>
        {this.props.text}
        {this.props.hasArrow ? (
          <FontAwesomeIcon icon="long-arrow-alt-right" style={{marginLeft: '1em'}} />
        ) : ('')
        }
      </a>
    );
  }
}

ButtonLink.defaultProps = {
  size: 'regular',
  type: 'primary',
};

export default ButtonLink;