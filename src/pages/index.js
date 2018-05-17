import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Sidebar from '../components/Sidebar'
import Nav from '../components/Nav'
import ButtonLink from '../components/ButtonLink'
import SiteNav from '../components/SiteNav'

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
        
        <Sidebar>
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
          <Nav sticky={this.state.stickyNav} />
        </Sidebar>

        <div id="main">
          <div className="wrapper bg-whiteish">
            <h1>We can help your organization <span>do more</span></h1>
            <div style={{
              display: 'flex',
              alignItems: 'center',
            }}>
              <ButtonLink
                href="/contact"
                size="large"
                text="Let's get started"
              />
              <a href="#work">See some of our work <i className="fa fa-caret-down"></i></a>
            </div> 
            <Link to="/page-2/">Go to page 2</Link>
          </div>
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