import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faChevronDown from '@fortawesome/fontawesome-free-solid/faChevronDown'

import logo from '../assets/images/logo.svg'

import Nav from '../components/Nav'
import ButtonLink from '../components/ButtonLink'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <div id="mm">
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>

        <div className="sidebar">
          <div className="sidebar__logo">
            <Link to="/">
              <img
                src={logo}
                alt=""
                style={{
                  width: '50px'
                }}
              />
            </Link>
          </div>

          <div className="sidebar__tagline">
            <h6>Might &amp;<br/>Method</h6>
            <p>We build custom digital solutions to help you thrive online</p>
          </div>

          <div className="sidebar__nav">
            
          </div>
        </div>

        <div id="main">
          <section className="wrapper bg-whiteish">
            <div className="hero">
              <h1>We can help your organization <span>do more.</span></h1>
              <div className="hero__links">
                <ButtonLink
                  href="/contact"
                  size="large"
                  text="Let's get started"
                />
                <a href="#work">
                  See some of our work <FontAwesomeIcon icon={faChevronDown} />
                </a>
              </div> 
            </div>
          </section>
        </div>
      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`