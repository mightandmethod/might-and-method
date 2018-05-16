import React from "react";

class ButtonLink extends React.Component {
  render() {
    const href = this.props.href;
    const size = this.props.size;
    const text = this.props.text;

    const classes = `button-link ${size}`;

    return (
      <a href={href} className={classes}>{text}</a>
    );
  }
}

export default ButtonLink;