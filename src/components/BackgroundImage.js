import React from 'react'

class BackgroundImage extends React.Component {
  componentWillUnmount = () => {
    // clean up event binding to prevent memory leaks
    this.image.onload = undefined;
    this.image.onerror = undefined;
  }
  
  handleImageLoaded() {
    this.setState({ loading: 'loaded' });
  }

  constructor(props) {
    super(props);
    
    this.image = new Image();
    this.image.src = this.props.imgUrl;
    this.image.onload = this.handleImageLoaded.bind(this);

    this.state = {
      loading: ''
    }
  }

  render() {
    return(
      <div
        className={`background-image ${this.state.loading}`}
        style={{
          backgroundImage: `url(${this.props.imgUrl})`,
        }}
      />
    )
  }
}

export default BackgroundImage