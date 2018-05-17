import React from "react";

class ButtonLink extends React.Component {
  render() {
    const classes = `button-link ${this.props.size}`;

    return (
      <a href={this.props.href} className={classes}>{this.props.text}</a>
    );
  }
}

export default ButtonLink;