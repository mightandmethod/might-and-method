import React from "react";

class ButtonLink extends React.Component {
  render() {
    const classes = `button-link ${this.props.size} ${this.props.type}`;

    return (
      <a href={this.props.href} className={classes}>{this.props.text}</a>
    );
  }
}

ButtonLink.defaultProps = {
  size: 'regular',
  type: 'primary'
};

export default ButtonLink;