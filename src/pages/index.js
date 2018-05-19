import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
// import Waypoint from 'react-waypoint'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faArrowDown from '@fortawesome/fontawesome-free-solid/faArrowDown'

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
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />
        {/* <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint> */}
        <div className="home-main">
          <section className="wrapper">
            <div className="hero">
              <h1>We can help your organization <span>do more.</span></h1>
              <div className="hero__links">
                <ButtonLink
                  href="/contact"
                  size="large"
                  text="Let's get started"
                />
                <a href="#work">
                  See some of our work <FontAwesomeIcon icon={faArrowDown} />
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