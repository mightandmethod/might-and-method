import React, {PropTypes} from 'react'
import 'typeface-work-sans'
import 'typeface-butler'
import '../assets/scss/main.scss'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'is-loading'
    }
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children } = this.props

    return (
      <div className={`body ${this.state.loading}`}>
          <Nav />
          {children()}
          <Footer />
      </div>
    )
  }
}

Template.propTypes = {
  children: PropTypes.func
}

export default Template
