import React, { PropTypes } from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'
import 'typeface-work-sans'
import 'typeface-butler'
import '../assets/scss/main.scss'
import { EmergeContainer } from 'react-emergence'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: 'is-loading',
      stickyNav: false,
    }
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
      this.setState({loading: ''})
    }, 500);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {
    const { children } = this.props

    return (
      <div className={`body ${this.state.loading}`}>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        <Waypoint
            onEnter={this._handleWaypointEnter}
            onLeave={this._handleWaypointLeave}
          >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />
        <EmergeContainer
          args={{
            offsetTop: 90,
            elemCushion: 0.75,
            reset: false
          }}
        >
          {children()}
        </EmergeContainer>
        { this.state.preLaunch && <Footer />}
      </div>
    )
  }
}

Template.propTypes = {
  children: PropTypes.func
}

export default Template

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
